import { useState } from 'react';
import ExtraImage from '../components/ExtraImage';
import campusUrl from '../assets/campus.svg';

const photoUrl =
  'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=960&q=80';
const videoId = 'aqz-KE-bpKQ';

export default function MediaPage() {
  const [photoFailed, setPhotoFailed] = useState(false);

  return (
    <section>
      <h1>Зображення і відео</h1>

      <section className="block">
        <h2>1. Локальне зображення — статичний імпорт</h2>
        <figure>
          <img src={campusUrl} width="960" height="480" alt="Схема головного входу до навчального корпусу" />
          <figcaption>Локальний файл із src/assets (власна схема).</figcaption>
        </figure>
      </section>

      <section className="block">
        <h2>2. Зовнішнє зображення</h2>
        {photoFailed ? (
          <p role="status" className="error">
            Зовнішнє зображення недоступне. Відкрийте його за{' '}
            <a href={photoUrl} target="_blank" rel="noopener noreferrer">посиланням на джерело</a>.
          </p>
        ) : (
          <img
            src={photoUrl}
            width="960"
            height="640"
            alt="Сонячне проміння між високими деревами лісу"
            loading="lazy"
            onError={() => setPhotoFailed(true)}
          />
        )}
        <p className="caption">
          Джерело: <a href={photoUrl} target="_blank" rel="noopener noreferrer">фотографія з Unsplash</a>.
        </p>
      </section>

      <ExtraImage />

      <section className="block">
        <h2>4. Відео</h2>
        <iframe
          className="video-frame"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="Big Buck Bunny — короткометражна анімація Blender Foundation"
          loading="lazy"
          allow="encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
        />
        <p>
          <a href={`https://www.youtube.com/watch?v=${videoId}`} target="_blank" rel="noopener noreferrer">
            Відкрити відео на YouTube
          </a>
        </p>
        <p className="caption">Джерело: Big Buck Bunny, Blender Foundation.</p>
      </section>
    </section>
  );
}
