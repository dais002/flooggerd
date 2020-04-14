import React from "react";
import { Card, Button } from "react-bootstrap";

function Recipe({recipe}) {
  console.log('in recipe', recipe)
  return (
    <Card style={{ width: '20%' }}>
      <Card.Img variant="top" src="https://via.placeholder.com/100" />
      <Card.Body>
        <Card.Title>{recipe.name && recipe.name}</Card.Title>
        <Card.Text>
          Type: {recipe.type && recipe.type}
        </Card.Text>
        <Card.Text>
          Length: {recipe.time && recipe.time}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Recipe;
