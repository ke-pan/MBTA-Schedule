import fetch from 'isomorphic-fetch';
import { Schema, arrayOf, normalize } from 'normalizr'
import { API_KEY } from '../constant'

const mode = new Schema('mode', {idAttribute: 'route_type'});
const route = new Schema('routes', {idAttribute: 'route_id'});
const direction = new Schema('directions', {idAttribute: 'direction_id'});
const trip = new Schema('trips', {idAttribute: 'trip_id'});

mode.define({
  route: arrayOf(route)
});

route.define({
  direction: arrayOf(direction)
});

direction.define({
  trip: arrayOf(trip)
});

const schedule = {
  mode: arrayOf(mode)
};

export function fetchSchedule(routeIds) {
  const routes = routeIds.join(',');
  return fetch('http://realtime.mbta.com/developer/api/v2/schedulebyroutes?api_key=' + API_KEY +
    '&routes=' + routes + '&format=json')
    .then(response => response.json())
    .then(json => normalize(json, schedule));
}