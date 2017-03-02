export const LOGIN = 'LOGIN';
export function login(patient){
  return{

type: LOGIN,
patient: patient
  }
}

export const PATIENT_SELECTED = 'PATIENT_SELECTED';
export function patientSelected(patient){
  return{
    type: PATIENT_SELECTED,
    patient
  }
}

export const LOGOUT = 'LOGOUT';
export function logout(actions){return{

type: LOGOUT,
actions
  }
}
