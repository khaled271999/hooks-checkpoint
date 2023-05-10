import React from 'react'
import { Card } from 'react-bootstrap'
import ReactStars from 'react-stars'

const MovieCard = ({movie}) => {
  return (
    <div>
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={movie.posterUrl} />
  <Card.Body>
    <Card.Title>{movie.title}</Card.Title>
    <Card.Text>{movie.description} </Card.Text>
  <Card.Text>{movie.rate}</Card.Text>
  <ReactStars
  size={30}
  half={false}
  edit={false}
  count={5}
  value={movie.rate}  
  />
  </Card.Body>
</Card>
    </div>
  )
}

export default MovieCard