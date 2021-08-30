import axios from 'axios';

const apiServerUrl = process.env.REACT_APP_API_SERVER;

export const getMethod = async (url, type) => {
  const { data } = await axios({
    method: 'post',
    url: `${apiServerUrl}${url}`,
    headers: { 'Content-Type': 'application/json' },
    data: JSON.stringify({ serie: type }),
  });
  console.log(data);
  return data;
};
