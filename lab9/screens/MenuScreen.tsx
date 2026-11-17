import { SectionList, StyleSheet, Text, View } from 'react-native';
import { categories, menuItems } from '../data/menu';
import type { Palette } from '../theme/palette';

type MenuScreenProps = {
  colors: Palette;
};

const sections = categories.map((category) => ({
  title: category.title,
  data: menuItems.filter((item) => item.category === category.key),
}));

export default function MenuScreen({ colors }: MenuScreenProps) {
  return (
    <SectionList
      sections={sections}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.content}
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
      renderItem={({ item }) => (
        <View style={[styles.row, { borderBottomColor: colors.border }]}>
          <Text style={[styles.name, { color: colors.text }]}>{item.name}</Text>
          <Text style={[styles.price, { color: colors.muted }]}>{item.price} грн</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  content: { padding: 20 },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '700',
    paddingTop: 16,
    paddingBottom: 8,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  name: { fontSize: 18, flexShrink: 1, paddingRight: 12 },
  price: { fontSize: 18 },
});
