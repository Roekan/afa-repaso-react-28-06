import React, { useEffect, useState } from 'react'
import { getCharacters,getCharacterByName } from '../../services/apiCalls'
import { useNavigate } from "react-router-dom";
import { Col, Row, Container, Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './LlamadaAPI.css'
import {useDebounce} from 'use-debounce'



export const LlamadaAPI = () => {

interface CharData{
  id:string,
  name:string,
  image:string,
  location:{name:string}
}

const navigate = useNavigate();
const [characters, setCharacters] = useState<CharData[]>([]);
const [search, setSearch] = useState<string>("")
const[debouncedSearch] = useDebounce(search,1000)

useEffect(()=>{

if(debouncedSearch){
  getCharacterByName(debouncedSearch).then((res)=>
    setCharacters(res)
  );
}else{
  getCharacters().then((res)=>setCharacters(res));
}

},[debouncedSearch])

const inputHandler = ({target}:ChangeEvent<HTMLInputElement>)=>{
  const {value}:any = target;
  setSearch(value);
}

  return (
    <>
      <Container fluid>
      <Row className="justify-content-center">
          <Col xs={10} md={6}>
          <input
            name="criteria"
            type="text"
            placeholder="Search a character"
            onChange={inputHandler}
          />
          {/* <button onClick={searchHandler}>SEARCH</button> */}
          </Col>
        </Row>

        <Row className='bg-dark'>
          {characters?.map((char:CharData)=>{
            return(
            <Col className='d-flex align-items-center justify-content-center' key={char.id}>
              <Card style={{ width: '18rem' }} className='m-1 bg-dark border border-2 text-danger '>
                <Card.Img variant="top" src={char.image} />
                <Card.Body>
                <Card.Title>{char.name}</Card.Title>
                <Card.Text>
                {char.location.name}
                </Card.Text>
                <Button className='btn-detalle' onClick={() => navigate(`/detail/${char.id}`)} variant="primary">Ver detalle de<br/> {char.name}</Button>
                </Card.Body>
              </Card>
            </Col>
            )
          })}
        </Row>
      </Container>
    </>
  )
}
