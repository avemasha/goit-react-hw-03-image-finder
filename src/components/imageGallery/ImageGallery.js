import React from "react"
import PropTypes from 'prop-types'
import {nanoid} from 'nanoid'

import { ImageGalleryItem } from 'components/imageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ data, onClick }) => {
    return (
      <ul className="imageGallery">
        {data.map(img => {
          return (
            <ImageGalleryItem
              img={img.webformatURL}
              alt={img.tags}
              largeImageURL={img.largeImageURL}
              key={nanoid(4)}
              onClick={onClick}
            />
          );
        })}{' '}
      </ul>
    );
  };
  
  ImageGallery.propTypes = {
    data: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired,
  };