{
  /**
   * -------------------------------------------------------------------------
   * DEPENDANCES - LIBRAIRIES
   * -------------------------------------------------------------------------
   */
}
import { StatusBar } from 'expo-status-bar'
import React, { useState, useEffect } from 'react'
import {
  View,
  Modal,
  Text,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Platform,
  Linking,
  FlatList
} from 'react-native'

{
  /**
   * -------------------------------------------------------------------------
   * COMPOSANTS INTERNE
   * -------------------------------------------------------------------------
   */
}
import Product from '../../Components/Product/Product'

{
  /**
   * -------------------------------------------------------------------------
   * VARIABLES - Pour "Dimmensions"
   * -------------------------------------------------------------------------
   */
}
const window = Dimensions.get('window')
const screen = Dimensions.get('screen')

{
  /**
   * -------------------------------------------------------------------------
   * VARIABLES - Couleurs de l'application.
   * -------------------------------------------------------------------------
   */
}
const overlay = "rgba(33, 33, 33, 0.8)" // Overlay
const blue = "#0091c1"
const blueLight = "#add8e6"             // lightBlue
const green = "#00643c"                 // Vert Logo Starbucks
const white = "#ffffff"


function Home() {
  
  {
    /**
     * -------------------------------------------------------------------------
     * ETAT
     * -------------------------------------------------------------------------
     */
  }
  const [modalPresentation, setModalPresentation] = useState( true )
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
  const [dimensions, setDimensions] = useState({ window, screen })
  const [statusMenu, setStatusMenu] = useState(false)
  
  {
    /**
     * -------------------------------------------------------------------------
     * CYCLE DE VIE 
     * -------------------------------------------------------------------------
     */
  }
  useEffect( () => {
    Dimensions.addEventListener("change", changeOrientation)
    return () => {
      Dimensions.removeEventListener("change", changeOrientation)
    }
  })

  {
    /**
     * -------------------------------------------------------------------------
     * FONCTIONS
     * -------------------------------------------------------------------------
     */
  }
  const changeOrientation = ({ window, screen }) => {
    setDimensions({ window, screen })
  }

  const toggleMenuHandler = () => {
    setStatusMenu( currentStatusMenu => !currentStatusMenu )
  }

  {
    /**
     * -------------------------------------------------------------------------
     * APPLICATION
     * -------------------------------------------------------------------------
     */
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style = {{ 
        ...styles.container,
        paddingVertical: dimensions.window.width * 0.55
      }}>

        {
          /**
           * -------------------------------------------------------------------
           * MODAL DE PRESENTATION
           * Visible au démarrage puis une fois fermé on peut naviguer partout.
           * -------------------------------------------------------------------
           */
        }
        <Modal
          animationType = "slide"
          transparent = { true }
          visible = { modalPresentation }
        >

          <TouchableOpacity
            onPress = { () => setModalPresentation( false )}
            style = { styles.modal__container }
          >
            <View style = {{ 
              ...styles.modal__content,
              ...styles.shadow
            }}>
              <Text style = {{ 
                ...styles.h1,
                fontSize: dimensions.window.width * 0.55
              }}>
                SandBox React Native
              </Text>

              <Text style = {{ ...styles.p, ...styles.textWhite }}>
                Cette application a été construite de zéro.
              </Text>
              
              <Text style = {{ ...styles.p, ...styles.textWhite }}>
                Avec celle-ci je découvre 
                <Text style = {{ 
                  ...styles.p, 
                  ...styles.textWhite, 
                  ...styles.strong 
                }}>
                  React Native
                </Text> 
                pour concevoir des applications mobile que ce soit pour Iphone, tablette, Android ou bien même un TV..
              </Text>
            </View>
          </TouchableOpacity>

        </Modal> {/* /end Modal de présentation */}

        {
          /**
           * -------------------------------------------------------------------
           * LOGO
           * TouchableWithoutFeedback me permet de cliquer sur le logo et
           * d'afficher dans la console, un message.
           * -------------------------------------------------------------------
           */
        }
        <TouchableWithoutFeedback
          onPress = { () => console.log("Futur retour sur la page d'accueil..")}
        >
          <View>
            <Logo 
              source = { require("../../assets/images/splash.png") } 
              logoWidth = { 0.23 }
              logoHeight = { 0.23 }
            />
          </View>
        </TouchableWithoutFeedback>

        {
          /**
           * -------------------------------------------------------------------
           * TITRE
           * -------------------------------------------------------------------
           */
        }
        <Text style = {{ 
          ...styles.h1,
          fontSize: dimensions.window.width * 0.055
        }} >
          Starbuks
        </Text>
      
        {
          /**
           * -------------------------------------------------------------------
           * STATUS DU MENU
           * Selon le status du menu, un message est affiché à l'écran.
           * -------------------------------------------------------------------
           */
        }
        <Text style = {{ ...styles.p, ...styles.strong }}>
          {
            statusMenu
              ? "Sélectionner une boisson pour émoustiller vos papilles"
              : "Vous avez une petite soif !?"
          }
        </Text>

        {
          /**
           * -------------------------------------------------------------------
           * Liste des Produits
           * Ici, il est question d'utiliser le composant product
           * -------------------------------------------------------------------
           */
        }
        {
          menuStarbucks && (
            <FlatList
              data = { products }
              keyExtractor = { element.productID }
              renderItem = { item => (
                <Product
                  coffeeName = { item }
                  id = { item.productID }
                />
              )}
            />
          )
        }

        {
          /**
           * -------------------------------------------------------------------
           * BUTTON POUR LE MENU
           * -------------------------------------------------------------------
           */
        }
        <TouchableOpacity
          style = {{
            backgroundColor: { green },
            padding: 15,
            marginTop: 20,
            marginBottom: 60,
            borderRadius: 3
          }}
          activeOpacity = { 0.8 }
          onPress = { toggleMenuHandler }
        >
          <Text style = {{ color: { white } }}>
            {
              !menuStarbucks
                ? "Découvrez nos superbes boissons"
                : "Cachez nos boissons..."
            }
          </Text>
        </TouchableOpacity>

        {
          /**
           * -------------------------------------------------------------------
           * DETECTER LA VERSION DE L'APPAREIL
           * -------------------------------------------------------------------
           */
        }
        <View style = {{ 
          alignItems: 'center',
          justifyContent: 'center',
          marginVertical: 20 
        }}>

          <TouchableOpacity
            onPress = { () => Linking.openURL("https://starbucks.fr") }
          >
            <Text style={{ color: { blue } }}>starbucks.fr</Text>
          </TouchableOpacity>

          <Text>
            Version 
              <Text style = { styles.strong }>
                { 
                  Platform.OS === 'ios' 
                    ? "Iphone" 
                    : Platform.OS === 'macos'
                      ? "Mac"
                      : Platform.OS === 'windows'
                        ? "Windows"
                        : Platform.OS === 'web'
                          ? "Web"
                          : "Android"
                }
              </Text>
          </Text>
        </View>

      </View> {/* /end View.container */}

      <StatusBar style="auto" />
    </SafeAreaView>
  )
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: "space-between",
    backgroundColor: { green },
  },
  modal__container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: { overlay }
  },
  modal__content: {
    backgroundColor: { blueLight },
    borderWidth: 1,
    borderColor: { blue },
    width: "90%",
    padding: 25,
    
  },
  shadow: {
    // Ombre pour Android
    elevation: 6,
    // Ombre pour Iphone
    shadowColor: { black },
    shadowOpacity: 0.9,
    shadowRadius: 1,
    shadowOffset: {
      width: 0,
      height: 0
    }
  },
  textWhite: {
    color: { white },
  },
  h1: {
    fontFamily: 'Montserrat-Black',
    textTransform: "uppercase",
    color: { green }
  },
  h2: {

  },
  h3: {

  },
  p: {
    fontFamily: "Lato-Black",
    margin: 20,
    padding: 20,
    marginVertical: 5,
  },
  strong: {
    fontWeight: "700"
  },
  em: {
    fontStyle: "italic"
  },
  ul: {
    backgroundColor: { green },
    padding: 25,
    marginTop: 25,
    width: "100%"
  }

})

export default Home
