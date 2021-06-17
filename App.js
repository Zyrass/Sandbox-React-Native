// Dépendances
import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  ActivityIndicator,
} from 'react-native';
import { useFonts } from "expo-font"

export default function App() {
  {
    /**
     * -------------------------------------------------------------------
     * FONCTIONS
     * -------------------------------------------------------------------
     */
  }

  {
    /**
     * -------------------------------------------------------------------
     * POLICES D'ECRITURE
     * -------------------------------------------------------------------
     */
  }
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

  {
    /**
     * -------------------------------------------------------------------
     * APPLICATION
     * -------------------------------------------------------------------
     */
  }
  return (
    <View>
      <Text>Coucou toto</Text>
    </View>
  )
}



{
  /**
   * -------------------------------------------------------------------
   * STYLES
   * -------------------------------------------------------------------
   */
}
const styles = StyleSheet.create({});
