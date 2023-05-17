// import PropTypes from 'prop-types';

const axios = require('axios').default;
const API_KEY = '34463648-52ae7b431b36c8e3f85583ecc';
const BASIC_URL = `https://pixabay.com/api/?key=${API_KEY}&q=`;
const searchParams = '&image_type=photo&orientation=horizontal';

export const getImages = async (page, query) => {
  const serverDataURL = `${BASIC_URL}${query}${searchParams}&page=${page}&per_page=12`;
  try {
    const server = await axios.get(serverDataURL);
    const data = await server.data;
    const length = data.hits.length;
    const dataHits = {
      images: data.hits,
      total: length,
      totalHits: data.totalHits,
    };
    return dataHits;
  } catch (error) {}
};

// getImages.propTypes = {
//   page: PropTypes.number.isRequired,
//   query: PropTypes.string.isRequired,
// };