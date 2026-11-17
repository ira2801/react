# Little Lemon — Лабораторна робота №9. Навігація в React Native

Проєкт для Expo SDK 58 (React Native 0.88, React 19.3). Потрібен Node.js 22.13 або новіший.

## Встановлення і запуск

```
npm install
npm run setup
npx expo install --check
npx expo start
```

Команда `npm run setup` ставить через `expo install` пакети, версії яких визначає Expo SDK 58: react-native-screens, react-native-safe-area-context, react-native-gesture-handler, react-native-reanimated, react-native-worklets, @expo/vector-icons, expo-font, expo-status-bar, typescript і @types/react. Після неї збережіть `package.json` і `package-lock.json`.

Для Expo Go потрібна версія, що підтримує SDK 58. Для development build після додавання нативних залежностей збирайте застосунок заново.

## Вибір навігатора

У файлі `App.tsx` змініть одне значення:

```
const ActiveNavigator = navigators.stack;
const ActiveNavigator = navigators.tabs;
const ActiveNavigator = navigators.drawer;
```

Одночасно активний лише один варіант.

## Перевірка

```
npm run typecheck
npx expo install --check
```

## Структура

```
index.ts
App.tsx
app.json
tsconfig.json
navigation/types.ts
navigation/StackFlow.tsx
navigation/TabsFlow.tsx
navigation/DrawerFlow.tsx
screens/LoginScreen.tsx
screens/WelcomeScreen.tsx
screens/MenuScreen.tsx
components/AppButton.tsx
assets/images/logo.png
theme/colors.ts
theme/palette.ts
theme/useAppColors.ts
types/menu.ts
data/menu.ts
```
