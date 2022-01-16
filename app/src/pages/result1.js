import React, {useState, useEffect} from 'react';
import {useLocation} from "react-router-dom";
import {Table} from 'react-bootstrap';
const Result1 = () => {
  // information get from the form (author name and number of top results to show)
  const [papers, setPapers] = useState([]);
  let location = useLocation();
  var author = location.search ? location.search.split('=')[1].split('&')[0] : "";
  var number = location.search ? location.search.split('=')[2] : 1;

  function getPapers() {
    return fetch("/api/task1?author=" + author + "&number=" + number).then(response => response.json());
  }
  

  useEffect(() => {
    let mounted = true;
    getPapers()
      .then(papers => {
        if(mounted) {
          setPapers(papers);
        }
      })
    return () => mounted = false;
  }, [])

    return (
      <div>
        <h3>Task 1 Result</h3>
        <div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Title</th> 
                <th>Frequency</th> 
              </tr>
            </thead>
            <tbody>
            {papers.map(paper =>
              <tr>
                <td>{paper[0]}</td>
                <td>{paper[1]}</td>
              </tr>)}
            </tbody>
          </Table>
        </div>
      </div>
    );
  };
  export default Result1;