import PropTypes from 'prop-types';
export const LoadMore = ({ click }) => {
  return (
    <button type="button" onClick={click} className='button'>
      Load more...
    </button>
  );
};

LoadMore.propTypes = {
  click: PropTypes.func.isRequired,
};