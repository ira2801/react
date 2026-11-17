import { StyleSheet, Text, View } from 'react-native';

import { colors } from '../constants/colors';
import type { MenuItem } from '../types/menu';

type Props = {
  item: MenuItem;
};

export default function MenuItemRow({ item }: Props) {
  return (
    <View style={styles.row}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>{item.price.toFixed(2)} грн</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: 10,
  },
  // flex: 1 дозволяє довгій назві переноситись, не перекриваючи ціну.
  name: { flex: 1, fontSize: 17, color: colors.white, marginRight: 12 },
  price: { fontSize: 17, fontWeight: '600', color: colors.accent },
});
