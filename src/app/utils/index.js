import { API_URL } from '../constants';

const fetchData = async ({ url, method = 'GET' }) => {
  try {
    const response = await fetch(url, { method });
    const result = await response.json();
    return result;
  } catch (e) {
    throw new Error('FETCH ERROR');
  }
};

const getCardList = async () => {
  const result = await fetchData({ url: `${API_URL}/posts?per_page=12&page=1` });
  const { data = [] } = result;
  return data;
};

export { fetchData, getCardList };