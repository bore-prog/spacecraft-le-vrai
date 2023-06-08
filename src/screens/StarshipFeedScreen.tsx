import React from "react";
import { FlatList, Text, View } from "react-native";
import { DATA } from "../../api/data3";
import { Layout } from "../components/Layout"
import { SpacecraftCard } from "../components/SpacecraftCard"
import { useStarships } from "../hooks/useStarships";

export const StarshipFeedScreen = () => {
  const { isLoading, isError, data } = useStarships()
 
  if (isLoading) {
    return (
      <View style={{ flex:1, alignItems: "center", justifyContent: "center"  }}>
        <Text>
          Loading
        </Text>
      </View>
    )
  }
  if (isError) {
    return (
      <View style={{ flex:1, backgroundColor: "red", alignItems: "center", justifyContent: "center" }}>
        <Text>
          Error
        </Text>
      </View>
    )
  }

  return (
    <Layout>
        <FlatList
          data={data.results}
          renderItem={({item}) => <SpacecraftCard title={item.name} model={item.model} crew={item.crew} hyperdrive_rating={item.hyperdrive_rating} cost_in_credits={item.cost_in_credits} />}
          keyExtractor={item => item.model}
        />
      
    </Layout>
  );
};