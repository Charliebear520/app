import React from "react";
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  Image,
  Button,
  Linking,
} from "react-native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Starbar from "../components/Star";

const Detail = ({ route }) => {
  const { title, artist, price, url, image, descriptions, star } = route.params;
  return (
    <ScrollView style={{ backgroundColor: "white"}}>
      <View>
        <Image
          style={styles.imageStyle}
          source={{
            uri: image,
          }}
        />
      </View>
      <View style={styles.cardContainerStyle}>
        <Text style={styles.titleIntroduce}>{title}</Text>
        <Text style={styles.introduceStyle}>{artist}</Text>
        <View style={styles.scoreStyle}>
          <Starbar star={star} />

          <Text>
            {star != null ? (
              <Text>
                {star}.0 <Text style={{ color: "gray" }}>/ 5.0</Text>
              </Text>
            ) : null}
          </Text>
        </View>
        <Text style={styles.describeStyle}>{descriptions}</Text>
        <Pressable
          onPress={() => Linking.openURL(url)}
          style={styles.buttonStyle}
        >
          <Text style={styles.buttonTextStyle}>BUY NOW FOR ${price}</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  imageStyle: {
    height: 300,
    width: 210,
    alignSelf: "center",
    marginTop: 8,
  },
  cardContainerStyle: {
    backgroundColor: "white",
    padding: 10,
    marginHorizontal: 10,
    marginTop: 10,
  },
  titleIntroduce: {
    color: "black",
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "Roboto",
  },
  introduceStyle: {
    fontWeight: "400",
    textAlign: "center",
    fontSize: 14,
    marginVertical: 20,
    fontFamily: "Roboto",
    color: "gray",
  },
  describeStyle: {
    fontSize: 16,
    fontWeight: "400",
    fontFamily: "Roboto",
    lineHeight: 24,
    textAlign: "center",
    color: "#131313",
    letterSpacing: 0.8,
  },
  buttonStyle: {
    width: 190,
    height: 36,
    // color: "pink",
    backgroundColor: "#6200EE",
    alignSelf: "center",
    marginTop: 28,
    borderRadius: 4,
  },
  buttonTextStyle: {
    color: "#fff",
    textAlign: "center",
    lineHeight: 35,
    letterSpacing: 1.2,
    fontWeight: "500",
  },
  scoreStyle: {
    flexDirection: "row",
    justifyContent: "center",
  },
  scoreTextStyle: {
    fontSize: 14,
    fontFamily: "Roboto",
    fontWeight: "400",
  },
});

export default Detail;