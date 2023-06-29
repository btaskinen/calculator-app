import { useState } from 'react';
import Button from './Button';
import './App.css';

const buttons = [
  'AC',
  'C',
  '(',
  ')',
  '7',
  '8',
  '9',
  '/',
  '4',
  '5',
  '6',
  '*',
  '1',
  '2',
  '3',
  '-',
  '0',
  '=',
  '+',
];

const App = () => {
  const [calcNumber, setCalcNumber] = useState(0);

  return (
    <div className="App">
      <div className="App_text-box">{calcNumber}</div>
      <div className="App_buttons">
        {buttons.map((button, index) => (
          <Button key={index} button={button} />
        ))}
      </div>
    </div>
  );
};

export default App;
