import React, { useState } from 'react';
import './App.css';

function App() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBMI] = useState(null);
  const [status, setStatus] = useState('');

  const calculateBMI = () => {
    const weightInKg = parseFloat(weight);
    const heightInM = parseFloat(height) / 100; // Convert height to meters

    if (isNaN(weightInKg) || isNaN(heightInM) || heightInM === 0) {
      alert('Please enter valid weight and height.');
      return;
    }

    const calculatedBMI = weightInKg / (heightInM * heightInM);
    setBMI(calculatedBMI.toFixed(2));

    if (calculatedBMI < 18.5) {
      setStatus('Anda Kurus');
    } else if (calculatedBMI >= 18.5 && calculatedBMI < 24.9) {
      setStatus('Normal');
    } else {
      setStatus('Anda kegemukan');
    }
  };

  return (
    <div className="App">
      <h1>BMI Calculator</h1>
      <label>
        Berat (kg):
        <input type="text" value={weight} onChange={(e) => setWeight(e.target.value)} />
      </label>
      <br />
      <label>
        Tinggi (cm):
        <input type="text" value={height} onChange={(e) => setHeight(e.target.value)} />
      </label>
      <br />
      <button onClick={calculateBMI}>Hitung</button>
      {bmi !== null && (
        <div>
          <p>Hasil: {bmi}</p>
          <p>Status: {status}</p>
        </div>
      )}
    </div>
  );
}

export default App;
