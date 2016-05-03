import fetch from 'isomorphic-fetch';
import { Schema, arrayOf, normalize } from 'normalizr'

const API_KEY = 'wX9NwuHnZU2ToO7GmGR9uw'

const route = new Schema('route', {idAttribute: 'route_id'});
const mode = new Schema('mode', {idAttribute: 'route_type'});
const stopRoute = new Schema('stopRoutes', {idAttribute: 'stop_id'});

mode.define({
  route: arrayOf(route)
})

stopRoute.define({
  mode: arrayOf(mode)
})

export function fetchRoutes (stopId) {
  return fetch('http://realtime.mbta.com/developer/api/v2/routesbystop?api_key=' + API_KEY +
    '&stop=' + stopId + '&format=json')
    .then(response => response.json())
    .then(json => { return normalize(json, stopRoute) });
}
