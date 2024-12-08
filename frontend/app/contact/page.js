"use client";
import {
    Email as EmailIcon,
    LocationOn as LocationIcon,
    Phone as PhoneIcon
} from '@mui/icons-material';
import {
    Alert,
    Box,
    Button,
    Container,
    Grid,
    Paper,
    Snackbar,
    TextField,
    Typography
} from '@mui/material';
import Head from 'next/head';
import { useState } from 'react';

export default function ContactUs() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [openSnackbar, setOpenSnackbar] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the form data to your backend
        console.log('Form submitted:', formData);

        // Reset form and show success message
        setFormData({
            name: '',
            email: '',
            phone: '',
            message: ''
        });
        setOpenSnackbar(true);
    };

    const contactInfo = [
        {
            icon: <PhoneIcon color="primary" />,
            title: 'Phone',
            content: '+91 78XX XXXXXX'
        },
        {
            icon: <EmailIcon color="primary" />,
            title: 'Email',
            content: 'contact@letsbug.com'
        },
        {
            icon: <LocationIcon color="primary" />,
            title: 'Address',
            content: 'Mumbai, Maharashtra, India'
        }
    ];

    return (
        <>
            <Head>
                <title>Contact LetsBug - Get in Touch</title>
                <meta
                    name="description"
                    content="Contact LetsBug for software solutions for Indian MSMEs. Reach out for consultations, support, or inquiries."
                />
            </Head>

            <Container maxWidth="lg" sx={{ py: 8 }}>
                <Typography
                    variant="h3"
                    component="h1"
                    align="center"
                    sx={{
                        mb: 6,
                        fontWeight: 700
                    }}
                >
                    Contact Us
                </Typography>

                <Grid container spacing={4}>
                    {/* Contact Information */}
                    <Grid item xs={12} md={4}>
                        <Paper
                            elevation={3}
                            sx={{
                                p: 4,
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center'
                            }}
                        >
                            <Typography
                                variant="h5"
                                component="h2"
                                sx={{ mb: 3 }}
                            >
                                Get In Touch
                            </Typography>
                            {contactInfo.map((info, index) => (
                                <Box
                                    key={index}
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        mb: 2
                                    }}
                                >
                                    {info.icon}
                                    <Box sx={{ ml: 2 }}>
                                        <Typography variant="subtitle1">
                                            {info.title}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                        >
                                            {info.content}
                                        </Typography>
                                    </Box>
                                </Box>
                            ))}
                        </Paper>
                    </Grid>

                    {/* Contact Form */}
                    <Grid item xs={12} md={8}>
                        <Paper
                            elevation={3}
                            sx={{ p: 4 }}
                        >
                            <form onSubmit={handleSubmit}>
                                <Grid container spacing={3}>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            fullWidth
                                            label="Your Name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            fullWidth
                                            label="Email Address"
                                            name="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            fullWidth
                                            label="Phone Number"
                                            name="phone"
                                            type="tel"
                                            value={formData.phone}
                                            onChange={handleChange}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            fullWidth
                                            label="Your Message"
                                            name="message"
                                            multiline
                                            rows={4}
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Button
                                            type="submit"
                                            variant="contained"
                                            color="primary"
                                            fullWidth
                                            size="large"
                                        >
                                            Send Message
                                        </Button>
                                    </Grid>
                                </Grid>
                            </form>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>

            {/* Success Snackbar */}
            <Snackbar
                open={openSnackbar}
                autoHideDuration={6000}
                onClose={() => setOpenSnackbar(false)}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            >
                <Alert
                    onClose={() => setOpenSnackbar(false)}
                    severity="success"
                    sx={{ width: '100%' }}
                >
                    Your message has been sent successfully!
                </Alert>
            </Snackbar>
        </>
    );
}