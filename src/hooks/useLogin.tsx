import axios from 'axios';

export default function ogin(id: string, password: string): boolean {
  const END_POINT = 'http://localhost:4000/users';
  let a = true;
  axios.get(`${END_POINT}?id=${id}&password=${password}`).then((res) => {
    a = !!res.data.length;
  });
  return a;
}
