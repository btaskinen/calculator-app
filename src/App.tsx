import { useState } from 'react';
import Button from './Button';
import './App.css';

export type ButtonType = 'ACTION' | 'OPERATOR' | 'NUMBER';

export type ButtonData = {
  label: string;
  type: ButtonType;
  color: string;
};

type Buttons = ButtonData[];

const buttons: Buttons = [
  {
    label: 'AC',
    type: 'ACTION',
    color: 'darker',
  },
  {
    label: '+/-',
    type: 'ACTION',
    color: 'darker',
  },
  {
    label: '%',
    type: 'ACTION',
    color: 'darker',
  },
  {
    label: '/',
    type: 'OPERATOR',
    color: 'dark',
  },
  {
    label: '7',
    type: 'NUMBER',
    color: 'light',
  },
  {
    label: '8',
    type: 'NUMBER',
    color: 'light',
  },
  {
    label: '9',
    type: 'NUMBER',
    color: 'light',
  },
  {
    label: 'X',
    type: 'OPERATOR',
    color: 'dark',
  },
  {
    label: '4',
    type: 'NUMBER',
    color: 'light',
  },
  {
    label: '5',
    type: 'NUMBER',
    color: 'light',
  },
  {
    label: '6',
    type: 'NUMBER',
    color: 'light',
  },
  {
    label: '-',
    type: 'OPERATOR',
    color: 'dark',
  },
  {
    label: '1',
    type: 'NUMBER',
    color: 'light',
  },
  {
    label: '2',
    type: 'NUMBER',
    color: 'light',
  },
  {
    label: '3',
    type: 'NUMBER',
    color: 'light',
  },
  {
    label: '+',
    type: 'OPERATOR',
    color: 'dark',
  },
  {
    label: '0',
    type: 'NUMBER',
    color: 'light',
  },
  {
    label: '.',
    type: 'NUMBER',
    color: 'light',
  },
  {
    label: '=',
    type: 'ACTION',
    color: 'dark',
  },
];

const App = () => {
  const [displayNumber, setDisplayNumber] = useState('0');
  const [calcNumber, setCalcNumber] = useState('0');
  const [operator, setOperator] = useState('');

  const operatorButtonPressed = (label: string): void => setOperator(label);

  const numberButtonPressed = (label: string): void => {
    console.log(operator);
    switch (operator) {
      case '':
        if (displayNumber === '0') {
          setDisplayNumber(label);
          setCalcNumber(label);
        } else {
          const numberString = calcNumber + label;
          setCalcNumber(numberString);
          setDisplayNumber(numberString);
        }
        break;
      case '+':
        setDisplayNumber(label);
        const resultAddition = Number(calcNumber) + Number(label);
        setCalcNumber(String(resultAddition));
        break;
      case '-':
        setDisplayNumber(label);
        const resultSubstraction = Number(calcNumber) - Number(label);
        setCalcNumber(String(resultSubstraction));
        break;
      case 'X':
        setDisplayNumber(label);
        const resultMultiplication = Number(calcNumber) * Number(label);
        setCalcNumber(String(resultMultiplication));
        break;
      case '/':
        setDisplayNumber(label);
        const resultDivision = Number(calcNumber) / Number(label);
        setCalcNumber(String(resultDivision));
        break;
    }
    setOperator('');
  };

  const actionButtonPressed = (label: string): void => {
    switch (label) {
      case 'AC':
        setCalcNumber('0');
        setDisplayNumber('0');
        break;
      case '+/-':
        const changeSign = Number(calcNumber) * -1;
        setCalcNumber(String(changeSign));
        setDisplayNumber(String(changeSign));
        break;
      case '%':
        const calcPercentage = Number(calcNumber) / 100;
        setCalcNumber(String(calcPercentage));
        setDisplayNumber(String(calcPercentage));
        break;
      case '=':
        setDisplayNumber(calcNumber);
        break;
    }
  };

  const actionSelection = (type: ButtonType, label: string): void => {
    switch (type) {
      case 'ACTION':
        actionButtonPressed(label);
        break;
      case 'NUMBER':
        numberButtonPressed(label);
        break;
      case 'OPERATOR':
        operatorButtonPressed(label);
    }
  };

  return (
    <div className="App">
      <div className="App_text-box">{displayNumber}</div>
      <div className="App_buttons">
        {buttons.map((button, index) => (
          <Button
            key={index}
            button={button}
            buttonFunction={actionSelection}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
