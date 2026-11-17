import { Image, ScrollView, StyleSheet, Text } from 'react-native';
import AppButton from '../components/AppButton';
import type { Palette } from '../theme/palette';

type WelcomeScreenProps = {
  colors: Palette;
  email: string;
  onOpenMenu?: () => void;
  onExit: () => void;
};

export default function WelcomeScreen({
  colors,
  email,
  onOpenMenu,
  onExit,
}: WelcomeScreenProps) {
  return (
    <ScrollView contentContainerStyle={styles.content}>
      <Image
        source={require('../assets/images/logo.png')}
        style={styles.logo}
        resizeMode="contain"
        accessible={true}
        accessibilityLabel="Логотип Little Lemon"
      />

      <Text style={[styles.title, { color: colors.primary }]}>
        Ласкаво просимо до Little Lemon!
      </Text>

      <Text style={[styles.description, { color: colors.muted }]}>
        Little Lemon — сімейний ресторан середземноморської кухні з свіжими
        сезонними стравами та затишною атмосферою.
      </Text>

      <Text style={[styles.message, { color: colors.text }]}>
        Навчальний екран привітання для {email}.
      </Text>

      {onOpenMenu !== undefined && (
        <AppButton colors={colors} title="Переглянути меню" onPress={onOpenMenu} />
      )}
      <AppButton
        colors={colors}
        title="Повернутися до форми"
        onPress={onExit}
        variant="outline"
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: { padding: 20 },
  logo: {
    width: 120,
    height: 140,
    alignSelf: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 12,
  },
  description: {
    fontSize: 18,
    lineHeight: 26,
    textAlign: 'center',
    marginBottom: 16,
  },
  message: { fontSize: 16, lineHeight: 24, textAlign: 'center' },
});
