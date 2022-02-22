import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.Image} source={require("./assets/桌布.jpg")}></Image>
      <Text style={styles.Text1}>110919009</Text>
      <Text style={styles.Text2}>黃塏峻</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text1:{
    color:'#c9ada7',
    fontStyle:'normal',
    fontSize:20,
    letterSpacing:20,
  },
  Text2:{
    color:'#ffbe0b',
    fontWeight:'700',
    fontSize:15,
    letterSpacing:5,
    marginTop:15,
  },
  Image: {
    width: 500,
    height: 500,
    alignItems: "center",
    justifyContent: "center",
  },
});
