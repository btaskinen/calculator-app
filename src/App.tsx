import { useState } from 'react';
import Button from './Button';
import './App.css';

export type ButtonData = {
  label: string;
  color: string;
};

type Buttons = ButtonData[];

const buttons: Buttons = [
  {
    label: 'AC',
    color: 'darker',
  },
  {
    label: '+/-',
    color: 'darker',
  },
  {
    label: '%',
    color: 'darker',
  },
  {
    label: '/',
    color: 'dark',
  },
  {
    label: '7',
    color: 'light',
  },
  {
    label: '8',
    color: 'light',
  },
  {
    label: '9',
    color: 'light',
  },
  {
    label: 'X',
    color: 'dark',
  },
  {
    label: '4',
    color: 'light',
  },
  {
    label: '5',
    color: 'light',
  },
  {
    label: '6',
    color: 'light',
  },
  {
    label: '-',
    color: 'dark',
  },
  {
    label: '1',
    color: 'light',
  },
  {
    label: '2',
    color: 'light',
  },
  {
    label: '3',
    color: 'light',
  },
  {
    label: '+',
    color: 'dark',
  },
  {
    label: '0',
    color: 'light',
  },
  {
    label: '.',
    color: 'light',
  },
  {
    label: '=',
    color: 'dark',
  },
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
