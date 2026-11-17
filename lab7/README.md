# Little Lemon — лабораторна робота №7

Списки (`FlatList`, `SectionList`) і введення тексту (`TextInput`) у React Native + TypeScript.

## Запуск

```bash
npm install
npx expo start
```

Відкрийте застосунок через Expo Go або в емуляторі. Перевірка типів: `npm run typecheck` (`npx tsc --noEmit`).

## Екрани (перемикач під шапкою)

- **Меню** — `FlatList`: страви, ціни, розділювачі, порожній стан, пошук (додаткове завдання).
- **Категорії** — `SectionList`: секції будуються з тієї самої колекції; заголовки закріплені.
- **Привітання** — кероване поле імені, привітання змінюється під час введення.
- **Вхід** — навчальна форма: окремі стани email і пароля, локальна перевірка формату, без сервера.

## Структура

```
App.tsx            оболонка: шапка, перемикач, екран, підвал
types/menu.ts      MenuCategory, MenuItem, CategoryInfo
data/menu.ts       категорії та страви
constants/colors.ts палітра із №6
components/        LittleLemonHeader, LittleLemonFooter (із №6), MenuItemRow
screens/           MenuFlatScreen, MenuGroupedScreen, WelcomeScreen, LoginScreen
```
