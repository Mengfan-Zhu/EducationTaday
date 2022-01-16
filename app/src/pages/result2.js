import React, {useState, useEffect} from 'react';
import {useLocation} from "react-router-dom";
import {Table} from 'react-bootstrap';
const Result1 = () => {
  // information get from the form (author name and number of top results to show)
  const [affiliations, setAffiliations] = useState([]);
  let location = useLocation();
  var affiliation = location.search ? location.search.split('=')[1].split('&')[0] : "";
  var number = location.search ? location.search.split('=')[2] : 1;

  function getAffiliations() {
    return fetch("/api/task2?affiliation=" + affiliation + "&number=" + number).then(response => response.json());
  }
  

  useEffect(() => {
    let mounted = true;
    getAffiliations()
      .then(affiliations => {
        if(mounted) {
          setAffiliations(affiliations);
        }
      })
    return () => mounted = false;
  }, [])

    return (
      <div>
        <h3>Task 2 Result</h3>
        <div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Affiliation</th> 
                <th>Frequency</th> 
              </tr>
            </thead>
            <tbody>
            {affiliations.map(affiliation =>
              <tr>
                <td>{affiliation[0]}</td>
                <td>{affiliation[1]}</td>
              </tr>)}
            </tbody>
          </Table>
        </div>
      </div>
    );
  };
  export default Result1;