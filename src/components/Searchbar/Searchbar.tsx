import { useState } from 'react';
import PropTypes from 'prop-types';
import { BsSearch } from 'react-icons/bs';

import css from './Searchbar.module.css';

interface IProps {
  onSubmit: (search: string) => void
}

export const Searchbar = ({ onSubmit }: IProps) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(value);
  };

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>): void => {
    evt.preventDefault();
    onSubmit(inputValue.trim());
  };

  return (
    <header className={css.searchbar}>
      <form className={css.form} onSubmit={handleSubmit}>
        <button className={css.button} type="submit">
          <BsSearch className={css.icon} />
        </button>
        <input
          className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleChange}
          value={inputValue}
        />
      </form>
    </header>
  );
};
Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
