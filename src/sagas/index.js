import {takeEvery, takeLatest} from 'redux-saga'
import { put, call } from 'redux-saga/effects'
import* as actions from '../actions'
import {browserHistory} from 'react-router'
import {smart, api} from '../util/api.js'
import {database, storage} from '../util/firebase.js'
function iss (id){
 return database.ref("photo/-"+id).once('value').then(function(snapshot){
        let my = snapshot.val()
        return my.link
})
}
function si(id){
  let tw = database.ref("userphoto/"+id)
return tw.once('value').then(function(snapshot) {
var y = snapshot
return y
  // snapshot.forEach((child) => {
  //       iss(child).then(data=>{
  //         y.push(data)
  //       })})

// return ["https://firebasestorage.googleapis.com/v0/b/fhirreact.appspot.com/o/images%2Fhg.png?alt=media&token=30539e4b-4c80-4509-b67e-23992a9897a4","https://firebasestorage.googleapis.com/v0/b/fhirreact.appspot.com/o/images%2Fhgh.png?alt=media&token=12c78ac1-8bbd-42b0-98a8-64bd3373a184"]
// return snapshot.val()
})
}

function pho(photoIds){
  var k =[]
 photoIds.forEach((child) => {
   k.push(child.key)
   })
   return k
 }
// take an id of the user and then get a list of their pictures.
//first get the list of photo ids for a user
// get a list of urls from the list of photo ids.
export function* picGet({id}){
  var y = []
  let photoIds = yield call(si, id)
  // let urlIds = yield call(iss, photoIds)
  // console.log(urlIds);
  let photoIdArr = yield call(pho, photoIds)

  for (let value of photoIdArr) {
  var urlIds = yield call (iss, value)
  y.push(urlIds)
}

  yield put(actions.picsSelected(y))
}


export function* patientSelecteds({id}) {
  console.log(id)
  //call your api and pass the id varible get the result back
  const patientName = yield call(api.getPatientName, id)
// store the api results in patient
  const patient = patientName
  yield put(actions.patientSelected(patient))
  const pics = yield call (si, id)



  //lets now create a pic selected action to update our state.
  //take the pics value that you got from your api and then pass it to the action. This will call the action type to update the state with the pic value

    // yield put(actions.patientSelected(pics))
  //Create a storage reference from our storage service
  // let storageRef = storage.ref()
  // storageRef.child('images/hgh.png').getDownloadURL().then(function(url) {
  //   console.log(url)
  // })

  // database.ref('photo/').push({
  //   photo: "ok",
  //   user: id,
  //   date: "9-20-2017",
  // });
//   database.ref("userphoto/"+id).on('value', (snap) => {
//
//         snap.forEach((child) => {
// console.log(child.key)
// database.ref("photo/-"+child.key).on('value', (snapshot) => {
// let my = snapshot.val();
// console.log(my.photo +" "+ my.date)
//           });
//         });
//
//   // database.ref("photo/"+"-KgJa0xiSqybctswueRl").on('value', function(snapshot) {
//   // let my = snapshot.val();
//   // console.log(my)
// // });
// })
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
  yield takeEvery(actions.PIC, picGet);
};
