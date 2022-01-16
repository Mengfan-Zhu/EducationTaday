import React, {useState} from 'react';
import { InputNumber,Input } from 'rsuite';
import {Button, Form} from 'react-bootstrap';

const Task2 = () => {
  // information get from the form (institution name and number of top results to show)
  const [info, setInfo] = useState({institution:"", number:1});

  function handleChange(event){
    setInfo({...info, [event.target.name]:event.target.value})
  }

    return (
      <div class="center">
        <h3>Task 2</h3>
        <Form action={"/result2?institution=" + info.institution + "&number=" + info.number} className="center">
          <Form.Group>
            <Form.Label>Institution name:</Form.Label>
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
    );
  };
  export default Task2;