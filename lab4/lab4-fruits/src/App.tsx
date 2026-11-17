import { useState } from 'react';
import Fruits from './Fruits';
import FruitsCounter from './FruitsCounter';
import type { Fruit } from './types';

function App() {
  const [fruits] = useState<Fruit[]>([
    { id: 1, fruitName: 'Яблуко' },
    { id: 2, fruitName: 'Груша' },
    { id: 3, fruitName: 'Слива' },
  ]);

  return (
    <main>
      <Fruits fruits={fruits} />
      <FruitsCounter fruits={fruits} />
    </main>
  );
}

export default App;
