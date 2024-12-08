import { FormatQuote as QuoteIcon } from '@mui/icons-material';
import { Avatar, Box, Card, CardContent, Container, Grid, Typography } from '@mui/material';

const testimonials = [
    {
        name: 'Rajesh Kumar',
        company: 'Precision Parts Ltd.',
        quote: 'LetsBug\'s ERP solution has revolutionized our manufacturing processes. We\'ve seen a 30% increase in efficiency since implementation.',
        avatar: 'https://i.pravatar.cc/150?img=1'
    },
    {
        name: 'Priya Sharma',
        company: 'GreenTech Innovations',
        quote: 'The level of customization and support we received from LetsBug was exceptional. Their understanding of the Indian manufacturing sector is unparalleled.',
        avatar: 'https://i.pravatar.cc/150?img=2'
    },
    {
        name: 'Amit Patel',
        company: 'Bharat Electronics',
        quote: 'LetsBug\'s digital transformation services have helped us stay competitive in the global market. Their solutions are truly cutting-edge.',
        avatar: 'https://i.pravatar.cc/150?img=3'
    }
];

const Testimonials = () => {
    return (
        <Box sx={{ backgroundColor: '#F3F4F6', py: 10 }}>
            <Container maxWidth="lg">
                <Typography
                    variant="h4"
                    component="h2"
                    align="center"
                    sx={{ fontWeight: 600, mb: 6 }}
                >
                    What Our Clients Say
                </Typography>
                <Grid container spacing={4}>
                    {testimonials.map((testimonial, index) => (
                        <Grid item xs={12} md={4} key={index}>
                            <Card
                                elevation={3}
                                sx={{
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    transition: 'transform 0.3s ease-in-out',
                                    '&:hover': {
                                        transform: 'translateY(-5px)',
                                    }
                                }}
                            >
                                <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                                    <QuoteIcon color="primary" sx={{ fontSize: 40, mb: 2 }} />
                                    <Typography variant="body1" paragraph sx={{ flexGrow: 1 }}>
                                        "{testimonial.quote}"
                                    </Typography>
                                    <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                                        <Avatar src={testimonial.avatar} sx={{ width: 50, height: 50, mr: 2 }} />
                                        <Box>
                                            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                                                {testimonial.name}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {testimonial.company}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Testimonials;

