export const LOGIN = 'LOGIN';
export function login(id){
  return{
type: LOGIN,
id
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
export function logout(id){return{

type: LOGOUT,
id
  }
}
