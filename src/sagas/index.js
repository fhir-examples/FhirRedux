import {takeEvery, takeLatest} from 'redux-saga'
import { put, call } from 'redux-saga/effects'
import* as actions from '../actions'
import {browserHistory} from 'react-router'
import {smart, api} from '../util/api.js'

export function* patientSelecteds(id) {
  const patientName = yield call(api.getPatientName, id)
  console.log(patientName)
  const patient = patientName
  yield put(actions.patientSelected(patient))
}


export default function* userSaga(){
  yield takeEvery(actions.LOGIN, patientSelecteds, "99912345");
  yield takeEvery(actions.LOGOUT, patientSelecteds, "9995679");
};
