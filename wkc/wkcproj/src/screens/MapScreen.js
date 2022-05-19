import React, { useEffect, useState } from "react";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Box, Center, Pressable, Actionsheet, useDisclose } from "native-base";

import ActionButton from "../components/ActionButton";
import ActionScreen from "./ActionScreen";

import { getUbikeInfo } from "../api";
import metroJson from "../json/taipeiMetro.json";
import mapStyle from "../mapStyle/mapStyle.json";

const MapScreen = () => {
  const [msg, setMsg] = useState("Waiting...");

  const [metro, setMetro] = useState(metroJson);

  const [ubike, setUbike] = useState([]);

  const [onCurrentLocation, setOnCurrentLocation] = useState(false);

  const [zoomRatio, setZoomRatio] = useState(1);
 
  const [region, setRegion] = useState({
    longitude: 121.544637,
    latitude: 25.024624,
    longitudeDelta: 0.01,
    latitudeDelta: 0.02,
  });
 
  const [marker, setMarker] = useState({
    coord: {
      longitude: 121.544637,
      latitude: 25.024624,
    },
    name: "我的位置",
  });
 
  const onRegionChangeComplete = (rgn) => {
    if (
      Math.abs(rgn.latitude - region.latitude) > 0.0002 ||
      Math.abs(rgn.longitude - region.longitude) > 0.0002
    ) {
   
      setOnCurrentLocation(false);
    }
   
    if (rgn.longitudeDelta > 0.02) setZoomRatio(0.02 / rgn.longitudeDelta);
    else setZoomRatio(1);
  };

  
  const setRegionAndMarker = (location) => {
    setRegion({
      ...region,
      longitude: location.coords.longitude,
      latitude: location.coords.latitude,
    });
    setMarker({
      ...marker,
      coord: {
        longitude: location.coords.longitude,
        latitude: location.coords.latitude,
      },
    });
  };

  const getLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setMsg("Permission to access location was denied");
      return;
    }
    
    let loc = Location.watchPositionAsync(
      {
        accuracy: Location.Accuracy.High,
        distanceInterval: 2000,
        timeInterval: 1000,
      },
      (loc) => setRegionAndMarker(loc)
    );
    
    setOnCurrentLocation(true);
  };

  
  const getUbikeData = async () => {
    const ubikeData = await getUbikeInfo();
    setUbike(ubikeData);
  };


  useEffect(() => {
    getLocation();
    getUbikeData();
  }, []);


  const { isOpen, onOpen, onClose } = useDisclose();

  const [ubikeSite, setUbikeStatioin] = useState({});

  return (
    <Box flex={1}>
      <MapView
        initialRegion={region}
  
        style={{ flex: 1 }}
        provider={"google"}
   
        customMapStyle={mapStyle}
        onRegionChangeComplete={onRegionChangeComplete}
      >
        <Marker
          coordinate={{
            latitude: marker.coord.latitude,
            longitude: marker.coord.longitude,
          }}
          title={marker.name}
        >
          <MaterialCommunityIcons name={"target"} size={26} color={"#FCFAF2"} />
        </Marker>
        {zoomRatio > 0.14 &&
          metro.map((site) => (
            <Marker
              coordinate={{
                latitude: site.StationPosition.PositionLat,
                longitude: site.StationPosition.PositionLon,
              }}
              key={site.StationUID}
              title={site.StationName.Zh_tw}
              description={site.StationAddress}
              tracksViewChanges={false}
            >
              <Center
                bg="#cad4bc"
                borderRadius={60}
                p={2 * zoomRatio}
                borderWidth={2}
                borderColor="#0288D1"
              >
                <MaterialCommunityIcons
                  name={"train"}
                  size={14 * zoomRatio}
                  color={"#252b16"}
                />
              </Center>
            </Marker>
          ))}
        {zoomRatio > 0.14 &&
          ubike.map((site) => (
            <Marker
              coordinate={{
                latitude: Number(site.lat),
                longitude: Number(site.lng),
              }}
              key={site.sno}
              title={`${site.sna} ${site.sbi}/${site.bemp + site.sbi}`}
              description={site.ar}
              tracksViewChanges={false}
              onPress={() => {
                setUbikeStatioin(site);
                // console.log("I am working");
                onOpen();
              }}
            >
              <Pressable onPress={() => console.log("I am not working")}>
                <ActionButton zoomRatio={zoomRatio} site={site} />
              </Pressable>
            </Marker>
          ))}
      </MapView>
      {!onCurrentLocation && (
        <Box
          bg={"#FCFAF2"}
          borderRadius={60}
          position={"absolute"}
          shadow={"2"}
          zIndex={99}
          right={5}
          bottom={5}
        >
          <MaterialCommunityIcons
            name={"target"}
            size={60}
            color={"#252b16"}
            onPress={getLocation}
          />
        </Box>
      )}
      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <ActionScreen onClose={onClose} site={ubikeSite} />
      </Actionsheet>
    </Box>
  );
};

export default MapScreen;