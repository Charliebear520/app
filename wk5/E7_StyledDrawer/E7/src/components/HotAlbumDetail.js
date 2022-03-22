import React from "react";
import { StyleSheet, Text, View, Image} from "react-native";
import { Box, HStack, VStack, AspectRatio,  Pressable } from "native-base"
import Star from "../components/Star"

const HotAlbumDetail = props => {
   let { album,navigation } = props;
   return (
     <View style={{flexDirection: 'column' ,backgroundColor:'white'}}>
      {/* <View style={styles.cardContainerStyle}>
        <View style={styles.cardSectionStyle}>
          <Image
            style={styles.imageStyle}
            source={{uri: album.image}}
          />
        </View>
      </View>   */}
      <View style={styles.cardContainerStyle}>
       <View style={styles.cardSectionStyle}>
       <Pressable 
          onPress={() => navigation.navigate('Detail', album)}
        >
          <AspectRatio h="200" ratio={0.7}>
            <Image
              style={styles.imageStyle}
              source={{ uri: album.image }}
              alt="album"
            />            
          </AspectRatio>
        </Pressable>
       </View>
      </View>
     
      <View style={styles.headerContainerStyle}>
        <Star star={album.star} />
        <Text style={styles.headerTitleStyle}>{album.title}</Text>
        <Text style={styles.headerContentStyle}>{album.artist}</Text>
      </View>   
    </View>

  )};

const styles = StyleSheet.create({
  cardContainerStyle: {
    // borderWidth: 1,
    // borderRadius: 2,
    // borderColor: "#ddd",
    // shadowColor: "#000",
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.1,
    // shadowRadius: 2,
    // elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    
    // height:200,
    // width:140,
  },
  headerContainerStyle: {
    flexDirection: "column",
    justifyContent: "space-around",
    paddingLeft: 12,
    width: 130,
    marginTop:16,
  },
  headerTitleStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    width:140,
  },
  headerContentStyle: {
    fontSize: 12,
    fontWeight: '500',
    color: "#131313",
    width: '100%'
  },
  cardSectionStyle: {
    // height:215,
    // padding: 5,
    backgroundColor: "#fff",
    // // borderColor: "#ddd",
    // // borderBottomWidth: 1,
    // height:200,
    // width:null,
  },
  imageStyle:{
    width: null,
    height:200,
  },
});

export default HotAlbumDetail;
