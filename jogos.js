import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import axios from "axios";

const jogos = ({ navigation, route }) => {
  const [jogos, setJogos] = useState();
  // test_1f53fe08caa72e104c7669f797e800
  const token = "live_f4eddc70bdbdfc7ecca1559aab5481";
  // const teste = route.params?.idFase;
  const teste = 32;

  useEffect(() => {
    axios.get(`https://api.api-futebol.com.br/v1/campeonatos/2/fases/${teste}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(({ data }) => {
        console.log(data.chaves)
        const chaves = data.chaves;

        const lista = chaves.map((item) => {
          const jogo = {};
          const { partida_ida } = item;
          jogo.time_casa = partida_ida.time_mandante;
          jogo.placar_casa = partida_ida.placar_mandante;
          jogo.time_visita = partida_ida.time_visitante;
          jogo.placar_visita = partida_ida.placar_visitante;
          return jogo;
        });
        setJogos(lista);
      })
      .catch((error) => console.error(error));
  }, []);

  return (

    <View style={{ justifyContent: "center", alignItems: "center" }}>

      <FlatList
        style={{ marginTop: 20, width: "100%" }}
        data={jogos}
        keyExtractor={(id, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={{ alignItems: "center", marginBottom: 10 }}>
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                borderWidth: 1,
                width: "80%",
                height: 50,
                borderColor: "#000",
                backgroundColor: "#ff8282",
                padding: 7,
                borderRadius: 100,
              }}
            >

              <View style={{ flexDirection: "row" }}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    width: "40%",
                    justifyContent: "flex-end",
                  }}
                >
                  <Text style={{ fontSize: 15 }}>
                    {item.time_casa.nome_popular}
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "20%",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 15,
                      marginRight: 5,
                      fontWeight: "bold",
                    }}
                  >
                    {item.placar_casa}
                  </Text>
                  <Text style={{ fontSize: 15, fontWeight: "bold" }}>x</Text>
                  <Text
                    style={{
                      fontSize: 16,
                      marginLeft: 7,
                      fontWeight: "bold",
                    }}
                  >
                    {item.placar_visita}
                  </Text>
                </View>

                <View
                  style={{
                    width: "35%",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ fontSize: 15 }}>
                    {item.time_visita.nome_popular}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default jogos;
