import React from "react";
import { FlatList,SectionList,Text,StyleSheet } from "react-native";
import AlbumDetail from "./AlbumDetail";
import HotAlbumDetail from "./HotAlbumDetail";
import sections from "../json/album_section.json";
import { ScrollView } from "native-base";



const AlbumList = ({navigation}) => {
  
  const renderSectionHeader = ({section}) =>
  (   
    <>
    <ScrollView>
    <Text style={styles.sectionHeader}>{section.title}</Text>
      {section.horizontal ? (
        <FlatList 
          horizontal={true}
          data={section.data}
          renderItem={({ item }) => <HotAlbumDetail album={item} navigation={navigation}/>}
          showsHorizontalScrollIndicator={false}
          keyExtractor={ item => item.title }
        />

      ) : null}
    </ScrollView>

    </>
  );

 
  const renderItem = ({ section}) => {
    if (section.horizontal) {
      return null;
    }
    return <AlbumDetail album={section} />
  };

  // const renderItem = ({ item }) =><AlbumDetail 
  //   album={item} 
  //   navigation={navigation}
  //   />

  return (  
    <SectionList 
      sections={sections}
      // contentContainerStyle={{ paddingHorizontal: 10 }}
      stickySectionHeadersEnabled={false}
      showsHorizontalScrollIndicator={false}
      renderSectionHeader={renderSectionHeader}
      renderItem={renderItem}
      keyExtractor={ item => item.title }
    /> 
  );
};

const styles = StyleSheet.create({
  sectionHeader: {
    fontWeight: '500',
    fontSize: 24,
    paddingTop: 20,
    paddingBottom: 10,
    paddingLeft: 10,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    backgroundColor:'white',
  },

})
export default AlbumList;

