import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Keyboard, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import { LittleLemonFooter } from './components/LittleLemonFooter';
import { LittleLemonHeader } from './components/LittleLemonHeader';
import { colors } from './constants/colors';
import LoginScreen from './screens/LoginScreen';
import MenuFlatScreen from './screens/MenuFlatScreen';
import MenuGroupedScreen from './screens/MenuGroupedScreen';
import WelcomeScreen from './screens/WelcomeScreen';

const screens = [
  { id: 'flat', label: 'Меню', Component: MenuFlatScreen },
  { id: 'grouped', label: 'Категорії', Component: MenuGroupedScreen },
  { id: 'welcome', label: 'Привітання', Component: WelcomeScreen },
  { id: 'login', label: 'Вхід', Component: LoginScreen },
] as const;

type ScreenId = (typeof screens)[number]['id'];

export default function App() {
  const [activeId, setActiveId] = useState<ScreenId>('flat');
  const ActiveScreen = screens.find((s) => s.id === activeId)!.Component;

  function choose(id: ScreenId) {
    Keyboard.dismiss();
    setActiveId(id);
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.root} edges={['top', 'bottom']}>
        <StatusBar style="light" />
        <LittleLemonHeader title="Little Lemon" subtitle="Бістро в серці міста" />
        <View style={styles.tabs}>
          {screens.map((s) => (
            <Pressable
              key={s.id}
              accessibilityRole="button"
              onPress={() => choose(s.id)}
              style={[styles.tab, s.id === activeId && styles.tabActive]}
            >
              <Text style={[styles.tabText, s.id === activeId && styles.tabTextActive]}>
                {s.label}
              </Text>
            </Pressable>
          ))}
        </View>
        <View style={styles.content}>
          <ActiveScreen />
        </View>
        <LittleLemonFooter />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.green },
  content: { flex: 1 },
  tabs: { flexDirection: 'row', backgroundColor: colors.text },
  tab: { flex: 1, paddingVertical: 10, alignItems: 'center' },
  tabActive: { backgroundColor: colors.accent },
  tabText: { color: colors.white, fontSize: 13, fontWeight: '600' },
  tabTextActive: { color: colors.text },
});
