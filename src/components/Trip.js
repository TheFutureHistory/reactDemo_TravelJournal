
export default function Trip(props){
    return(
        <div className="trip_card">
            <img src={props.trip.img} alt=""/>
            <section className="trip_card_info">
                <section className="trip_info_title">
                    <i class="fa-solid fa-location-dot"></i>
                    <h1>{props.trip.location}</h1>
                    <a href={props.trip.google_maps}>view on Google Map</a>
                </section>
                <h2>{props.trip.title}</h2>
                <p className="card_info_dates"><span>{props.trip.start_date}</span> - <span>{props.trip.end_date}</span></p>
                <p>{props.trip.description}</p>
            </section>
        </div>
    )
}