# Little Lemon — лабораторна робота №8

## Запуск

1. Створіть основу (або використайте свій проєкт із №7):

       npx create-expo-app@latest little-lemon --template blank-typescript
       cd little-lemon
       npx expo install react-native-safe-area-context expo-system-ui

2. Скопіюйте в проєкт файли з цього архіву (App.tsx, app.json, tsconfig.json,
   папки assets, components, data, screens, theme, types) із заміною наявних.

3. Запустіть:

       npx expo start

4. Перевірка типів:

       npx tsc --noEmit

Після зміни app.json перезапустіть сервер Expo й повністю перезавантажте застосунок.

## Структура

- theme/colors.ts — бренд-кольори з №6; theme/palette.ts будує з них світлу й темну палітри.
- data/menu.ts і types/menu.ts — дані та типи меню з №7.
- screens/MenuScreen.tsx — меню (SectionList), що використовує ті самі палітри й теми.
- Потік: форма → привітання → меню → привітання → форма.
