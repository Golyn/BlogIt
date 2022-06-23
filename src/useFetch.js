import { useEffect, useState } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //   // Using promises
  //   const getData = (url) => {
  //     fetch(url)
  //       .then((res) => {
  //         if (res.ok) {
  //           console.log(res);
  //           return res.json();
  //         }
  //         throw res;
  //       })
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       })
  //       .catch((err) => {
  //         console.error('Error fetching data', err);
  //         setError(err.message);
  //       })
  //       .finally(() => setLoading(false));
  //   };

  // or
  // Using async await for promise instead of normal promise
  // Note that: handling promises with the more concise async/await
  // syntax requires creating a separate function.
  //  (Why? The effect callback function  of the useEffect hook cannot be async.)
  //  instead, use async / await in separate function, then call
  // function back in useEffect

  // async function getData() {
  //   const res = await fetch('http://localhost:8000/posts', {
  //     headers: {
  //       'Content-type': 'application/json',
  //     },
  //   });
  //   const data = res.json();
  //   setPosts(data);
  // }

  //   useEffect(() => {
  //     getData();
  //   }, [url]);
  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (res.ok) {
          console.log(res);
          return res.json();
        }
        throw res;
      })
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((err) => {
        console.error('Error fetching data', err);
        setError(err.message);
      })
      .finally(() => setLoading(false));
  }, [url]);
  return { data, loading, error };
};

export default useFetch;
