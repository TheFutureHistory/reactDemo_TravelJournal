
import Trip from "./Trip"
import Data from "./Data"

console.log(Trip)


export default function Body(){

    const trips = Data.map(trip =>{
        return (
            <Trip 
            key={trip.id}
            trip = {trip}
            />
        )
    })
    return (
        <div className="travels_cont">
            {trips}
        </div>
    )
}