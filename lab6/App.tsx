import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import { LittleLemonFooter } from './components/LittleLemonFooter';
import { LittleLemonHeader } from './components/LittleLemonHeader';
import { WelcomeScreen } from './components/WelcomeScreen';
import { colors } from './constants/colors';

export default function App() {
  return (

    <SafeAreaProvider>
      <SafeAreaView style={styles.screen} edges={['top', 'bottom']}>
        <StatusBar style="light" />

        <LittleLemonHeader title="Little Lemon" subtitle="Бістро в серці міста" />

        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.scrollContent}
          indicatorStyle="white"
        >
          <WelcomeScreen />
        </ScrollView>

        <LittleLemonFooter />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.green,
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 32,
  },
});
