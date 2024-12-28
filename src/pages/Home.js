import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
    const [events, setEvents] = useState([]);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsAuthenticated(true);
        }

        axios.get('http://localhost:5000/events').then((response) => {
            setEvents(response.data);
        });
    }, []);

    return (
        <div>
            <h1>Betting Events</h1>
            {isAuthenticated ? (
                <ul>
                    {events.map((event) => (
                        <li key={event.id}>
                            {event.name} - Odds: {event.odds}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Please log in to view betting events.</p>
            )}
        </div>
    );
};

export default Home;
