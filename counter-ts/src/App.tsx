import React, { useState } from 'react';
import s from './App.module.css';
import { Setting } from './components/Setting';
import { Tablo } from './components/Tablo';

function App() {
  const [maxValue, setMaxValue] = useState(0)
  const [startValue, setStartValue] = useState(0)
  const [error, setError] = useState(false)
  return (
    <div className={s.App}>
      <div className={s.container}>
        <Setting
          maxValue={maxValue}
          setMaxValue={setMaxValue}
          startValue={startValue}
          setStartValue={setStartValue}
          error={error}
          setError={setError}
        />
        <Tablo
          maxValue={maxValue}
          startValue={startValue}
          error={error}
          setError={setError}
          />
      </div>

    </div>
  );
}

export default App;
