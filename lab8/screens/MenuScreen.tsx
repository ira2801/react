import { useState } from 'react';
import { Pressable, SectionList, StyleSheet, Text, View } from 'react-native';
import AppButton from '../components/AppButton';
import { menuItems, categories } from '../data/menu';
import type { MenuItem } from '../types/menu';
import type { Palette } from '../theme/palette';

type MenuScreenProps = {
  colors: Palette;
  onBack: () => void;
};

type MenuSection = {
  title: string;
  data: MenuItem[];
};

const sections: MenuSection[] = categories.map(category => ({
  title: category.title,
  data: menuItems.filter(item => item.category === category.key),
}));

export default function MenuScreen({ colors, onBack }: MenuScreenProps) {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  function toggleItem(id: string) {
    setSelectedIds(previous =>
      previous.includes(id)
        ? previous.filter(itemId => itemId !== id)
        : [...previous, id],
    );
  }

  const total = menuItems
    .filter(item => selectedIds.includes(item.id))
    .reduce((sum, item) => sum + item.price, 0);

  return (
    <View style={styles.flex}>
      <SectionList
        sections={sections}
        keyExtractor={item => item.id}
        stickySectionHeadersEnabled
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={styles.list}
        ListHeaderComponent={
          <Text style={[styles.title, { color: colors.text }]}>Меню</Text>
        }
        renderSectionHeader={({ section }) => (
          <Text
            style={[
              styles.sectionTitle,
              { color: colors.primary, backgroundColor: colors.background },
            ]}
          >
            {section.title}
          </Text>
        )}
        renderItem={({ item }) => {
          const selected = selectedIds.includes(item.id);

          return (
            <Pressable
              accessibilityRole="button"
              accessibilityState={{ selected }}
              onPress={() => toggleItem(item.id)}
              style={({ pressed }) => [
                styles.item,
                {
                  backgroundColor: selected ? colors.surface : colors.background,
                  borderColor: selected ? colors.accent : colors.border,
                },
                pressed && styles.pressed,
              ]}
            >
              <Text style={[styles.itemName, { color: colors.text }]}>
                {item.name}
              </Text>
              <Text style={[styles.itemPrice, { color: colors.muted }]}>
                {item.price} грн
              </Text>
            </Pressable>
          );
        }}
        ListFooterComponent={
          <AppButton
            colors={colors}
            title="Назад до привітання"
            onPress={onBack}
            variant="outline"
          />
        }
      />
      <View style={[styles.summary, { backgroundColor: colors.surface }]}>
        <Text style={[styles.summaryText, { color: colors.text }]}>
          Обрано: {selectedIds.length}, сума: {total} грн
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
  list: { paddingHorizontal: 20, paddingBottom: 20 },
  title: { fontSize: 24, fontWeight: '700', marginTop: 20, marginBottom: 4 },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    paddingTop: 16,
    paddingBottom: 8,
  },
  item: {
    minHeight: 48,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: 8,
  },
  pressed: { opacity: 0.75 },
  itemName: { fontSize: 18, flex: 1, marginRight: 12 },
  itemPrice: { fontSize: 16 },
  summary: { paddingVertical: 12, paddingHorizontal: 20 },
  summaryText: { fontSize: 16, fontWeight: '600', textAlign: 'center' },
});
