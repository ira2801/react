import { StyleSheet, Text, View } from 'react-native';

import { colors } from '../constants/colors';

export function LittleLemonFooter() {

  const year = new Date().getFullYear();

  return (
    <View style={styles.footer}>
      <Text style={styles.text}>© {year} Little Lemon</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    paddingHorizontal: 20,
    paddingVertical: 14,
    backgroundColor: colors.green,
    borderTopWidth: 1,
    borderTopColor: colors.light,
  },
  text: {
    color: colors.white,
    fontSize: 14,
    textAlign: 'center',
  },
});
