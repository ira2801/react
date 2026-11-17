import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import MenuScreen from '../screens/MenuScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import { useAppColors } from '../theme/useAppColors';
import type { StackParamList } from './types';

const Stack = createNativeStackNavigator<StackParamList>();

type LoginProps = NativeStackScreenProps<StackParamList, 'Login'>;
type WelcomeProps = NativeStackScreenProps<StackParamList, 'Welcome'>;

function LoginRoute({ navigation }: LoginProps) {
  const colors = useAppColors();
  return (
    <LoginScreen
      colors={colors}
      onContinue={(email) => navigation.navigate('Welcome', { email })}
    />
  );
}

function WelcomeRoute({ navigation, route }: WelcomeProps) {
  const colors = useAppColors();
  return (
    <WelcomeScreen
      colors={colors}
      email={route.params.email}
      onOpenMenu={() => navigation.navigate('Menu')}
      onExit={() => navigation.goBack()}
    />
  );
}

function MenuRoute() {
  const colors = useAppColors();
  return <MenuScreen colors={colors} />;
}

export default function StackFlow() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={LoginRoute}
        options={{ title: 'Навчальна форма' }}
      />
      <Stack.Screen
        name="Welcome"
        component={WelcomeRoute}
        options={{ title: 'Привітання' }}
      />
      <Stack.Screen
        name="Menu"
        component={MenuRoute}
        options={{ title: 'Меню' }}
      />
    </Stack.Navigator>
  );
}
