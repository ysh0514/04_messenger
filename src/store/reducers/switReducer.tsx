interface switReducerProps {
  type: string;
  name: string;
  data: object;
}

const initialState = {
  showModal: false,
};

export default function switReducer(
  state = initialState,
  action: switReducerProps
) {
  switch (action.type) {
    case 'common':
      return { ...state, [action.name]: action.data };
    default:
      return state;
  }
}
