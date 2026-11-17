import { Pressable, StyleSheet, Text } from 'react-native';
import type { Palette } from '../theme/palette';

type AppButtonProps = {
  colors: Palette;
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'outline';
};

export default function AppButton({
  colors,
  title,
  onPress,
  variant = 'primary',
}: AppButtonProps) {
  const outline = variant === 'outline';

  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        outline
          ? { borderWidth: 2, borderColor: colors.primary }
          : { backgroundColor: colors.accent },
        pressed && styles.pressed,
      ]}
    >
      <Text
        style={[
          styles.text,
          { color: outline ? colors.primary : colors.onAccent },
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
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
  },
  pressed: { opacity: 0.75 },
  text: { fontSize: 18, fontWeight: '600', textAlign: 'center' },
});
