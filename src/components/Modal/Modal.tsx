import { useEffect } from 'react';
import { ICurrentImage } from 'type/typeImages';

import css from './Modal.module.css';

interface IProps {
  image: ICurrentImage,
  onClose: () => void,
}

export const Modal = ({ image: { src, alt }, onClose }: IProps) => {
  useEffect(() => {
    const handleKeydown = (evt: KeyboardEvent) => {
      if (evt.code === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeydown);

    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [onClose]);

  const hanleClickBackdrop = (evt: React.MouseEvent<HTMLDivElement>) => {
    if (evt.target === evt.currentTarget) onClose();
  };

  return (
    <div className={css.backdrop} onClick={hanleClickBackdrop}>
      <div className={css.modal}>
        <img className={css.img} src={src} alt={alt} />
      </div>
    </div>
  );
};


