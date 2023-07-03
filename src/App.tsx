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

  const operatorButtonPressed = (label: string): void => {
    switch (operator) {
      case '':
        setCalcNumber(displayNumber);
        setOperator(label);
        break;
      case '+':
        setCalcNumber(String(Number(displayNumber) + Number(calcNumber)));
        break;
      case '-':
        setCalcNumber(String(Number(displayNumber) - Number(calcNumber)));
        break;
      case 'X':
        setCalcNumber(String(Number(displayNumber) * Number(calcNumber)));
        break;
      case '-':
        setCalcNumber(String(Number(displayNumber) / Number(calcNumber)));
        break;
    }
    setOperator(label);
  };

  const numberButtonPressed = (label: string): void => {
    switch (operator) {
      case '':
        if (displayNumber === '0') {
          setDisplayNumber(label);
          setCalcNumber(label);
        } else {
          setDisplayNumber(displayNumber + label);
        }
        break;
      case '+':
        const resultAddition = Number(displayNumber) + Number(label);
        setCalcNumber(String(resultAddition));
        break;
      case '-':
        const resultSubstraction = Number(calcNumber) - Number(label);
        setCalcNumber(String(resultSubstraction));
        break;
      case 'X':
        const resultMultiplication = Number(calcNumber) * Number(label);
        setCalcNumber(String(resultMultiplication));
        break;
      case '/':
        const resultDivision = Number(calcNumber) / Number(label);
        setCalcNumber(String(resultDivision));
        break;
    }
  };

  const actionButtonPressed = (label: string): void => {
    switch (label) {
      case 'AC':
        setCalcNumber('0');
        setDisplayNumber('0');
        setOperator('');
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
        switch (operator) {
          case '':
            break;
          case '+':
            const resultAddition = Number(displayNumber) + Number(label);
            setCalcNumber(String(resultAddition));
            break;
          case '-':
            const resultSubstraction = Number(calcNumber) - Number(label);
            setCalcNumber(String(resultSubstraction));
            break;
          case 'X':
            const resultMultiplication = Number(calcNumber) * Number(label);
            setCalcNumber(String(resultMultiplication));
            break;
          case '/':
            const resultDivision = Number(calcNumber) / Number(label);
            setCalcNumber(String(resultDivision));
            break;
        }
        setDisplayNumber(calcNumber);
        setOperator('');
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
