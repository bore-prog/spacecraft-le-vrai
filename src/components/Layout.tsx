import { SafeAreaView, StyleSheet, StatusBar } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons';

type Props = { children : React.ReactNode}

export function Layout(props: Props) {
    console.log(props)
  return (
    <SafeAreaView style={styles.container}>
        <FontAwesome5 name="space-shuttle" size={24} color="black" />
        { props.children }
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0, // only for Android to avoid status bar overlap
    },  
});