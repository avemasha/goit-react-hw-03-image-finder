import PropTypes from 'prop-types';
export const ImageGalleryItem = ({ img, alt, onClick, largeImageURL }) => {
  return (
    <li className='imageGalleryItem'>
      <img src={img} alt={alt} data-src={largeImageURL} onClick={onClick} className='imageGalleryItem-image' />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  img: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};