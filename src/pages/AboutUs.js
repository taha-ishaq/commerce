import React from 'react';
import { Box, Typography, Grid, IconButton, useTheme } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

const AboutUs = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 4,
        background: 'white', // Removed background color
      }}
    >
      <Typography
        variant="h4"
        sx={{
          marginBottom: 4,
          color: 'black',
          textAlign: 'center',
          fontWeight: 'bold',
          letterSpacing: 1,
          position: 'relative',
        }}
      >
        #WORLDOFSAFIYAKHANUM
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              padding: 3,
              borderRadius: '16px',
              border: `1px solid ${theme.palette.grey[300]}`,
              position: 'relative',
              overflow: 'hidden',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: -20,
                left: -20,
                width: 'calc(100% + 40px)',
                height: 'calc(100% + 40px)',
                background: 'white',
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 80%)',
                zIndex: -1,
              },
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -20,
                right: -20,
                width: 'calc(100% + 40px)',
                height: 'calc(100% + 40px)',
                background: 'white',
                clipPath: 'polygon(0% 20%, 100% 0%, 100% 100%, 0% 100%)',
                zIndex: -1,
              },
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontSize: '1.3rem',
                color: theme.palette.text.primary,
                lineHeight: 1.8,
                '&:hover': {
                  color: theme.palette.primary.main,
                  transition: 'color 0.3s ease',
                },
              }}
            >
              Welcome to the world of Safiya Khanum, where tradition meets elegance. Explore our unique collection of timeless designs that celebrate the essence of culture and craftsmanship.
            </Typography>
            <img
              src="https://aik.store/cdn/shop/files/RTW_-_Home_Page_Website_Banner.jpg?v=1720519136&width=1400"
              alt="About Us"
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '16px',
                marginTop: '16px',
                display: 'block',
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              borderRadius: '16px',
              overflow: 'hidden',
              position: 'relative',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: -20,
                left: -20,
                width: 'calc(100% + 40px)',
                height: 'calc(100% + 40px)',
                background: 'white',
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 80%)',
                zIndex: -1,
              },
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -20,
                right: -20,
                width: 'calc(100% + 40px)',
                height: 'calc(100% + 40px)',
                background: 'white',
                clipPath: 'polygon(0% 20%, 100% 0%, 100% 100%, 0% 100%)',
                zIndex: -1,
              },
            }}
          >
            <img
              src="https://aik.store/cdn/shop/files/RTW_-_Home_Page_Website_Banner.jpg?v=1720519136&width=1400"
              alt="About Us"
              style={{ width: '100%', height: 'auto', borderRadius: '16px', display: 'block' }}
            />
          </Box>
          <Typography
            variant="body1"
            sx={{
              marginTop: 2,
              fontSize: '1.3rem',
              color: theme.palette.text.primary,
              lineHeight: 1.8,
              '&:hover': {
                color: theme.palette.primary.main,
                transition: 'color 0.3s ease',
              },
            }}
          >
            Our mission is to bring you the finest in traditional fashion with a modern touch. Discover designs that reflect both our heritage and our commitment to quality.
          </Typography>
        </Grid>
      </Grid>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: 4,
        }}
      >
        <IconButton
          href="https://facebook.com"
          sx={{
            margin: 1,
            color: theme.palette.text.primary,
            '&:hover': {
              color: theme.palette.primary.main,
            },
          }}
        >
          <Facebook />
        </IconButton>
        <IconButton
          href="https://twitter.com"
          sx={{
            margin: 1,
            color: theme.palette.text.primary,
            '&:hover': {
              color: theme.palette.primary.main,
            },
          }}
        >
          <Twitter />
        </IconButton>
        <IconButton
          href="https://instagram.com"
          sx={{
            margin: 1,
            color: theme.palette.text.primary,
            '&:hover': {
              color: theme.palette.primary.main,
            },
          }}
        >
          <Instagram />
        </IconButton>
        <IconButton
          href="https://linkedin.com"
          sx={{
            margin: 1,
            color: theme.palette.text.primary,
            '&:hover': {
              color: theme.palette.primary.main,
            },
          }}
        >
          <LinkedIn />
        </IconButton>
      </Box>
    </Box>
  );
};

export default AboutUs;
