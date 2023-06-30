import './Buttons.css';
import { ButtonData } from './App';
import { ButtonType } from './App';

type Props = {
  button: ButtonData;
  buttonFunction: (type: ButtonType, label: string) => void;
};

const Button = ({ button, buttonFunction }: Props) => {
  return (
    <button
      className={`Button_button Button_color-${button.color}`}
      onClick={() => buttonFunction(button.type, button.label)}
    >
      {button.label}
    </button>
  );
};

export default Button;
