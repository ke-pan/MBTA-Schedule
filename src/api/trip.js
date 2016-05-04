import fetch from 'isomorphic-fetch';
import { Schema, arrayOf, normalize } from 'normalizr'
import { API_KEY } from '../constant'

const mode = new Schema('mode', {idAttribute: 'route_type'});
const route = new Schema('routes', {idAttribute: 'route_id'});
const direction = new Schema('directions', {idAttribute: 'direction_id'});

mode.define({
  route: arrayOf(route)
});

route.define({
  direction: arrayOf(direction)
});

const schedule = {
  mode: arrayOf(mode)
};

export function fetchTrips(routeIds, datetime) {
  const routes = routeIds.join(',');
  return fetch('http://realtime.mbta.com/developer/api/v2/schedulebyroutes?api_key=' + API_KEY +
    '&routes=' + routes + '&datetime=' + datetime + '&format=json')
    .then(response => response.json())
    .then(json => normalize(json, schedule))
    .then(json => console.log(json));
}