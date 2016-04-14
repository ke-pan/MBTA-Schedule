import { REQUEST, SUCCESS, FAILURE } from '../actions';

export default function (state = {
  isFetching: false,
  from: '',
  to: '',
  day: '',
  data: []
}, action) {
  switch (action.type) {
    case REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        from: action.from,
        to: action.to,
        day: action.day
      });
    case SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        data: action.data
      });
    case FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
      });
    default:
      return state;
  }
}