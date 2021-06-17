
import React from 'react'
import { Image, Dimensionsœ } from 'react-native'

function Logo( props ) {

  let logoResponsive = {
    width: Dimensions.get('window').width * props.width,
    height: Dimensions.get("window").width * props.height
  }
  
  return (
    <Image 
      source={ props.url }
      style = { logoResponsive } 
    />
  )
}

export default Logo
