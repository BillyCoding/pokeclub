import {Types} from './types';

const INITIAL_STATE = {
  data: {},
  loading: false,
  error: false,
};

const reducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case Types.POST_USER:
      return {...state, loading: true, error: false};
    case Types.POST_USER_SUCCESS:
      return {
        ...state,
        data: action.payload.user,
        loading: false,
        error: false,
      };
    case Types.POST_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };
      case Types.USER_LOGOUT:
      return {...INITIAL_STATE};
    default:
      return state;
  }
};

export default reducer;
