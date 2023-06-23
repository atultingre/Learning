import React, { useEffect, useState } from "react";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const FetchProducts = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        setData(data);
        // console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Fetching the Products</h1>

      <div className="display-card">
        {data.products?.map((product) => (
          <Card sx={{ maxWidth: 345 }} key={product.id}>
            <CardMedia
              sx={{ height: 140, maxWidth: 345 }}
              image={product.thumbnail}
              title={product.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {product.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {product.description}
              </Typography>
              <Typography varient="h5">Price: ${product.price}</Typography>
            </CardContent>
            <CardActions>
              <Button size="small" variant="contained">
                Buy
              </Button>
              <Button
                size="small"
                variant="contained"
                startIcon={<AddShoppingCartIcon />}
                color="success">
                Add to cart
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </>
  );
};

export default FetchProducts;
