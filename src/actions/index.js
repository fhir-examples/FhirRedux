export const LOGIN = 'LOGIN';
export function login(patients){
  return{

type: LOGIN,
patients: patients
  }
}

export const PATIENT_SELECTED = 'PATIENT_SELECTED';
export function patientSelected(patients){
  return{
    type: PATIENT_SELECTED,
    patients
  }
}

export const LOGOUT = 'LOGOUT';
export function logout(actions){return{

type: LOGOUT,
actions
  }
}
