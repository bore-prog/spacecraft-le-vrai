import React from "react";
import { SafeAreaView, FlatList, StyleSheet, StatusBar, View } from "react-native";
import { Text, Card } from "react-native-paper";
import { DATA } from "../../api/data3";
import { Layout } from "../components/Layout"

// import { default as data } from "../../api/data2.json";



type SpacecraftProps = {title: string, model: string, crew: string, hyperdrive_rating: string, cost_in_credits: string}

function SpacecraftCard({title, model, crew, hyperdrive_rating, cost_in_credits}: SpacecraftProps) {
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

export const StarshipFeedScreen = () => {
  console.log('test')
  return (
    <Layout>
      
        <FlatList
          data={DATA}
          renderItem={({item}) => <SpacecraftCard title={item.name} model={item.model} crew={item.crew} hyperdrive_rating={item.hyperdrive_rating} cost_in_credits={item.cost_in_credits} />}
          keyExtractor={item => item.model}
        />
      
    </Layout>
  );
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