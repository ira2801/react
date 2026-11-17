import { Pressable, StyleSheet, Text } from 'react-native';
import type { Palette } from '../theme/palette';

type AppButtonProps = {
  colors: Palette;
  title: string;
  onPress: () => void;
  variant?: 'solid' | 'outline';
};

export default function AppButton({
  colors,
  title,
  onPress,
  variant = 'solid',
}: AppButtonProps) {
  const isOutline = variant === 'outline';

  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      style={({ pressed }) => [
        styles.button,
        isOutline
          ? { borderWidth: 2, borderColor: colors.primary, backgroundColor: 'transparent' }
          : { backgroundColor: colors.accent },
        { opacity: pressed ? 0.8 : 1 },
      ]}
    >
      <Text
        style={[
          styles.title,
          { color: isOutline ? colors.primary : colors.onAccent },
        ]}
      >
        {title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    minHeight: 48,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
  },
  title: { fontSize: 18, fontWeight: '700' },
});
