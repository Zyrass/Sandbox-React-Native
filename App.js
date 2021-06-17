// Dépendances
import { StatusBar } from 'expo-status-bar';
import { element } from 'prop-types';
import React, { useState, useEffect } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Button, 
  Image, 
  // ScrollView,
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Modal,
  ActivityIndicator,
  Linking,
  Dimensions,
  Platform,
  SafeAreaView, // Zone proétégé
} from 'react-native';
import { useFonts } from "expo-font"

// Components
import Product from "./Components/Product/Product"

// Variables pour Dimensions
const window = Dimensions.get("window")
const screen = Dimensions.get("screen")

export default function App() {
  // State
  const [statusMenu, setStatusMenu] = useState(false)
  const [products, setProducts] = useState([
    {
      productID: "001",
      name: 'Iced Latte',
    },
    {
      productID: "002",
      name: 'Doubleshot Iced Coffee',
    },
    {
      productID: "003",
      name: 'Doubleshot Vanilla Iced Coffee',
    },
    {
      productID: "004",
      name: 'Caramel Macchiato',
    },
    {
      productID: "005",
      name: 'Iced Caramel Macchiato',
    },
    {
      productID: "006",
      name: 'Iced Cappuccino',
    },
    {
      productID: "007",
      name: 'Ristretto Bianco',
    },
    {
      productID: "008",
      name: 'Cold Brew Latte',
    },
    {
      productID: "009",
      name: 'Mocha',
    },
    {
      productID: "010",
      name: 'Iced Mocha',
    },
    {
      productID: "011",
      name: 'Americano',
    },
    {
      productID: "012",
      name: 'Iced Americano',
    },
    {
      productID: "013",
      name: 'Café Filtre',
    },
    {
      productID: "014",
      name: 'Café Filtre Glacé',
    },
    {
      productID: "015",
      name: 'Chocolat Viennois Signature',
    },
    {
      productID: "016",
      name: 'Chocolat Viennois Signature Glacé',
    },
  ]);
  const [menuStarbucks, setMenuStarbucks] = useState(false)
  const [dimensions, setDimensions] = useState({ window, screen })

  // Cycle de vie 
  useEffect( () => {
    Dimensions.addEventListener("change", onChange)

    return () => {
      Dimensions.removeEventListener("change", onChange)
    }
  })

  // Functions
  const onChange = ({window, screen}) => {
    setDimensions({ window, screen })
  }

  const toggleMenuStarbucksHandler = () => {
    setStatusMenu( currentStatusMenu => ! currentStatusMenu )
    setMenuStarbucks( currentMenuStarbucks => !currentMenuStarbucks )
  }

  // const checkCommandHandler = () => {
  //   setStatusCommand( currentStatusCommand => !currentStatusCommand )
  // }

  // Fonts Perso
  const [myFonts] = useFonts({
    "Lato-Black": require("./assets/fonts/Lato-Black.ttf"),
    "Montserrat-Black": require("./assets/fonts/Montserrat-Black.ttf")
  })

  if ( !myFonts ) {
    return (
      <View style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}>
        <ActivityIndicator size="large" color="#00d9e2" />
      </View>
    )
  }

  // let logoStyle = { width: 150, height: 150, marginBottom: 20 }
  // if ( Dimensions.get('window').width < 400 ) {
  //   logoStyle = { width: 75, height: 75, marginBottom: 10 }
  // }

  let logoStyle = {
    width: dimensions.window.width * 0.23,
    height: dimensions.window.width * 0.23
  }

  return (
    // <ScrollView>
    <SafeAreaView style={{ flex: 1}}>
      <View style={{
        ...styles.container,
        paddingVertical: dimensions.window.width * 0.05
      }}>

        <TouchableWithoutFeedback
          onPress = { () => console.log("Futur retour sur la page d'accueil" )}
        >
          <View>
            <Image 
              source = {
                require("./assets/images/splash.png")
              }
              style = { logoStyle }
            />
          </View>
        </TouchableWithoutFeedback>

        <Text style = {{ 
          ...styles.h1,
          fontSize: dimensions.window.width * 0.055,

        }}>
          Starbucks 
        </Text>

        <Text style = { styles.p }>
          {
            statusMenu
              ? "Sélectionner une boisson pour émoustiller vos papilles!"
              : "Une petite soif !?"
          }
        </Text>

        {
          menuStarbucks && 
              (
                <FlatList
                  style = { styles.ul }
                  keyExtractor = { element.productID }
                  data = { products }
                  renderItem = { element => (
                    <Product 
                      coffeeName={ element } 
                      id = { element.productID }
                    />
                  )}

                />
              )
        } 

        {/* <Button 
          onPress = { toggleMenuStarbucksHandler }
          title = {
            !menuStarbucks
              ? "Découvrez nos superbes boissons"
              : "Cachez nos superbes boissons..."
          }
          color = "#013301"
        /> */}

        <TouchableOpacity
          style = {{
            backgroundColor: "#013301",
            paddingHorizontal: 15,
            paddingVertical: 15,
            marginTop: 20,
            marginBottom: 60,
            borderRadius: 3
          }}
          activeOpacity = { 0.8 }
          onPress = { toggleMenuStarbucksHandler }

        >
          <Text style = {{ color: "#f3f3f3" }}>
            {
              !menuStarbucks
                ? "Découvrez nos superbes boissons"
                : "Cachez nos superbes boissons..."
            }
          </Text>
        </TouchableOpacity>


        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
    // </ScrollView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  h1: {
    
    color: "#013301",
    textTransform: "uppercase",
    fontFamily: "Montserrat-Black"
  },
  p: {
    textAlign: "center",
    margin: 20,
    fontFamily: "Lato-Black"
  },
  ul: {
    backgroundColor: "#013301",
    // paddingBottom: 25,
    paddingVertical: 25,
    paddingHorizontal: 25,
    marginTop: 25,
    width: "100%"
  },
  modal: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(33, 33, 33, 0.8)",
  },
  modal__content: {
    borderWidth: 1,
    width: "80%",
    backgroundColor: "#0091c1",
    padding: 25,
    alignItems: "center"
    
  }
  
});
