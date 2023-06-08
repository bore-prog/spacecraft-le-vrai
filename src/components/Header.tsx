import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet } from "react-native";
import React from "react";
import { Text, useTheme } from "react-native-paper";
import Constants from "expo-constants";
import { FontAwesome5 } from '@expo/vector-icons';

type HeaderProps = {
  title: string;
};

export const Header = ({ title }: HeaderProps) => {
  const theme = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.primary }]}>
    <StatusBar style='light'></StatusBar>
      <FontAwesome5 name="space-shuttle" size={21} color="#fff" />
      <Text variant="headlineLarge" style={styles.headerText}>
        {title}
      </Text>
      <FontAwesome5 name="space-shuttle" size={21} color="#fff" style={{transform: [{rotateY: '180deg'}]}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    alignItems: "center",
    justifyContent: "center",
    height: 200,
    gap: 20,
  },
  headerText: {
    fontWeight: "800",
    color: "white",
  },
});