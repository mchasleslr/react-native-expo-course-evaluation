import { StyleSheet, View } from "react-native";

export const Separator = (orientation = "horizontal") => {
  return <View style={styles.separator} />;
};

const styles = StyleSheet.create({
  separator: {
    width: 12,
  },
});
