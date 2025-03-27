import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from './Home'

const B2 = () => {
  return (
   <View style={styles.header}>

         <Text style={styles.hometxt}>B2</Text>
       </View>
  )
}

export default B2

const styles = StyleSheet.create({
    header:{
        display:'flex',
        alignItems:'center',
        
    },
    hometxt:{
        fontWeight:"bold",
        fontSize:30,
    }
})
