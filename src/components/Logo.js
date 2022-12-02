import React from "react";
import { Icon, Divider } from "@rneui/themed";
import { View, Text, StyleSheet } from "react-native";

import { spacing } from "../utils/sizes";
import { colors } from "../utils/colors";

export const Logo = () => {
  return (
    <View>
      <View style={styles.meta}>
        <Text style={styles.title}> WaterKeeper </Text>
        <Icon name="droplet" type="feather" color="#517fa4" />
      </View>
      <Divider padding={spacing.sm} />
    </View>
  );
};

const styles = StyleSheet.create({
    meta: {
      flexDirection: "row",
      paddingTop: spacing.md,
      paddingHorizontal: spacing.sm,
      alignItems: "center",
    },
    title: {
      paddingTop: spacing.lg,
      fontSize: spacing.xl,
      color: colors.white,
      fontWeight: "bold",
    },
  });
  