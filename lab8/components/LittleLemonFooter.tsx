import { StyleSheet, Text, View } from 'react-native';
import type { Palette } from '../theme/palette';

type LittleLemonFooterProps = {
  colors: Palette;
};

export default function LittleLemonFooter({ colors }: LittleLemonFooterProps) {
  return (
    <View style={[styles.container, { backgroundColor: colors.surface }]}>
      <Text style={[styles.text, { color: colors.muted }]}>
        Little Lemon, усі права захищено
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
  },
});
