import initialState from './initialState';
import {LOGIN, LOGOUT, PATIENT_SELECTED} from '../actions/index.js';


export default function (state = initialState.patient, action) {
  const { patient } = action
  switch (action.type) {
    case LOGIN:
      return { ...state};
    case LOGOUT:
      return { ...state};
    case PATIENT_SELECTED:
      return { ...state, patient: patient.name, mrn: patient.mrn, dob: patient.dob };
    default:
      return { ...state, patient: "fsd" };
  }
}
