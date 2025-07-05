// const promiseA = new Promise((resolve, reject) => {
//   resolve(777);
// }).then((val) => console.log('asynchronous logging has val:', val));
// console.log('immediate logging');

//immediate logging
//asynchronous logging has val: 777
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

// const getData = async () => {
//   try {
//     const response = await fetch('https://api.example.com/protected-data');
//     if (!response.ok) throw new Error(`${response.status}`);
//     const data = await response.json();
//     setUsers(data);
//   } catch (err) {
//     console.error(err);
//   }
// };
//Practice 06/29 8:03AM
//   useEffect(() => {
//     setLoading(true);
//     const getData = async () => {
//       try {
//         const response = await fetch('https://api.example.com/protected-data');
//         if (!response.ok) throw new Error(`${response.status}`);
//         const data = await response.json();
//         setUsers(data);
//       } catch (err: any) {
//         setError(err);
//       }
//     };
//     getData();
//   }, []);
//Practice 06/29 8:04AM - 08:09,
//Practice 8:10 - 8:13
//   useEffect(() => {
//     const getData = async () => {
//       try {
//         const response = await fetch('https://api.example.com/protected-data', { method: 'GET' });
//         if (!response.ok) throw new Error(`${response.status}`);
//         const data = await response.json();
//         setUsers(data);
//       } catch (e) {
//         console.error(e);
//       }
//     };
//     getData();
//     setLoading(false);
//   }, []);
