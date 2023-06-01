import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet } from "react-native";
import React from "react";
import { Text, useTheme } from "react-native-paper";
import Constants from "expo-constants";

type HeaderProps = {
  title: string;
};

export const Header = ({ title }: HeaderProps) => {
  const theme = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.primary }]}>
    <StatusBar style='light'></StatusBar>
      <Text variant="headlineLarge" style={styles.headerText}>
        {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    alignItems: "center",
    justifyContent: "center",
    height: 200,
  },
  headerText: {
    fontWeight: "800",
    color: "white",
  },
});