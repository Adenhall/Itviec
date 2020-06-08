import React, { useEffect, useState } from "react";
import JobCards from '../components/JobCards.js'

export default function Jobs() {
  const [jobs, setJobs] = useState([]);

  const getData = async () => {
    let url = `http://localhost:3001/jobs`;
    let data = await fetch(url);
    let result = await data.json();
    setJobs(result);
    console.log("THis is result", result);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      
        {jobs && jobs.map((item) => <JobCards job={item} key={item.id} />)}
      
    </div>
  );
}
