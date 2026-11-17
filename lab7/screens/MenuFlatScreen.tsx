import { useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

import MenuItemRow from '../components/MenuItemRow';
import { colors } from '../constants/colors';
import { menuItems } from '../data/menu';
import type { MenuItem } from '../types/menu';

export default function MenuFlatScreen() {
  const [query, setQuery] = useState('');
  const normalizedQuery = query.trim().toLocaleLowerCase('uk-UA');
  const visibleItems = menuItems.filter((item) =>
    item.name.toLocaleLowerCase('uk-UA').includes(normalizedQuery),
  );

  return (
    <View style={styles.screen}>
      <TextInput
        style={styles.search}
        accessibilityLabel="Пошук у меню"
        placeholder="Пошук страви"
        placeholderTextColor="#8A8A8A"
        value={query}
        onChangeText={setQuery}
        autoCorrect={false}
        clearButtonMode="while-editing"
      />
      <FlatList<MenuItem>
        style={styles.list}
        contentContainerStyle={styles.content}
        data={visibleItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MenuItemRow item={item} />}
        ListHeaderComponent={<Text style={styles.heading}>Меню</Text>}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        ListEmptyComponent={
          <Text style={styles.empty}>
            {menuItems.length === 0 ? 'Меню поки порожнє.' : 'Нічого не знайдено.'}
          </Text>
        }
        keyboardShouldPersistTaps="handled"
        keyboardDismissMode="on-drag"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.green },
  search: {
    margin: 16,
    marginBottom: 0,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 8,
    fontSize: 16,
    backgroundColor: colors.white,
    color: colors.text,
  },
  list: { flex: 1 },
  content: { padding: 16 },
  heading: { fontSize: 24, fontWeight: '700', color: colors.white, marginBottom: 8 },
  separator: { height: 1, backgroundColor: colors.light, opacity: 0.3 },
  empty: { fontSize: 16, color: colors.light, textAlign: 'center', marginTop: 24 },
});
