import { useEffect, useState } from 'react';
import debounce from '@utils/debounce';

const BASE_URL = 'https://jsonplaceholder.typicode.com/users';

export default function useUserListData() {
  const [filter, setFilter] = useState({});
  const [data, setData] = useState([]);

  useEffect(() => {
    const params = new URLSearchParams(filter);

    params.forEach((value, key) => {
      if (value === 'null') {
        params.delete(key);
      }
    });

    fetch(`${BASE_URL}?${params}`)
      .then((res) => res.json())
      .then(setData);
  }, [filter]);

  return {
    data,
    setFilter: debounce(setFilter, 1000),
    filter
  };
}
