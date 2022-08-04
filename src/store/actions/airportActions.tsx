import axios from '../../axios';
import { AppDispatch } from "../index"
export const fetcAirports = () => {
    return async (dispatch: AppDispatch) => {
       try {
       const response = await axios.get('airports')
       console.log(response)
       } 
       catch (e){

       }
    }
}