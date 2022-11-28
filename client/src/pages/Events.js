import React, { useEffect, useState } from "react";
//import axios from "axios";
import "../style/Events.css";
export default function Events() {
  const [backendData, setBackendData] = useState([{}]);
  /* useEffect(() => {
  const DB = "http://127.0.0.1:8000";
   fetch(DB, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
      });
    console.log(setBackendData);
  }, []);*/
  fetch("http://127.0.0.1:8000/data")
    .then((res) => res.json())
    .then((data) => console.log(data));

  return (
    <div className="MainEvents">
      <h1>Events</h1>
      <a href="/AddingEvent">
        <button>Add Your Event</button>
      </a>
    </div>
  );
}

/*
{typeof backendData.names === "undefined" ? (
        <p>Loading...</p>
      ) : (
        backendData.manes.map((name, i) => <p key={i}>{name}</p>)
      )} 
*/
//axios
/*
      useEffect(() => {
        axios
          .get("http://127.0.0.1:8000")
          .then((res) => {
            console.log(res);
            setBackendData(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }, []);

      */
//axios return

/*
<ul>
        {backendData.map((backendData) => (
          <li key={backendData.id}>{backendData.name}</li>
        ))}
      </ul>
      */
