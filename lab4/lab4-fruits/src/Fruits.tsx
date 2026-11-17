import type { Fruit } from './types';

type FruitsProps = { fruits: Fruit[] };

function Fruits({ fruits }: FruitsProps) {
  return (
    <ul>
      {fruits.map(fruit => (
        <li key={fruit.id}>{fruit.fruitName}</li>
      ))}
    </ul>
  );
}

export default Fruits;
