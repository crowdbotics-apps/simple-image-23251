import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export default class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = {}

  render = () => (
    <View style={styles.View_1}>
      <Image
        resizeMode="contain"
        source={{
          uri:
            "https://d3tklmlrp1a8c2.cloudfront.net/media/project_component_resources/nike_5D4R06V.jpg"
        }}
        style={styles.Image_3}
      />
      <Button
        title="Press me!"
        onPress={() => this.props.navigation.navigate("BlankScreen2183174")}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  View_1: {
    width: "40%",
    height: 40,
    alignSelf: "flex-start",
    justifyContent: "space-between",
    alignItems: "flex-end",
    alignContent: "flex-start"
  },
  Image_3: { width: "50%", height: 100, alignSelf: "center" },
  Button_5: {}
})
