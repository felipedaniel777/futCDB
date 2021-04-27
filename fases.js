import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import axios from "axios";

const fases = ({ navigation, route }) => {
  const [fases, setFases] = useState();
  // test_1f53fe08caa72e104c7669f797e800
  const token = "live_f4eddc70bdbdfc7ecca1559aab5481";

  useEffect(() => {
    axios.get(`https://api.api-futebol.com.br/v1/campeonatos/2/fases`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(({ data }) => {
        console.log(data);
        const fase = data;
        const lista = fase.map((item) => {
          const fasee = {};
          const { nome, fase_id } = item;

          if (
            nome === "Primeira Fase" ||
            nome === "Segunda Fase" ||
            nome === "Fase Única"
          ) {
            fasee.fase_nome = nome;
            fasee.fase_id = fase_id;
            return fasee;
          } else {
            return fasee;
          }
        });

        setFases(lista);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <FlatList
        style={{ marginTop: 50 }}
        data={fases}
        keyExtractor={(id, index) => index.toString()}
        renderItem={({ item }) =>
          item.fase_nome ? (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Jogos", {
                  idFase: item.fase_id,
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
                <Text
                  style={{
                    fontSize: 20,
                    color: "#222",
                    fontWeight: "bold",
                  }}
                >
                  {item.fase_nome}
                </Text>
              </View>
            </TouchableOpacity>
          ) : null
        }
      />
    </View>
  );
};

export default fases;
