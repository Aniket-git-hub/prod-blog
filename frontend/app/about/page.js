import {
    Avatar,
    Box,
    Card,
    Container,
    Grid,
    Typography
} from '@mui/material';
import Head from 'next/head';

export default function AboutUs() {
    const teamMembers = [
        {
            name: 'Rahul Sharma',
            role: 'Founder & CEO',
            bio: 'Tech entrepreneur with 15+ years of experience in software solutions for SMEs.',
            avatar: '/api/placeholder/200/200'
        },
        {
            name: 'Priya Patel',
            role: 'Chief Technology Officer',
            bio: 'Expert in cloud computing and digital transformation strategies.',
            avatar: '/api/placeholder/200/200'
        },
        {
            name: 'Amit Verma',
            role: 'Head of Product Development',
            bio: 'Passionate about creating scalable and innovative software solutions.',
            avatar: '/api/placeholder/200/200'
        },
        {
            name: 'Sneha Gupta',
            role: 'Customer Success Manager',
            bio: 'Dedicated to ensuring client satisfaction and business growth.',
            avatar: '/api/placeholder/200/200'
        }
    ];

    return (
        <>
            <Head>
                <title>About LetsBug - Empowering Indian MSMEs</title>
                <meta
                    name="description"
                    content="Learn about LetsBug's mission to transform Indian MSMEs through innovative technology solutions."
                />
            </Head>

            {/* Hero Section */}
            <Box
                sx={{
                    backgroundColor: '#F3F4F6',
                    py: { xs: 6, md: 10 },
                    textAlign: 'center'
                }}
            >
                <Container maxWidth="md">
                    <Typography
                        variant="h3"
                        component="h1"
                        sx={{
                            fontWeight: 700,
                            mb: 3
                        }}
                    >
                        Our Mission
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{
                            fontWeight: 300,
                            color: 'text.secondary'
                        }}
                    >
                        To empower Indian MSMEs with cutting-edge technology solutions that drive growth,
                        efficiency, and digital transformation across small and medium enterprises.
                    </Typography>
                </Container>
            </Box>

            {/* Company Story Section */}
            <Container maxWidth="lg" sx={{ py: 8 }}>
                <Grid container spacing={4} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <Typography
                            variant="h4"
                            component="h2"
                            sx={{ mb: 3, fontWeight: 600 }}
                        >
                            Our Journey
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Founded in 2022, LetsBug emerged from a deep understanding of the challenges
                            faced by Indian MSMEs in the digital landscape. We recognized that while
                            technology has immense potential, many small businesses struggle to leverage
                            it effectively.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Our team of experienced technologists and business strategists came together
                            with a singular vision: to create affordable, scalable, and intuitive software
                            solutions that can transform the way MSMEs operate.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img
                            src="https://placehold.co/600x400?text=Company+Story"
                            alt="LetsBug Team"
                            style={{
                                width: '100%',
                                borderRadius: '8px',
                                boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
                            }}
                        />
                    </Grid>
                </Grid>
            </Container>

            {/* Team Section */}
            <Box sx={{ backgroundColor: '#F3F4F6', py: 8 }}>
                <Container maxWidth="lg">
                    <Typography
                        variant="h4"
                        component="h2"
                        align="center"
                        sx={{ mb: 6, fontWeight: 600 }}
                    >
                        Meet Our Team
                    </Typography>
                    <Grid container spacing={4}>
                        {teamMembers.map((member, index) => (
                            <Grid item xs={12} sm={6} md={3} key={index}>
                                <Card
                                    elevation={3}
                                    sx={{
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        p: 3,
                                        textAlign: 'center'
                                    }}
                                >
                                    <Avatar
                                        src={member.avatar}
                                        sx={{
                                            width: 120,
                                            height: 120,
                                            mb: 2
                                        }}
                                    />
                                    <Typography
                                        variant="h6"
                                        component="h3"
                                        sx={{ fontWeight: 600 }}
                                    >
                                        {member.name}
                                    </Typography>
                                    <Typography
                                        variant="subtitle2"
                                        color="text.secondary"
                                        sx={{ mb: 2 }}
                                    >
                                        {member.role}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        {member.bio}
                                    </Typography>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>
        </>
    );
}