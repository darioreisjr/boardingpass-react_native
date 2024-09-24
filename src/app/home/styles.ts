import { StyleSheet } from "react-native";
import { colors } from "@styles/colors";
import { fontfamily } from "@styles/fontFamily";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    alignItems: "center",
  },
  header: {
    width: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: colors.white,
    fontSize: 24,
    fontFamily: fontfamily.extrabold,
  },
  subtitle: {
    color: colors.gray[300],
    fontSize: 14,
    fontFamily: fontfamily.medium,
  },
  ticket: {
    backgroundColor: colors.white,
    width: "100%",
    borderRadius: 22,
    overflow: "hidden",
    paddingBottom: 24,
  },
  content: {
    padding: 20,
  },
  flight: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 52,
  },
  duration: {
    alignItems: "center",
  },
  hours: {
    color: colors.gray[800],
    fontSize: 14,
    fontFamily: fontfamily.regular,
  },
  label: {
    color: colors.gray[400],
    fontSize: 12,
    textTransform: "uppercase",
    fontFamily: fontfamily.regular,
  },
  name: {
    color: colors.black,
    fontSize: 24,
    fontFamily: fontfamily.bold,
  },
  details: {
    marginTop: 52,
  },
  inline: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  footer: {
    width: "100%",
    padding: 20,
    flexDirection: "row",
    gap: 22,
  },
  footerContent: {
    flex: 1,
    gap: 24,
  },
});
