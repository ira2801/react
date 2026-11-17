import { useState } from 'react';

type TextInputProps = {
  value: string;
  onTextChange: (text: string) => void;
};

function TextInput({ value, onTextChange }: TextInputProps) {
  const [submittedText, setSubmittedText] = useState('');
  const [error, setError] = useState('');

  return (
    <section>
      <form
        onSubmit={event => {
          event.preventDefault();
          if (value.trim() === '') {
            setError('Введіть текст: поле не може бути порожнім');
            return;
          }
          setError('');
          setSubmittedText(value);
        }}
      >
        <label>
          Текст:
          <input
            value={value}
            maxLength={50}
            onChange={event => onTextChange(event.currentTarget.value)}
          />
        </label>
        <span> {value.length}/50 </span>
        <button type="submit">Submit</button>
      </form>
      {error !== '' && <p role="alert">{error}</p>}
      <p>{submittedText}</p>
    </section>
  );
}

export default TextInput;
