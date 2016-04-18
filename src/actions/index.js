import { fetchRoutes } from '../api';

export const SEL_FROM = 'SEL_FROM';
export const SEL_TO = 'SEL_TO';
export const SUCCESS_FROM = 'SUCCESS_FROM';
export const SUCCESS_TO = 'SUCCESS_TO';

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
    routes: data['route']
  }
}

function receiveTo(data) {
  return {
    type: SUCCESS_TO,
    routes: data['route']
  }
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