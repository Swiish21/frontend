import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/events').then((response) => {
            setEvents(response.data);
        });
    }, []);

    return (
        <div>
            <h1>Betting Events</h1>
            <ul>
                {events.map((event) => (
                    <li key={event.id}>
                        {event.name} - Odds: {event.odds}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Home;
