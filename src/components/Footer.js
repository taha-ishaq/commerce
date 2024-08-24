import React from 'react';
import { Box, Typography, IconButton, TextField, Button, useTheme } from '@mui/material';
import { Facebook, Instagram, WhatsApp, Pinterest } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';

const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: '95%',  // Adjusted width
        maxWidth: '1200px',
        margin: 'auto',
        padding: 4,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: theme.palette.background.paper,
        borderTop: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          paddingBottom: 4,
        }}
      >
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            '& > p': {
              marginBottom: 2,
              fontSize: '1.1rem',
            },
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 1 }}>
            ABOUT SAFIYA KHANUM
          </Typography>
          <Typography variant="body2" sx={{ fontSize: '0.9rem' }}>
            Safiya Khanum combines constantly evolving creative methods with modern technology to serve the woman of today.
          </Typography>
          <Box sx={{ display: 'flex', marginTop: 2 }}>
            <IconButton href="https://facebook.com" sx={{ marginRight: 1 }}>
              <Facebook />
            </IconButton>
            <IconButton href="https://instagram.com" sx={{ marginRight: 1 }}>
              <Instagram />
            </IconButton>
            <IconButton href="https://whatsapp.com" sx={{ marginRight: 1 }}>
              <WhatsApp />
            </IconButton>
            <IconButton href="https://pinterest.com" sx={{ marginRight: 1 }}>
              <Pinterest />
            </IconButton>
          </Box>
          <Typography variant="body2" sx={{ fontSize: '0.9rem', marginTop: 2 }}>
            © 2024 - Safiya Khanum | Luxury Womenswear
          </Typography>
        </Box>

        <Box
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            borderLeft: `1px solid ${theme.palette.divider}`,
            paddingLeft: 4,
            paddingRight: 4,
            '& > h6': {
              marginBottom: 2,
              fontWeight: 'bold',
            },
            '& > a': {
              margin: 1,
              textDecoration: 'none',
              color: theme.palette.text.primary,
              '&:hover': {
                color: theme.palette.primary.main,
              },
            },
          }}
        >
          <Typography variant="h6">CUSTOMER HUB</Typography>
          <RouterLink to="/" style={{ margin: '8px', textDecoration: 'none', color: theme.palette.text.primary }}>
            HOME
          </RouterLink>
          <RouterLink to="/privacy" style={{ margin: '8px', textDecoration: 'none', color: theme.palette.text.primary }}>
            PRIVACY
          </RouterLink>
          <RouterLink to="/terms" style={{ margin: '8px', textDecoration: 'none', color: theme.palette.text.primary }}>
            TERMS OF USE
          </RouterLink>
        </Box>

        <Box
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            '& > h6': {
              marginBottom: 2,
              fontWeight: 'bold',
            },
            '& > p': {
              marginBottom: 2,
              fontSize: '0.9rem',
            },
            '& > .footer-input': {
              marginBottom: 2,
              width: '100%',
            },
            '& > .footer-button': {
              backgroundColor: theme.palette.primary.main,
              color: 'white',
              '&:hover': {
                backgroundColor: theme.palette.primary.dark,
              },
            },
          }}
        >
          <Typography variant="h6">Newsletter</Typography>
          <Typography variant="body2">
            Subscribe to receive updates, access to exclusive deals, and more.
          </Typography>
          <TextField
            className="footer-input"
            variant="outlined"
            placeholder="E-mail"
            size="small"
          />
          <Button
            className="footer-button"
            variant="contained"
          >
            Subscribe
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
