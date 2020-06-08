import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Badge } from "react-bootstrap";
import moment from 'moment'

export default function Details() {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  const getData = async () => {
    let url = `http://localhost:3001/jobs/${id}`;
    let data = await fetch(url);
    let result = await data.json();
    setJob(result);
    console.log(result);
  };

  useEffect(() => {
    getData();
  }, []);

  if (job === null) {
      return <div>LOADING</div>
  }

  return (
    <div>
      <h1>{job.title}</h1>
      <div>
        {job.tags.map((x) => {
          return <Badge variant="dark">{x}</Badge>;
        })}
      </div>
      <div><i class="fas fa-dollar-sign"></i> {job.salary}</div>
    <div><i class="fas fa-map-marker-alt"></i> {job.city} District {job.district}</div>
    <div><i class="fas fa-edit"></i> {moment(job.time).startOf('hour').fromNow()}</div>
        <h1>BENEFITS</h1>
    <ul>{job.benefits.map(x => {return(<li>{x}</li>)})}</ul>
    <h1>DESCRIPTION</h1>
    <div>{job.description}</div>
    </div>
  );
}
