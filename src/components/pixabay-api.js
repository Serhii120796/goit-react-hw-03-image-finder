import axios from 'axios';

const API_KEY = '38986631-ae11b42db00bd05f0f2571500';
axios.defaults.baseURL = 'https://pixabay.com/api';

export const fetchImages = async (value, page, per_page) => {
  const params = new URLSearchParams({
    key: API_KEY,
    q: value,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page,
    page: page,
  });

  const response = await axios.get('/', { params });

  return response.data;
};
