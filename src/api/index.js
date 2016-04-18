import fetch from 'isomorphic-fetch';

const API_KEY = 'wX9NwuHnZU2ToO7GmGR9uw'

export function fetchRoutes (stopId) {
  return fetch('http://realtime.mbta.com/developer/api/v2/routesbystop?api_key=' + API_KEY + 
    '&stop=' + stopId + '&format=json').then(response => response.json());
}