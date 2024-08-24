import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Typography, Card, CardMedia, CardContent, Grid, Modal, IconButton, Button, Chip } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';


const NewIn = ({ addToCart }) => {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const navigate = useNavigate();
  
    useEffect(() => {
      const fetchProducts = async () => {
        try {
          const response = await axios.get('http://localhost:5000/products');
          setProducts(response.data);
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      };
  
      fetchProducts();
    }, []);
  
  const handleCardClick = (product) => {
    setSelectedProduct(product);
  };

  const handleClose = () => {
    setSelectedProduct(null);
    setSelectedImage(null);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleAddToCart = () => {
    if (addToCart && selectedProduct) {
      addToCart(selectedProduct);

      let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
      const existingItemIndex = cartItems.findIndex(item => item._id === selectedProduct._id);

      if (existingItemIndex > -1) {
        cartItems[existingItemIndex].quantity += 1;
      } else {
        selectedProduct.quantity = 1;
        cartItems.push(selectedProduct);
      }

      localStorage.setItem('cartItems', JSON.stringify(cartItems));

      handleClose();
      navigate('/cart');
    } else {
      console.error('addToCart is not a function or selectedProduct is null');
    }
  };

  return (
    <>
    <Navbar/>
    <Box sx={{ marginTop: '100px', paddingTop: '20px' }}>
      {products.length === 0 ? (
        <Typography variant="h6" align="center">No New products available</Typography>
      ) : (
        <>
          <Grid container spacing={4}>
            {products.map((product) => (
              <Grid item xs={12} sm={6} md={4} key={product._id}>
                <Card sx={{ cursor: 'pointer' }} onClick={() => handleCardClick(product)}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={product.mainImage}
                    alt={product.name}
                  />
                  <CardContent>
                    <Typography variant="h6" component="div">
                      {product.name}<br />
                      Price, RS={product.price}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Modal
            open={Boolean(selectedProduct)}
            onClose={handleClose}
            sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <Box
              sx={{
                width: '90%',
                maxWidth: '600px',
                backgroundColor: 'white',
                padding: 2,
                borderRadius: 2,
                position: 'relative',
                overflowY: 'auto',
                maxHeight: '80vh',
              }}
            >
              <IconButton
                onClick={handleClose}
                sx={{ position: 'absolute', top: 16, right: 16 }}
              >
                <CloseIcon />
              </IconButton>
              {selectedProduct && (
                <Box>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                      <img
                        src={selectedProduct.mainImage}
                        alt={selectedProduct.name}
                        style={{ width: '100%', borderRadius: '8px', maxHeight: '300px', objectFit: 'cover' }}
                      />
                      <Grid container spacing={1} mt={2}>
                        {selectedProduct.secondaryImages && selectedProduct.secondaryImages.map((img, index) => (
                          <Grid item xs={4} key={index}>
                            <img
                              src={img}
                              alt={`Secondary ${index}`}
                              style={{ width: '100%', borderRadius: '8px', maxHeight: '80px', objectFit: 'cover', cursor: 'pointer' }}
                              onClick={() => handleImageClick(img)}
                            />
                          </Grid>
                        ))}
                      </Grid>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Typography variant="h5">{selectedProduct.name}</Typography>
                      <Typography variant="body1" mt={1}>{selectedProduct.description}</Typography>
                      <Typography variant="h6" mt={1}>Price: {selectedProduct.price}</Typography>
                      <Typography variant="body1" mt={1}>
                        Length: {selectedProduct.length || 'N/A'} meters
                      </Typography>
                      {selectedProduct.tags && selectedProduct.tags.length > 0 && (
                        <Box mt={2}>
                          <Typography variant="subtitle1">Tags:</Typography>
                          <Box mt={1}>
                            {selectedProduct.tags.map((tag, index) => (
                              <Chip key={index} label={tag} sx={{ margin: '2px' }} />
                            ))}
                          </Box>
                        </Box>
                      )}
                      <Button variant="contained" color="primary" sx={{ mt: 2 }} onClick={handleAddToCart}>Add to Cart</Button>
                    </Grid>
                  </Grid>
                </Box>
              )}
            </Box>
          </Modal>

          <Modal
            open={Boolean(selectedImage)}
            onClose={() => setSelectedImage(null)}
            sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <Box
              sx={{
                width: '80%',
                maxWidth: '800px',
                backgroundColor: 'white',
                padding: 2,
                borderRadius: 2,
                position: 'relative',
              }}
            >
              <IconButton
                onClick={() => setSelectedImage(null)}
                sx={{ position: 'absolute', top: 16, right: 16 }}
              >
                <CloseIcon />
              </IconButton>
              <img
                src={selectedImage}
                alt="Selected"
                style={{ width: '100%', borderRadius: '8px' }}
              />
            </Box>
          </Modal>
        </>
      )}
    </Box>
    </>
  );
};

export default NewIn;
