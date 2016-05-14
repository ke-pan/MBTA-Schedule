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
      for (let tripId in state.schedule.entities.trips) {
        let trip = state.schedule.entities.trips[tripId];
        let schedule = {tripName: trip.trip_name, from: null, to: null};
        trip.stop.forEach((stop) => {
          // console.log(stop.stop_id);
          if (stop.stop_id == state.from) {
            schedule.from = stop;
          }
          if (stop.stop_id == state.to) {
            schedule.to = stop;
          }
        });
        console.log(schedule)
        if (schedule.from && schedule.to && schedule.to.stop_sequence > schedule.from.stop_sequence) {
          trips.push(schedule);
        }
      }
      return Object.assign({}, state, {
        trips
      });
    default:
      return state;
  }
}