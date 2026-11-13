import {useState, useEffect } from "react";
import { sanityClient } from "../libs/sanity";

export default function EventPhotos(){
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchEventPhotos(){
            try{
                const query = `
                    *[_type == "Event" && defined(gallery[0])]
                    | order(date desc) {
                        _id,
                        title, 
                        date,
                        description,
                        "photos": gallery[]{
                            _key,
                            alt,
                            "url": asset->url
                        }
                    }
                `;

                const data = await sanityClient.fetch(query);
                setEvents(data)
            } catch (error){
                console.error("Error fetching photos:", error);
            } finally {
                setLoading(false);
            }
        }
        fetchEventPhotos();
    }, []);

    if (loading){
        return <p>Loading Event Photos</p>
    }

    return (
        <div className="event-photos-page">
            <h1>Event Photos</h1>

            {events.length === 0 && (
                <p>No event photos available</p>
            )}

            {events.map((event) => (
                <div className="event-gallery" key={event._id}>
                    <h2>{event.title}</h2>
                    <p>{event.date}</p>

                    <div className="photo-grid">
                        {event.photos?.map((photo) => (
                            <img
                                key={photo._key}
                                src={photo.url}
                                alt={photo.alt || event.title}
                                loading="lazy"
                            />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}


