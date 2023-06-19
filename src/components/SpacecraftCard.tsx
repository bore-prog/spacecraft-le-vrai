import React from "react";
import {StyleSheet, View } from "react-native";
import { Text, Card } from "react-native-paper";

// type SpacecraftProps = {title: string, model: string, crew: string, hyperdrive_rating: string, cost_in_credits: string}

interface SpacecraftCardProps {
  title: string;
  model: string;
  crew: string;
  hyperdrive_rating: string;
  cost_in_credits: string;
}

export function SpacecraftCard({title, model, crew, hyperdrive_rating, cost_in_credits}: SpacecraftCardProps) {
  return (
    <View style={styles.item}>
      <Card>
        <Card.Cover source={{uri: 'https://picsum.photos/seed/' + title + '/400/200'}} />
        <Card.Title titleVariant="titleLarge"title={title}/>
        <Card.Content>
          <Text variant="bodyMedium">Card content</Text>
          <Text variant="bodyMedium">Modèle : {model}</Text>
          <Text variant="bodyMedium">Equipage : {crew} personnes</Text>
          <Text variant="bodyMedium">Hyperdrive : {hyperdrive_rating}</Text>
          <Text variant="bodyMedium">Coût : {cost_in_credits} crédits</Text>
        </Card.Content>
      </Card>
    </View>
  )
};

const styles = StyleSheet.create({
    headerContainer: {
      paddingHorizontal: 20,
      marginTop: 20,
    },
    item: {
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
    tinyLogo: {
      width: 300,
      height: 200,
    },
  });