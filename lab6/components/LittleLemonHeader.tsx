import { StyleSheet, Text, View } from 'react-native';

import { colors } from '../constants/colors';

type LittleLemonHeaderProps = {
  title: string;
  subtitle: string;
};

export function LittleLemonHeader({ title, subtitle }: LittleLemonHeaderProps) {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 16,
    backgroundColor: colors.green,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.light,
  },
  title: {
    color: colors.accent,
    fontSize: 32,
    fontWeight: '700',
  },
  subtitle: {
    marginTop: 4,
    color: colors.white,
    fontSize: 15,
    letterSpacing: 0.5,
  },
});
