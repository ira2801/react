import { useRef, useState } from 'react';
import type { ComponentRef } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
} from 'react-native';

import { colors } from '../constants/colors';

function isEmailFormatValid(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailTouched, setEmailTouched] = useState(false);
const passwordRef = useRef<ComponentRef<typeof TextInput>>(null);

  function handleEmailBlur() {
    const normalized = email.trim();
    setEmail(normalized);
    setEmailTouched(true);
  }

  const emailFilled = email.trim().length > 0;
  const emailValid = isEmailFormatValid(email);
  const showEmailMessage = emailTouched || emailFilled;
  const passwordFilled = password.length > 0;

  let emailMessage = '';
  if (!emailFilled) emailMessage = 'Введіть email.';
  else if (!emailValid) emailMessage = 'Схоже, формат email некоректний.';
  else emailMessage = 'Формат email виглядає коректно.';

  return (
    <KeyboardAvoidingView
      style={styles.screen}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView
        contentContainerStyle={styles.form}
        keyboardShouldPersistTaps="handled"
        keyboardDismissMode="on-drag"
      >
        <Text style={styles.heading}>Вхід до Little Lemon</Text>
        <Text style={styles.text}>
          Навчальна форма: дані лише перевіряються локально, на сервер не
          надсилаються й не зберігаються.
        </Text>

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          accessibilityLabel="Email"
          placeholder="name@example.com"
          placeholderTextColor="#8A8A8A"
          value={email}
          onChangeText={setEmail}
          onBlur={handleEmailBlur}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType="next"
          submitBehavior="submit"
          onSubmitEditing={() => passwordRef.current?.focus()}
        />
        {showEmailMessage && (
          <Text style={[styles.hint, emailFilled && !emailValid && styles.warning]}>
            {emailMessage}
          </Text>
        )}

        <Text style={styles.label}>Пароль</Text>
        <TextInput
          ref={passwordRef}
          style={styles.input}
          accessibilityLabel="Пароль"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType="done"
          submitBehavior="blurAndSubmit"
        />
        <Text style={styles.hint}>
          {passwordFilled ? 'Пароль введено.' : 'Введіть пароль.'}
        </Text>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.green },
  form: { padding: 20, flexGrow: 1 },
  heading: { fontSize: 26, fontWeight: '700', color: colors.white, marginBottom: 8 },
  text: { fontSize: 16, lineHeight: 22, color: colors.light, marginBottom: 20 },
  label: { fontSize: 16, fontWeight: '600', color: colors.white, marginTop: 12, marginBottom: 6 },
  input: {
    backgroundColor: colors.white,
    color: colors.text,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
  },
  hint: { fontSize: 14, color: colors.light, marginTop: 6 },
  warning: { color: '#FFB4AB' },
});
