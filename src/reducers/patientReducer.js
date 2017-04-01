import initialState from './initialState';
import {LOGIN, LOGOUT, PATIENT_SELECTED, RDATA, BLOOD_SELECTED, BLOOD_ADD, PICS_SELECTED} from '../actions/index.js';
import {database} from '../util/firebase.js'


export default function (state = initialState.patient, action) {
  // get the action varible for the data you want to update with
  const { patient, blood, rdata, pics } = action
  switch (action.type) {
    case LOGIN:
      return { ...state};
      case BLOOD_SELECTED:
        return { ...state, bloodData: blood.sys, bloodDia: blood.dia};
        case BLOOD_ADD:
        let thi = state.bloodData
        if(state.b > 19){
        thi.splice(1,1)
      }
        let ran =Math.floor((Math.random() * 80) + 20)
        thi.push([state.b,ran])
        console.log(thi)
          return { ...state, bloodData: thi, b:state.b+1};
    case LOGOUT:
      return { ...state};
    case PATIENT_SELECTED:
      return { ...state, name: patient.name, mrn: patient.mrn, dob: patient.dob,  state: patient.state, city: patient.city, tele: patient.tele  };
    case RDATA:
    // database.ref('photo/').push({
    //   photo: rdata.data,
    //   user: rdata.name,
    //   date: "9-20-2017",
    // });
      return { ...state, name: rdata.name, email: rdata.email, data: rdata.data };
    case PICS_SELECTED:
        console.log(pics)
        return { ...state, pics: pics };
    default:
      return { ...state };
  }
}
