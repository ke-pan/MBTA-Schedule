import { fetchRoutes, fetchSchedule } from '../api';
import { 
  SEL_FROM, 
  SEL_TO, 
  SUCCESS_FROM, 
  SUCCESS_TO, 
  MATCH_ROUTES, 
  SUCCESS_SCHEDULE, 
  FIND_TRIPS,
  CLEAR_TRIPS
} from '../constant';

function selFrom(from) {
  return {
    type: SEL_FROM,
    from
  }
}

function selTo(to) {
  return {
    type: SEL_TO,
    to
  }
}

function receiveFrom(data) {
  return {
    type: SUCCESS_FROM,
    routes: data.entities.route
  }
}

function receiveTo(data) {
  return {
    type: SUCCESS_TO,
    routes: data.entities.route
  }
}

function matchRoutes() {
  return {
    type: MATCH_ROUTES,
  }
}

function clearTrips() {
  return {
    type: CLEAR_TRIPS,
  }
}

function receiveSchedule(schedule) {
  return {
    type: SUCCESS_SCHEDULE,
    schedule
  };
}

function findTrips() {
  return {
    type: FIND_TRIPS,
  };
}

export function loadFrom(from) {
  return (dispatch) => {
    dispatch(selFrom(from));
    return fetchRoutes(from).then(data => dispatch(receiveFrom(data)))
  }
}

export function loadTo(to) {
  return (dispatch) => {
    dispatch(selTo(to));
    return fetchRoutes(to).then(data => dispatch(receiveTo(data)))
  }
}

export function findSchedule() {
  return (dispatch, getState) => {
    dispatch(matchRoutes());
    const { matchRouteIds, date } = getState();
    if (matchRouteIds.length === 0) {
      dispatch(clearTrips());
    } else {
      return fetchSchedule(matchRouteIds)
        .then(data => dispatch(receiveSchedule(data)))
        .then(() => dispatch(findTrips()));
    }
    
  }
}