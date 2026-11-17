import Heading from './components/Heading';
import Subject from './components/Subject';

export default function App() {
  return (
    <main className="page">
      <Heading
        firstName="Ірина"
        lastName="Мороз"
        group="ІПЗ-41"
      />
      <section aria-labelledby="subjects-title">
        <h2 id="subjects-title">Мої дисципліни</h2>
        <div className="subjects">
          <Subject
            subjectName="React Native"
            description="Розробка мобільних інтерфейсів."
            credits={5}
            semester={2}
            teacher="Ірина Мельник"
          />
          <Subject
            subjectName="Бази даних"
            description="Моделювання даних і запити SQL."
            credits={4}
            semester={2}
            teacher="Андрій Бондар"
          />
          <Subject
            subjectName="Комп’ютерні мережі"
            description="Обмін даними між пристроями."
            credits={4}
            semester={2}
          />
          <Subject
            subjectName="Веброзробка"
            description="Створення сайтів: HTML, CSS, JavaScript і React."
            credits={5}
            semester={2}
            teacher="Ігор Шевчук"
          />
        </div>
      </section>
    </main>
  );
}
