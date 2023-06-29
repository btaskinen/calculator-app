import './Buttons.css';

type Props = {
  button: string;
};

const Button = ({ button }: Props) => {
  return <button className="Button_button">{button}</button>;
};

export default Button;
