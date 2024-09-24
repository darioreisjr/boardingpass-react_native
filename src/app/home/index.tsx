import { ImageBackground, View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import QRCode from "react-native-qrcode-svg";
import Svg, { Line, Circle } from "react-native-svg";

import { styles } from "./styles";

import { Flight } from "@components/flight";
import { colors } from "@styles/colors";
import { Info } from "@components/info";

import React, { useState, useEffect } from "react";

export function Home() {
  const [randomValue, setRandomValue] = useState<string | null>(null);

  // Função para gerar um número aleatório
  const generateRandomNumber = () => {
    return Math.floor(Math.random() * 1000000000).toString(); // Gera um número aleatório entre 0 e 999999999
  };

  // Atualiza o valor do QRCode quando o componente é montado ou quando a página é atualizada
  useEffect(() => {
    const newValue = generateRandomNumber();
    setRandomValue(newValue);
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.header}
        source={require("@assents/cover.png")}
      >
        <Text style={styles.title}>Cartão de embarque</Text>
        <Text style={styles.subtitle}>Falta 45 dias para sua viagem</Text>
      </ImageBackground>

      <View style={styles.ticket}>
        <View style={styles.content}>
          <View style={styles.flight}>
            <Flight label="Salvador" value="SSA" />
            <View style={styles.duration}>
              <Ionicons name="airplane-sharp" size={24} color={colors.black} />
              <Text style={styles.hours}>1 h 45 min</Text>
            </View>
            <Flight label="Vitória" value="VIX" />
          </View>

          <Text style={styles.label}>Passageiro</Text>
          <Text style={styles.name}>Amanda Oliveira</Text>

          <View style={styles.details}>
            <View style={styles.inline}>
              <Info label="Data" value="23 de Dez." />
              <Info label="Embarque" value="12:40" />
            </View>
          </View>
        </View>

        <View>
          <Svg height={20} width="100%">
            <Line
              x1="0%"
              y1="50%"
              x2="100%"
              y2="50%"
              stroke={colors.gray[400]}
              strokeWidth={1}
              strokeDasharray="5,5"
            />
            <Circle r={8} cx="0%" cy="50%" fill={colors.black} />
            <Circle r={8} cx="100%" cy="50%" fill={colors.black} />
          </Svg>
        </View>

        <View style={styles.footer}>
          <View style={styles.footerContent}>
            <View style={styles.inline}>
              <Info label="Voo" value="TX 673" />
              <Info label="Assento" value="73F" />
            </View>
            <View style={styles.inline}>
              <Info label="Terminal" value="5" />
              <Info label="Portão" value="13" />
            </View>
          </View>
          {randomValue ? <QRCode value={randomValue} size={130} /> : null}
        </View>
      </View>
    </View>
  );
}
