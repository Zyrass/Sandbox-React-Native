import React from "react"
import { 
  Text, 
  StyleSheet,
  TouchableHighlight,
  Alert,
  Dimensions
} from "react-native"

function Product({ coffeeName, id }) {

  // Functions
  const itemClicked = () => {
    console.log( coffeeName.item.name )
    Alert.alert(
      "En cours de conception", 
      `Êtes-vous sûr de vouloir un ${coffeeName.item.name} !?`, 
      [
        {
          text: "Je veux changé",
          style: "cancel"
        },
        { 
          text: "Oui",
          style: "destructive"
        },
      ])
  }

  return (
    <TouchableHighlight
      onPress = { itemClicked }
      activeOpacity = { 0.8 }
      underlayColor = "#606f60"
    >
      <Text
        key= { id } 
        style = { styles.li }
      >- { coffeeName.item.name }</Text>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  li: {
    color: "#f9f9f9",
    padding: Dimensions.get("window").width < 400 ? 10 : 20,
    paddingLeft: Dimensions.get('window').width < 400 ? 10 : 20,
    display: "flex",
    borderBottomWidth: 1,
    borderColor: "#999",
    marginBottom: 5
  }
})

export default Product