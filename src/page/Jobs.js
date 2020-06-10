import React, { useEffect, useState } from "react";
import JobCards from "../components/JobCards.js";
import { Navbar, Form, FormControl, Button, Container} from "react-bootstrap";
import { useHistory, useLocation } from "react-router-dom";

const QUERYSTR_PREFIX = "q";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

let keyword =''

export default function Jobs() {
  let history =useHistory();
  const [jobs, setJobs] = useState([]);
  const [originalList, setOriginalList] = useState([])
  let query = useQuery();

  const getData = async () => {
    let url = `http://localhost:3001/jobs`;
    let data = await fetch(url);
    let result = await data.json();
    setJobs(result);
    setOriginalList(result)
    
    console.log("THis is result", result);
  };

  useEffect(() => {
    getData();
  }, []);

  

  const searchByKeyword = (e) => {
    
    let tempArray = []
    
    // console.log("This is temp array for specific job", tempArray)
    if (e) {
      e.preventDefault();
      history.push(`/jobs/?${QUERYSTR_PREFIX}=${encodeURIComponent(keyword)}`);
    }
    
    if (keyword) {
      tempArray = originalList.filter(x => x.title.toLowerCase().includes(keyword.toLowerCase()))
      setJobs(tempArray)
    } else setJobs(originalList)
    
  }

  return (
    <div style={{ backgroundColor: "#e6ffff" }}>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">IT VIEC</Navbar.Brand>
        <Form inline onSubmit={(e) => searchByKeyword(e)}>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={(e)=> keyword = e.target.value}/>
          <Button variant="outline-info" type="submit">Search</Button>
        </Form>
      </Navbar>
      <Container>
        {jobs && jobs.map((item) => <JobCards job={item} key={item.id} />)}
      </Container>
      
    </div>
  );
}
