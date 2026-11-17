import { useState } from 'react';
import Counter from './Counter';
import TextInput from './TextInput';

function App() {
  const [text, setText] = useState('');

  return (
    <main>
      <Counter />
      <TextInput value={text} onTextChange={setText} />
      <p>Number of characters: {text.length}</p>
    </main>
  );
}

export default App;
