import { useState, useCallback } from 'react';
import { db } from '../firebase';

export const useGetDataAll = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetcher = useCallback(async (collectionName) => {
    try {
      const snapshot = await db.collection(collectionName).limit(1).get();
      const fetchData = snapshot.docs.reduce((arr, doc) => {
        return [...arr, ...doc.data().todos];
      }, []);

      setData(fetchData);
      setError(null);
    } catch (error) {
      console.log('GetDataAll Error:', error);
      setError(error);
      setData(null);
    }
  }, []);

  return {
    data,
    error,
    fetcher,
  };
};
