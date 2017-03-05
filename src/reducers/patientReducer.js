import initialState from './initialState';
import {LOGIN, LOGOUT, PATIENT_SELECTED, BLOOD_SELECTED} from '../actions/index.js';


export default function (state = initialState.patient, action) {
  const { patient, blood } = action
  switch (action.type) {
    case LOGIN:
      return { ...state};
      case BLOOD_SELECTED:
        return { ...state, bloodData: blood.sys, bloodDia: blood.dia};
    case LOGOUT:
      return { ...state};
    case PATIENT_SELECTED:
      return { ...state, patient: patient.name, mrn: patient.mrn, dob: patient.dob,  state: patient.state, city: patient.city, tele: patient.tele  };
    default:
      return { ...state };
  }
}
