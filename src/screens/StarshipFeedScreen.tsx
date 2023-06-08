import React from "react";
import { FlatList } from "react-native";
import { DATA } from "../../api/data3";
import { Layout } from "../components/Layout"
import { SpacecraftCard } from "../components/SpacecraftCard"

export const StarshipFeedScreen = () => {
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