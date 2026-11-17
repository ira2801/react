import { useColorScheme } from 'react-native';
import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import StackFlow from './navigation/StackFlow';
import TabsFlow from './navigation/TabsFlow';
import DrawerFlow from './navigation/DrawerFlow';
import { useAppColors } from './theme/useAppColors';

const navigators = {
  stack: StackFlow,
  tabs: TabsFlow,
  drawer: DrawerFlow,
};

const ActiveNavigator = navigators.stack;

export default function App() {
  const isDark = useColorScheme() === 'dark';
  const colors = useAppColors();
  const baseTheme = isDark ? DarkTheme : DefaultTheme;

  const theme = {
    ...baseTheme,
    colors: {
      ...baseTheme.colors,
      primary: colors.primary,
      background: colors.background,
      card: colors.background,
      text: colors.text,
      border: colors.border,
    },
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <NavigationContainer theme={theme}>
          <ActiveNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
