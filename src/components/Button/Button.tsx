import css from './Button.module.css';

interface IProps {
  onClick: () => void
}

export const Button = ({ onClick }: IProps) => {
  return (
    <button type="button" className={css.button} onClick={onClick}>
      Load-more...
    </button>
  );
};
