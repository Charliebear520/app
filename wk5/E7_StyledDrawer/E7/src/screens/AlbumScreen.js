import React from "react";
import { Box } from "native-base";
import AlbumList from "../components/AlbumList";
import albumData from "../json/album_section.json";
import sections from "../json/albums.json";

// "../json/albums.json";
// "../json/album_section.json";
const AlbumScreen = ({ navigation }) => {
  return (
    <Box>
      <AlbumList 
        list={albumData.albumList}
        section={sections}
        navigation={navigation}
      />
    </Box>
    
  );
};

export default AlbumScreen;
