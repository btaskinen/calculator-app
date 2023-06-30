import './Buttons.css';
import { ButtonData } from './App';

type Props = {
  button: ButtonData;
};

const Button = ({ button }: Props) => {
  return (
    <button className={`Button_button Button_color-${button.color}`}>
      {button.label}
    </button>
  );
};

export default Button;
