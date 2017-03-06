export const LOGIN = 'LOGIN';
export function login(id){
  return{
type: LOGIN,
id
  }
}
export const BLOOD = 'BLOOD';
export function blood(id){
  return{
type: BLOOD,
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
export const BLOOD_SELECTED = 'BLOOD_SELECTED';
export function bloodSelected(blood){
  return{
    type: BLOOD_SELECTED,
    blood
  }
}
export const BLOOD_ADD = 'BLOOD_ADD';
export function bloodAdd(patient){
  return{
    type: BLOOD_ADD,
    patient
  }
}
export const LOGOUT = 'LOGOUT';
export function logout(id){return{

type: LOGOUT,
id
  }
}
