import { AUTH_USER } from '../actions/types';

export default function authReducer(state = {}, action: { type: string }) {
  switch (action.type) {
    case AUTH_USER:
      return {
        ...state,
        auth: true,
      };
    default:
      return state;
  }
}
