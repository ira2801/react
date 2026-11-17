import { useState } from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
} from 'react-native';
import AppButton from '../components/AppButton';
import type { Palette } from '../theme/palette';

type LoginScreenProps = {
  colors: Palette;
  onContinue: (email: string) => void;
};

export default function LoginScreen({ colors, onContinue }: LoginScreenProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  function handleContinue() {
    const normalizedEmail = email.trim();
    const emailLooksValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail);

    if (!emailLooksValid) {
      setError('Введіть email у форматі name@example.com.');
      return;
    }

    if (password.length === 0) {
      setError('Введіть навчальний пароль.');
      return;
    }

    setError(null);
    Keyboard.dismiss();
    setPassword('');
    onContinue(normalizedEmail);
  }

  const inputStyle = [
    styles.input,
    {
      color: colors.text,
      backgroundColor: colors.surface,
      borderColor: colors.border,
    },
  ];

  return (
    <KeyboardAvoidingView
      style={styles.flex}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={[styles.title, { color: colors.text }]}>
          Вхід (навчальна демонстрація)
        </Text>
        <Text style={[styles.hint, { color: colors.muted }]}>
          Використовуйте вигаданий email і пароль. Дані нікуди не надсилаються.
        </Text>

        <Text style={[styles.label, { color: colors.text }]}>Email</Text>
        <TextInput
          style={inputStyle}
          value={email}
          onChangeText={setEmail}
          placeholder="name@example.com"
          placeholderTextColor={colors.muted}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          textContentType="emailAddress"
        />

        <Text style={[styles.label, { color: colors.text }]}>Пароль</Text>
        <TextInput
          style={inputStyle}
          value={password}
          onChangeText={setPassword}
          placeholder="Навчальний пароль"
          placeholderTextColor={colors.muted}
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
        />

        {error !== null && (
          <Text style={[styles.message, { color: colors.error }]}>{error}</Text>
        )}

        <AppButton colors={colors} title="Увійти (демо)" onPress={handleContinue} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
  content: { padding: 20 },
  title: { fontSize: 24, fontWeight: '700', marginBottom: 8 },
  hint: { fontSize: 16, lineHeight: 24, marginBottom: 16 },
  label: { fontSize: 18, fontWeight: '600', marginTop: 12, marginBottom: 6 },
  input: {
    minHeight: 48,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 18,
  },
  message: { fontSize: 16, lineHeight: 24, marginVertical: 12 },
});
