"use client";
import {
  InsertChartOutlined as ChartIcon,
  DevicesOutlined as DevicesIcon,
  FactoryOutlined as FactoryIcon,
  SettingsOutlined as GearIcon
} from '@mui/icons-material';
import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  Stack,
  Typography,
  useTheme
} from '@mui/material';
import Head from 'next/head';
import Link from 'next/link';
import Testimonials from '../components/Testimonials';

const services = [
  {
    icon: <FactoryIcon fontSize="large" color="primary" />,
    title: 'ERP Solutions',
    description: 'Comprehensive ERP systems tailored for Indian manufacturing MSMEs.'
  },
  {
    icon: <GearIcon fontSize="large" color="primary" />,
    title: 'Process Automation',
    description: 'Streamline your manufacturing processes with cutting-edge automation tools.'
  },
  {
    icon: <ChartIcon fontSize="large" color="primary" />,
    title: 'Business Intelligence',
    description: 'Gain valuable insights with our advanced analytics and reporting solutions.'
  },
  {
    icon: <DevicesIcon fontSize="large" color="primary" />,
    title: 'Digital Transformation',
    description: 'Embrace Industry 4.0 with our comprehensive digital solutions.'
  }
];

export default function Home() {
  const theme = useTheme();

  return (
    <>
      <Head>
        <title>LetsBug - Empowering Indian Manufacturing MSMEs</title>
        <meta
          name="description"
          content="We provide cutting-edge ERP solutions and digital transformation services tailored for the Indian manufacturing sector."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: theme.palette.primary.main,
          color: '#fff',
          py: 10
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            component="h1"
            sx={{
              fontWeight: 700,
              mb: 3,
              fontSize: { xs: '2rem', md: '3.5rem' }
            }}
          >
            Empowering Indian Manufacturing MSMEs
          </Typography>

          <Typography
            variant="h6"
            sx={{
              mb: 4,
              maxWidth: 800,
              margin: 'auto',
              fontWeight: 300
            }}
          >
            We provide cutting-edge ERP solutions and digital transformation services
            tailored for the Indian manufacturing sector, helping you compete in the
            global market and drive sustainable growth.
          </Typography>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} mb={4}>
            <Link href="/contact" passHref>
              <Button variant="contained" color="secondary">
                Get Started
              </Button>
            </Link>
            <Link href="/services" passHref>
              <Button variant="outlined" color="secondary">
                Learn More
              </Button>
            </Link>
          </Stack>
        </Container>
      </Box>

      {/* Services Section */}
      <Box sx={{ py: 10 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            component="h2"
            align="center"
            sx={{ fontWeight: 600, mb: 6 }}
          >
            Our Services
          </Typography>
          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card
                  elevation={2}
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    p: 2,
                    textAlign: 'center',
                    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
                    }
                  }}
                >
                  {service.icon}
                  <Typography variant="h6" component="h3" mt={2}>
                    {service.title}
                  </Typography>
                  <Typography variant="body2" mt={1}>
                    {service.description}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Why Choose LetsBug? Section */}
      <Box sx={{ py: 10, bgcolor: theme.palette.grey[100] }}>
        <Container maxWidth="lg">
          <Typography variant="h4" component="h2" align="center" sx={{ fontWeight: 600, mb: 6 }}>
            Why Choose LetsBug?
          </Typography>
          <Typography variant="body1" paragraph>
            At LetsBug, we specialize in empowering MSMEs in India's manufacturing sector.
            Our solutions are designed to be affordable, scalable, and tailored to
            the unique challenges of your industry.
          </Typography>
          <ul style={{
            listStyleType: 'none',
            padding: 0,
            '& li': {
              marginBottom: '10px',
              display: 'flex',
              alignItems: 'center',
            },
            '& li::before': {
              content: '""',
              width: '20px',
              height: '20px',
              marginRight: '10px',
              background: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%236366F1"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>') no-repeat center center`,
              backgroundSize: 'contain',
            }
          }}>
            <li>Industry-Specific ERP Solutions</li>
            <li>Seamless Integration with Existing Systems</li>
            <li>Local Understanding of Indian Manufacturing Sector</li>
            <li>24/7 Technical Support and Training</li>
            <li>Compliance with Indian Regulations</li>
          </ul>
        </Container>
      </Box>

      {/* Key Features Section */}
      <Box sx={{ py: 10 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            component="h2"
            align="center"
            sx={{ fontWeight: 600, mb: 6 }}
          >
            Key Features of Our ERP Solution
          </Typography>
          <Grid container spacing={4}>
            {[
              'Production Planning',
              'Inventory Management',
              'Supply Chain Optimization',
              'Quality Control',
              'Financial Management',
              'Human Resources',
              'Customer Relationship Management',
              'Business Intelligence & Reporting'
            ].map((feature, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card
                  elevation={2}
                  sx={{
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    p: 2,
                    textAlign: 'center',
                    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
                    }
                  }}
                >
                  <Typography variant="h6" component="h3">
                    {feature}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Testimonials />

      {/* Navigation Links Section */}
      <Box sx={{ py: 5, bgcolor: theme.palette.grey[100] }}>
        <Container maxWidth="lg">
          <Stack direction="row" spacing={4} justifyContent="center">
            <Link href="/" passHref>
              <Button variant="outlined" color="primary">
                Home
              </Button>
            </Link>
            <Link href="/services" passHref>
              <Button variant="outlined" color="primary">
                Services
              </Button>
            </Link>
            <Link href="/about" passHref>
              <Button variant="outlined" color="primary">
                About
              </Button>
            </Link>
            <Link href="/contact" passHref>
              <Button variant="outlined" color="primary">
                Contact
              </Button>
            </Link>
          </Stack>
        </Container>
      </Box>

      {/* Footer Section */}
      <Box sx={{ py: 3, bgcolor: theme.palette.grey[200] }}>
        <Container maxWidth="lg">
          <Typography variant="body2" align="center">
            &copy; {new Date().getFullYear()} LetsBug. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </>
  );
}

