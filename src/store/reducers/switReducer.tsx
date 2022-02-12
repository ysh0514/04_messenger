interface switReducerProps {
  type: string;
  name: string;
  data: object;
}

const initialState = false;

export default function switReducer(
  state = initialState,
  action: switReducerProps
) {
  switch (action.type) {
    case 'open':
      return true;
    case 'close':
      return false;
    default:
      return state;
  }
}
