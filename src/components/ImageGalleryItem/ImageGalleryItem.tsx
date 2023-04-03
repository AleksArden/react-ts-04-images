import css from './ImageGalleryItem.module.css';
import { ICurrentImage, Item } from 'type/typeImages';

interface IProps {
 image: Item,
  onOpenModal: (image: ICurrentImage) => void
}

export const ImageGalleryItem = ({ image:
  {webformatURL,
  tags,
  largeImageURL},
  onOpenModal,
}: IProps) => {
  return (
    <li
      id="gallery"
      className={css.item}
      onClick={() => onOpenModal({ src: largeImageURL, alt: tags })}
    >
      <img className={css.image} src={webformatURL} alt={tags} />
    </li>
  );
};
