import { SafeAreaView, StyleSheet, StatusBar, View } from 'react-native'
import React from 'react'
import { Header } from "../components/Header";
import { Offline } from "./Offline";

type Props = { children : React.ReactNode}

export function Layout(props: Props) {
  return (
    <View style={styles.container}>
      <Header title="SpaceCraft"/>
      <Offline />
      <SafeAreaView>
          { props.children }
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0, // only for Android to avoid status bar overlap
    },  
});