import {takeEvery, takeLatest} from 'redux-saga'
import { put, call } from 'redux-saga/effects'
import* as actions from '../actions'
import {browserHistory} from 'react-router'
import {smart, api} from '../util/api.js'

export function* patientSelecteds({id}) {
  console.log(id)
  const patientName = yield call(api.getPatientName, id)

  const patient = patientName
  yield put(actions.patientSelected(patient))
}

export function* bloodPressureGet({id}) {
  const bloodP = yield call(api.getBloodPressure, id)
  const bloodData = bloodP
  console.log(bloodData)
  yield put(actions.bloodSelected(bloodData))
}

export function* patientSelected(id) {
  console.log(id)
  const patientName = yield call(api.getPatientName, id)

  const patient = patientName
  yield put(actions.patientSelected(patient))
}


export default function* userSaga(){
  yield takeEvery(actions.LOGIN, patientSelecteds);
  yield takeEvery(actions.LOGOUT, patientSelecteds);
  yield takeEvery(actions.BLOOD, bloodPressureGet);

};
