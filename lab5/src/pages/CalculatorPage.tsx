import { useState } from 'react';

type Operation = 'add' | 'subtract' | 'multiply' | 'divide';

export default function CalculatorPage() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(0);
  const [error, setError] = useState('');


  function apply(operation: Operation) {
    if (input.trim() === '') {
      setError('Введіть число.');
      return;
    }
    const operand = Number(input);
    if (!Number.isFinite(operand)) {
      setError('Введіть скінченне число.');
      return;
    }

    let nextResult: number;
    switch (operation) {
      case 'add':
        nextResult = result + operand;
        break;
      case 'subtract':
        nextResult = result - operand;
        break;
      case 'multiply':
        nextResult = result * operand;
        break;
      case 'divide':
        if (operand === 0) {
          setError('Ділення на нуль неможливе.');
          return;
        }
        nextResult = result / operand;
        break;
    }

    if (!Number.isFinite(nextResult)) {
      setError('Результат завеликий для обчислення.');
      return;
    }
    setResult(nextResult);
    setError('');
  }

  function handleClearField() {
    setInput('');
    setError('');
  }

  function handleResetResult() {
    setResult(0);
    setError('');
  }

  return (
    <section className="calc">
      <h1>Калькулятор</h1>
      <label htmlFor="operand">Число для операції</label>
      <input
        id="operand"
        type="number"
        step="any"
        value={input}
        onChange={event => {
          setInput(event.currentTarget.value);
          setError('');
        }}
      />

      <div className="actions">
        <button type="button" onClick={() => apply('add')}>Додати</button>
        <button type="button" onClick={() => apply('subtract')}>Відняти</button>
        <button type="button" onClick={() => apply('multiply')}>Помножити</button>
        <button type="button" onClick={() => apply('divide')}>Поділити</button>
      </div>
      <div className="actions">
        <button type="button" onClick={handleClearField}>Очистити поле</button>
        <button type="button" onClick={handleResetResult}>Скинути результат</button>
      </div>

      {error && <p role="alert" className="error">{error}</p>}
      <p className="result" aria-live="polite">Результат: {result}</p>
    </section>
  );
}
