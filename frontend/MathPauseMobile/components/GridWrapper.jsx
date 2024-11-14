import React from "react";
import { FlatList, View, StyleSheet } from "react-native";

const GridWrapper = ({ data, numColumns, RenderComponent }) => {
  const renderItem = ({ item }) => (
    <RenderComponent {...item} /> // Pasa todas las props del item al componente
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.key}
      numColumns={numColumns}
      scrollEnabled={false}
      contentContainerStyle={styles.grid}
    />
  );
};

const styles = StyleSheet.create({
  grid: {
    width: "100%",
  },
});

export default GridWrapper;
