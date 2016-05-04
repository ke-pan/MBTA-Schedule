import {
  SEL_FROM,
  SEL_TO,
  SUCCESS_FROM,
  SUCCESS_TO,
  SEL_DATE,
  MATCH_ROUTES,
  SUCCESS_SCHEDULE,
  FIND_TRIPS
} from '../constant';

export default function (state = {
  isFetching: false,
  from: '',
  to: '',
  date: null,
  fromRoutes: null,
  toRoutes: null,
  matchRouteIds: [],
  schedule: null,
  trips: [],
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
    case SEL_DATE:
      return Object.assign({}, state, {
        date: action.date
      })
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
    case MATCH_ROUTES:
      let matchRouteIds = [];
      for (let fromRouteId in state.fromRoutes) {
        for (let toRouteId in state.toRoutes) {
          if (fromRouteId === toRouteId) {
            matchRouteIds.push(fromRouteId);
          }
        }
      }
      return Object.assign({}, state, {
        isFetching: true,
        matchRouteIds
      });
    case SUCCESS_SCHEDULE:
      return Object.assign({}, state, {
        isFetching: false,
        schedule: action.schedule
      });
    case FIND_TRIPS:
      let trips = [];
      for (let trip in state.schedule.entities.trip) {
        
      }
      return Object.assign({}, state, {

      })
    default:
      return state;
  }
}