import PropTypes from 'prop-types';
export const LoadMore = ({ click }) => {
  return (
    <div className='buttonContainer'>
    <button type="button" onClick={click} className='button'>
      Load more...
    </button>
    </div>
  );
};

LoadMore.propTypes = {
  click: PropTypes.func.isRequired,
};