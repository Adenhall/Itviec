import React, { useEffect, useState } from "react";
import JobCards from "../components/JobCards.js";
import { Navbar, Form, FormControl, Button, Container} from "react-bootstrap";

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
    <div style={{ backgroundColor: "#e6ffff" }}>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">IT VIEC</Navbar.Brand>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
      <Container>
        {jobs && jobs.map((item) => <JobCards job={item} key={item.id} />)}
      </Container>
      
    </div>
  );
}
