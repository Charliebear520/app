import React from "react";
import { StyleSheet, View, Text, Image, ImageBackground } from "react-native";

const AlbumDetail = (props) => {
  const { thumbnail_image, title, artist, image, } = props.album;
  return (
    <View style={styles.cardContainerStyle}>   
     <View style={[styles.thumbnailContainerStyle, styles.cardSectionStyle]}>
        <ImageBackground  resizeMode="cover" style={styles.backgroundImg} blurRadius={10} source={{uri: image}}>
         {/* 下方為專輯照片區 */}
          <View style={styles.cardSectionStyle}>
            <Image style={styles.imageStyle}source={{uri: image}} />
         </View>
         
         {/* 下方為專輯介紹區 */}
         <View style={styles.headerContentStyle}>
            <Text style={styles.titleStyle}>{title}</Text>
            <View style={styles.artistContentStyle}>
              <Image style={styles.thumbnailStyle}source={{uri: thumbnail_image}}/>
              <Text style={styles.artistStyle}>{artist}</Text>
            </View>
         </View>       
        </ImageBackground>      
     </View>        
    </View>
  );
}

const styles = StyleSheet.create({
  thumbnailContainerStyle: {
    flexDirection: "row",
    justifyContent: "center"
  },
  artistContentStyle:{
    flexDirection: "row",
    justifyContent: "center",
  },
  thumbnailStyle: {
    height: 40,
    width: 40,
    margin: 5,
    borderRadius:100, 
  },
  headerContentStyle: {
    flexDirection: "column",
    justifyContent: "center",
    padding: 10,
  },
  cardContainerStyle: {
    borderRadius: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  },
  cardSectionStyle: {
    flexDirection:"row",
    justifyContent:"center",
  },
  imageStyle: {
    height: 300,
    width: 300,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  titleStyle:{
    justifyContent:"center",
    textAlign:"center",
    fontSize:20,
    fontWeight:"bold",
    color:"#f8f8f8",
  },
  artistStyle:{
    margin:10,
    fontSize:20,
    color:"#ced4da",
  },
  backgroundImg:{
    flex: 1,
    height:500,
    width:null,
    justifyContent: "center"
  },
});

export default AlbumDetail;