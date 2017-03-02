import initialState from './initialState';
import {LOGIN, LOGOUT, PATIENT_SELECTED} from '../actions/index.js';


export default function (state = initialState.patients, action) {
  const { patients } = action
  switch (action.type) {
    case LOGIN:
      return { ...state};
    case LOGOUT:
      return { ...state};
    case PATIENT_SELECTED:
      return { ...state, patients: patients };
    default:
      return { ...state, patients: "fsd" };
  }
}
