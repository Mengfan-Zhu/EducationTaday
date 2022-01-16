import React, {useState} from 'react';
import {InputNumber,Input} from 'rsuite';
import {Button, Form} from 'react-bootstrap';

const Task1 = () => {
  // information get from the form (author name and number of top results to show)
  const [info, setInfo] = useState({author:"", number:1});

  function handleChange(event){
    setInfo({...info, [event.target.name]:event.target.value})
  }


    return (
      <div>
        <div>
        <h3>Task 1</h3>
        <Form action={"/result1?author=" + info.author + "&number=" + info.number}>
          <Form.Group>
            <Form.Label>Author name: </Form.Label>
            <br/>
            <Input name = "author" onChange={handleChange} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Top # to show (1~10):</Form.Label>
            <InputNumber defaultValue={1} max={10} min={1} name = "number" onChange={handleChange}/>
          </Form.Group>
          <Form.Group>
            <Button variant="primary" type="submit">Search</Button>
          </Form.Group>
        </Form>
      </div>
      </div>
    );
  };
  export default Task1;