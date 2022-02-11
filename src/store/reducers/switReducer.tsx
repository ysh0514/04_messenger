interface switReducerProps {
  type: string;
  name: string;
  data: object;
}

export default function switReducer(state = {}, action: switReducerProps) {
  switch (action.type) {
    case 'common':
      return { ...state, [action.name]: action.data };
    default:
      return state;
  }
}
