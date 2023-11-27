import React from 'react';
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div>
            <h1>Home Page</h1>
            <Link to="/details/Percy/21">Percy</Link><br />
            <Link to="/details/Fred/18">Fred</Link><br />
            <Link to="/details/George/18">George</Link><br />
            <Link to="/details/Ron/16">Ron</Link><br />
            <Link to="/details/Ginny/14">Ginny</Link><br />
        </div>
    )
}