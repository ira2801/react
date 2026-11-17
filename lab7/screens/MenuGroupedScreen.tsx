import { SectionList, StyleSheet, Text, View } from 'react-native';
import type { SectionListData } from 'react-native';

import MenuItemRow from '../components/MenuItemRow';
import { colors } from '../constants/colors';
import { categories, menuItems } from '../data/menu';
import type { CategoryInfo, MenuItem } from '../types/menu';

const sections: SectionListData<MenuItem, CategoryInfo>[] = categories.map(
  (category) => ({
    ...category,
    data: menuItems.filter((item) => item.category === category.key),
  }),
);

export default function MenuGroupedScreen() {
  return (
    <SectionList<MenuItem, CategoryInfo>
      style={styles.list}
      contentContainerStyle={styles.content}
      sections={sections}
      // id страви — ключ рядка; ключ секції (key) відрізняє самі групи.
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <MenuItemRow item={item} />}
      renderSectionHeader={({ section }) => (
        <Text style={styles.sectionTitle}>{section.title}</Text>
      )}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      ListEmptyComponent={<Text style={styles.empty}>Меню поки порожнє.</Text>}
      stickySectionHeadersEnabled={true}
    />
  );
}

const styles = StyleSheet.create({
  list: { flex: 1, backgroundColor: colors.green },
  content: { paddingHorizontal: 16, paddingBottom: 16 },
  sectionTitle: {
    backgroundColor: colors.accent,
    color: colors.text,
    fontSize: 20,
    fontWeight: '700',
    paddingVertical: 8,
    paddingHorizontal: 8,
  },
  separator: { height: 1, backgroundColor: colors.light, opacity: 0.3 },
  empty: { fontSize: 16, color: colors.light, textAlign: 'center', marginTop: 24 },
});
