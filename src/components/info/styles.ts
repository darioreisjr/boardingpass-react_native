import { StyleSheet } from "react-native";

import { colors } from "@styles/colors";
import { fontfamily } from "@styles/fontFamily";

export const styles = StyleSheet.create({
  label: {
    color: colors.gray[400],
    fontSize: 10,
    textTransform: "uppercase",
    fontFamily: fontfamily.regular,
  },
  value: {
    color: colors.black,
    fontSize: 16,
    fontFamily: fontfamily.medium,
  },
});
