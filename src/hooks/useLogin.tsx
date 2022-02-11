import { useEffect, useState } from 'react';
import { userInfoProps } from '../utils/InterfaceSet';
import { HttpUtil } from '../utils';

export default function useLogin(id: string) {
  const userInfoParam = {
    url: '/users',
    method: 'GET',
    params: { userId: id },
  };
  const [response, setResponse] = useState<userInfoProps>();

  useEffect(() => {
    const getData = async () => {
      const res = await HttpUtil.requestApi(userInfoParam);
      const { msg, data } = res;

      if (!!msg) return;

      setResponse(data);
    };
    getData();
  }, []);

  return { response };
}

// export default function ogin(id: string, password: string): boolean {
//   const END_POINT = 'http://localhost:4000/users';
//   let a = true;
//   axios.get(`${END_POINT}?id=${id}&password=${password}`).then((res) => {
//     a = !!res.data.length;
//   });
//   return a;
// }
