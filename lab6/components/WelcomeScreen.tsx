import { StyleSheet, Text, View } from 'react-native';

import { colors } from '../constants/colors';

type Section = { title: string; text: string };

const sections: Section[] = [
  {
    title: 'Про нас',
    text: 'Little Lemon — невелике сімейне бістро, де готують за рецептами середземноморської кухні, але з місцевими продуктами. Ми працюємо з фермерами з околиць міста, тому овочі, сир і зелень на вашій тарілці — завжди свіжі.',
  },
  {
    title: 'Що ми пропонуємо',
    text: 'У меню — домашня паста, запечена риба з лимоном і травами, салати з печеними овочами та грецький салат із бринзою. На десерт радимо лимонний тарт: його випікають щоранку за рецептом нашої бабусі. Для вегетаріанців і гостей без глютену є окремі сторінки меню.',
  },
  {
    title: 'Чим ми вирізняємося',
    text: 'Страви ми готуємо просто перед вами: кухня відкрита, а шеф охоче розповість, із чого зроблено кожну страву. Ми не поспішаємо з подачею, бо вважаємо, що гарна вечеря — це розмова, а не черга. Кожному гостю ми пропонуємо склянку води з лимоном.',
  },
  {
    title: 'Коли ми працюємо',
    text: 'Щодня з 10:00 до 22:00. У вихідні з 10:00 до 12:00 подаємо сніданки: яєчня з травами, сирники з цитрусовим джемом і свіжовиготовлену каву. Для компаній від шести осіб радимо бронювати столик заздалегідь.',
  },
  {
    title: 'Для кого наше бістро',
    text: 'Для швидкого обіду в перерві, для побачення за свічками, для сімейної вечері з дітьми та для зустрічі друзів. Для малечі в нас є окреме дитяче меню й розмальовки, а для тих, хто з комп’ютером, — тиха зона з розетками.',
  },
];

export function WelcomeScreen() {
  return (
    <View>
      <Text style={styles.heading}>Ласкаво просимо до Little Lemon</Text>
      <Text style={styles.lead}>
        Затишне місце, де смак лимона зустрічається з теплом домашньої кухні.
      </Text>

      {sections.map((section) => (
        <View key={section.title} style={styles.card}>
          <Text style={styles.cardTitle}>{section.title}</Text>
          <Text style={styles.cardText}>{section.text}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    color: colors.white,
    fontSize: 26,
    fontWeight: '700',
    lineHeight: 32,
  },
  lead: {
    marginTop: 10,
    marginBottom: 22,
    color: colors.light,
    fontSize: 17,
    lineHeight: 25,
  },
  card: {
    backgroundColor: colors.light,
    borderRadius: 12,
    padding: 18,
    marginBottom: 14,
  },
  cardTitle: {
    color: colors.green,
    fontSize: 19,
    fontWeight: '700',
  },
  cardText: {
    marginTop: 8,
    color: colors.text,
    fontSize: 16,
    lineHeight: 24,
  },
});
