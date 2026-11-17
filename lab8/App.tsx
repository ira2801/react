import { useState } from 'react';
import { StyleSheet, View, useColorScheme } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {
  SafeAreaProvider,
  SafeAreaView,
} from 'react-native-safe-area-context';
import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';
import LoginScreen from './screens/LoginScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import MenuScreen from './screens/MenuScreen';
import { darkColors, lightColors } from './theme/palette';

export default function App() {
  const [demoEmail, setDemoEmail] = useState<string | null>(null);
  const [showMenu, setShowMenu] = useState(false);
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  const colors = isDark ? darkColors : lightColors;

  function handleExit() {
    setShowMenu(false);
    setDemoEmail(null);
  }

  let content;
  if (demoEmail === null) {
    content = <LoginScreen colors={colors} onContinue={setDemoEmail} />;
  } else if (showMenu) {
    content = <MenuScreen colors={colors} onBack={() => setShowMenu(false)} />;
  } else {
    content = (
      <WelcomeScreen
        colors={colors}
        email={demoEmail}
        onOpenMenu={() => setShowMenu(true)}
        onExit={handleExit}
      />
    );
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={[styles.root, { backgroundColor: colors.background }]}>
        <StatusBar style={isDark ? 'light' : 'dark'} />
        <LittleLemonHeader colors={colors} />
        <View style={styles.content}>{content}</View>
        <LittleLemonFooter colors={colors} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1 },
  content: { flex: 1 },
});
