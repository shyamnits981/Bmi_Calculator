import React, { useEffect, useState } from 'react'
import './App.css';

function App() {
  //making state in bmiapplication:
  const [weight, setWeight] = useState(0);
  const [height, setheight] = useState(0);
  const [age, setAge] = useState('')
  const [bmi, setBmi] = useState('');
  const [message, setMessage] = useState('');
  const [selected, setSelected] = useState('yes');

  //logic
  let calBmi = (e) => {
    e.preventDefault();
    if (weight === 0 || height === 0) {
      alert('please enter a valid weight and height');
    }
    else {
      let bmi = (weight / (height * height) * 703)
      setBmi(bmi.toFixed(1));
      if (bmi < 16) {
        setMessage('Severe Thinness');
      }
      else if (bmi >= 16 && bmi <= 17) {
        setMessage('Moderate thiness');
      }
      else if (bmi >= 17 && bmi <= 18.5) {
        setMessage('Noraml');
      }

      else if (bmi >= 18.6 && bmi <= 25) {
        setMessage('Overweight');
      }
      else if (bmi >= 25 && bmi <= 30) {
        setMessage('Observer Class 1');
      }
      else if (bmi >= 30 && bmi <= 35) {
        setMessage('Obese Class 11');
      }
      else {
        setMessage('observer Class 111');
      }

    }
  }

  let reload = () => {
    window.location.reload();
  }

  const handleChange = event => {
    console.log(event.target.value);
    setSelected(event.target.value);
  };

  return (
    <div className="App">
      <div className='cointner'>
        <h2>BMI Calculator</h2>
        <form onSubmit={calBmi}>
          <div>
            <label>Age</label>
            <input type="Number" placeholder="Enter Age" value={age} onChange={(e) => setAge(e.target.value)} />
          </div>

          <div>
            <label>Gender</label>
            <input
              type="radio"
              id="yes"
              name="choose"
              value="yes"
              checked={selected === 'yes'}
              onChange={handleChange}
            />
            <label htmlFor="yes">Male</label>

            <input type="radio"
              id="no"
              name="choose"
              value="no"
              onChange={handleChange}
              checked={selected === 'no'}
            />
            <label htmlFor="no">Female</label>
          </div>



          <div>
            <label>Height </label>
            <input type="number" placeholder="Enter weight value" value={height} onChange={(e) => setheight(e.target.value)} />
          </div>

          <div>
            <label>Weight</label>
            <input type="number" placeholder="Enter weight value" value={weight} onChange={(e) => setWeight(e.target.value)} />
          </div>

          <div>
            <button className='btn' type='submit'>Claculate</button>
            <button className='btn btn-outline' onClick={reload} type="submit">Clear</button>
          </div>

          <div className='center'>
            <h3>Your BMI is:{bmi}</h3>
            <p>{message}</p>
            <div>Age: {age}</div>
          </div>
        </form>

      </div>
    </div>
  );
}

export default App;
