interface AuthReducerProps {
  type: string;
  name: string;
  data: object;
}

const initState = {
  userId: '',
  userName: '',
  profileImage: '',
  content: '',
  date: '',
};

export default function authReducer(
  state = initState,
  action: AuthReducerProps
) {
  switch (action.type) {
    case 'common':
      return { ...state, [action.name]: action.data };
    default:
      return state;
  }
}
