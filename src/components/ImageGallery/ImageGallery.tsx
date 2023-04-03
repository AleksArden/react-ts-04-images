import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ICurrentImage, IImages } from 'type/typeImages';

import css from './ImageGallery.module.css';

interface IProps{
  images: IImages[],
  onOpenModal: (image: ICurrentImage) => void
}

export const ImageGallery = ({ images, onOpenModal }: IProps) => {
  return (
    <ul className={css.gallery} id="gallery">
      {images.map((item) => (
        <ImageGalleryItem
          key={item.id}
        image={item}
          onOpenModal={onOpenModal}
        />
      ))}
    </ul>
  );
};

