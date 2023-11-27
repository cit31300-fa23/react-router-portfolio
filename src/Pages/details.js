import React from 'react';
import { useParams } from 'react-router-dom';

export default function Details() {
    const { name, age } = useParams();

    return (
        <div>
            <h1>Detail Page</h1>
            <strong>Name: </strong> { name }<br />
            <strong>Age: </strong> { age }<br />
        </div>
    )
}