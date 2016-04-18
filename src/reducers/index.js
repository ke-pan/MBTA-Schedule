import { SEL_FROM, SEL_TO, SUCCESS_FROM, SUCCESS_TO } from '../actions';

export default function (state = {
  isFetching: false,
  from: '',
  to: '',
  day: '',
  fromRoutes: [],
  toRoutes:[],
}, action) {
  switch (action.type) {
    case SEL_FROM:
      return Object.assign({}, state, {
        isFetching: true,
        from: action.from
      });
    case SEL_TO:
      return Object.assign({}, state, {
        isFetching: true,
        to: action.to
      });
    case SUCCESS_FROM:
      return Object.assign({}, state, {
        isFetching: false,
        fromRoutes: action.routes
      });
    case SUCCESS_TO:
      return Object.assign({}, state, {
        isFetching: false,
        toRoutes: action.routes,
      });
    default:
      return state;
  }
}