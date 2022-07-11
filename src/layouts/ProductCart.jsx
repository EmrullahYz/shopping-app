import React, { useEffect, useState } from "react";

import { Card, Image, Grid } from "semantic-ui-react";
import ProductService from "./../services/ProductService";

export const ProductCart = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const productService = new ProductService();
    productService.getProducts().then((result) => setProducts(result.data));
  }, [products]);

  return (
    <Grid>
      <Grid.Row>
        {products.map((product) => (
          <Card key={product.id}>
            <Image src={product.image} wrapped ui={false} size="small" />
            <Card.Content>
              <Card.Header>{product.title}</Card.Header>
              <Card.Meta>{product.price}</Card.Meta>
              <Card.Description>{product.description}</Card.Description>
            </Card.Content>
          </Card>
        ))}
      </Grid.Row>
    </Grid>
  );
};
