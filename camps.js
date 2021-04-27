import React, { useEffect, useState } from "react";

import axios from "axios";

import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";




const camps = ({ navigation }) => {
  const [camps, setCamps] = useState();
  // test_1f53fe08caa72e104c7669f797e800
  const token = "live_f4eddc70bdbdfc7ecca1559aab5481";
  useEffect(() => {
    axios.get(`https://api.api-futebol.com.br/v1/campeonatos/2`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(({ data }) => {
        console.log(data);
        setCamps([data]);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <FlatList
        style={{ marginTop: 50 }}
        data={camps}
        keyExtractor={(id, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Fases", {
                idCampeonato: item.campeonato_id,
              });
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                backgroundColor: "#ff0000",
                padding: 10,
                borderWidth: 1,
                borderRadius: 100,
              }}
            >
              <Image
                style={{
                  width: 50,
                  height: 50,
                }}
                source={{ uri: item.logo }}
              />
              <Text
                style={{
                  fontSize: 20,
                  marginBottom: 10,
                  color: "#222",
                  fontWeight: "bold",
                }}
              >
                {item.nome_popular}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
export default camps;
