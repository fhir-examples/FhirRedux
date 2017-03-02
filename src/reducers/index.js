import {combineReducers} from 'redux'
import patients from './patientReducer'

const rootRedeucer = combineReducers({
  patients,
})

export default rootRedeucer
