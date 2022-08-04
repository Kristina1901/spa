import {fetcAirports} from '../store/actions/airportActions'
import { useEffect } from "react";
import AirportFilter from "../components/AirportFilter";
import AirportCard from "../components/AirportCard";
import AirportSearch from "../components/AirportSearch";
import {useAppDispatch} from '../hook/redux'
function MainPage () {
    const dispatch = useAppDispatch()
    useEffect (()=> {
     dispatch(fetcAirports())
    }, )
    return(
        <div>
            <AirportSearch/>
            <AirportFilter/>
            <AirportCard/>
        </div>
    )
}
export default MainPage