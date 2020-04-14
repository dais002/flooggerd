import React from "react";
import { Form, Button, FormControl } from "react-bootstrap";

function RecipesSearch() {
  return (
    <Form inline>
      <FormControl
        type="text"
        placeholder="Search Recipes..."
        className="mr-sm-2"
      />
      <Button variant="outline-primary">Search</Button>
    </Form>
  );
}

export default RecipesSearch;
