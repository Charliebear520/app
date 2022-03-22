import React from "react";
import { StyleSheet, Text, View,ScrollView} from "react-native";
import { Box, HStack, VStack, AspectRatio,  Pressable } from "native-base"

const AlbumDetail = props => {
   let { album,navigation } = props;
   return (
     <ScrollView style={{flexDirection: 'column',backgroundColor:"white"}}>
      <View style={styles.cardContainerStyle}>
       <View style={styles.cardSectionStyle}>
       <Pressable 
          onPress={() => navigation.navigate('Detail', album)}
        >
          <AspectRatio w="150" ratio={1}>
            <Image
              source={{ uri: album.image }}
              alt="album"
            />            
          </AspectRatio>
        </Pressable>
       </View>
      </View>
     
      <View style={styles.headerContainerStyle}>
        <Text style={styles.headerTitleStyle}>{album.title}</Text>
        <Text style={styles.headerContentStyle}>{album.artist}</Text>
      </View>   
    </ScrollView>

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
    // marginLeft: 5,
    // marginRight: 5,
    // marginTop: 10
  },
  headerContainerStyle: {
    flexDirection: "column",
    justifyContent: "space-around",
    paddingLeft: 12,
    width: 130,
  },
  headerTitleStyle: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  headerContentStyle: {
    fontSize: 11,
    fontWeight: '300',
    color: "#222",
    width: '100%'
  },
  cardSectionStyle: {
    padding: 5,
    backgroundColor: "#fff",
    // borderColor: "#ddd",
    // borderBottomWidth: 1,
  },
  imageStyle: {
    height: 200,
    width: 140,
  }
});

export default AlbumDetail;
