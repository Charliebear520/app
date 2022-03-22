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
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Star = (props) => {
  if (props.star == 1) {
    return (
      <View style={styles.starFlex}>
        <MaterialCommunityIcons name="star-outline" color={"gray"} size={18} />
        <MaterialCommunityIcons name="star-outline" color={"gray"} size={18} />
        <MaterialCommunityIcons name="star-outline" color={"gray"} size={18} />
        <MaterialCommunityIcons name="star-outline" color={"gray"} size={18} />
        <MaterialCommunityIcons name="star-outline" color={"gray"} size={18} />
      </View>
    );
  } else if (props.star == 2) {
    return (
      <View style={styles.starFlex}>
        <MaterialCommunityIcons name="star" color={"#FFC41F"} size={18} />
        <MaterialCommunityIcons name="star" color={"#FFC41F"} size={18} />
        <MaterialCommunityIcons name="star" color={"gray"} size={18} />
        <MaterialCommunityIcons name="star" color={"gray"} size={18} />
        <MaterialCommunityIcons name="star" color={"gray"} size={18} />
      </View>
    );
  } else if (props.star == 3) {
    return (
      <View style={styles.starFlex}>
        <MaterialCommunityIcons name="star" color={"#FFC41F"} size={18} />
        <MaterialCommunityIcons name="star" color={"#FFC41F"} size={18} />
        <MaterialCommunityIcons name="star" color={"#FFC41F"} size={18} />
        <MaterialCommunityIcons name="star" color={"#c3c3c7"} size={18} />
        <MaterialCommunityIcons name="star" color={"#c3c3c7"} size={18} />
      </View>
    );
  } else if (props.star == 4) {
    return (
      <View style={styles.starFlex}>
        <MaterialCommunityIcons name="star" color={"#FFC41F"} size={18} />
        <MaterialCommunityIcons name="star" color={"#FFC41F"} size={18} />
        <MaterialCommunityIcons name="star" color={"#FFC41F"} size={18} />
        <MaterialCommunityIcons name="star" color={"#FFC41F"} size={18} />
        <MaterialCommunityIcons name="star" color={"#c3c3c7"} size={18} />
      </View>
    );
  } else if (props.star == 5) {
    return (
      <View style={styles.starFlex}>
        <MaterialCommunityIcons name="star" color={"#FFC41F"} size={18} />
        <MaterialCommunityIcons name="star" color={"#FFC41F"} size={18} />
        <MaterialCommunityIcons name="star" color={"#FFC41F"} size={18} />
        <MaterialCommunityIcons name="star" color={"#FFC41F"} size={18} />
        <MaterialCommunityIcons name="star" color={"#FFC41F"} size={18} />
      </View>
    );
  } else {
    return null;
  }
};

const styles = StyleSheet.create({
  starFlex: {
    flexDirection: "row",
  },
});

export default Star;
