import {
    Box,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Chip,
    Container,
    Grid,
    Stack,
    Typography
} from '@mui/material';
import Head from 'next/head';
import Link from 'next/link';

// Placeholder data - replace with your actual API data
const blogPosts = [
    {
        id: '1',
        title: 'Understanding React Hooks',
        excerpt: 'A deep dive into the world of React Hooks and how they revolutionize state management.',
        author: 'John Doe',
        date: 'June 15, 2024',
        tags: ['React', 'Web Development'],
        imageUrl: '/api/placeholder/600/400'
    },
    {
        id: '2',
        title: 'Next.js 15 New Features',
        excerpt: 'Exploring the latest innovations in Next.js and how they improve web development.',
        author: 'Jane Smith',
        date: 'June 10, 2024',
        tags: ['Next.js', 'Frontend'],
        imageUrl: '/api/placeholder/600/400'
    },
    // Add more blog posts as needed
];

export default function Blogs() {
    return (
        <>
            <Head>
                <title>Blog | Your Site Name</title>
                <meta
                    name="description"
                    content="Explore insightful blog posts on web development, technology, and programming"
                />
                <meta
                    name="keywords"
                    content="blog, web development, programming, technology, tutorials"
                />
                <link rel="canonical" href="https://yourdomain.com/blogs" />
            </Head>

            <Container maxWidth="lg" sx={{ py: 4 }}>
                <Typography
                    variant="h3"
                    component="h1"
                    gutterBottom
                    sx={{
                        fontWeight: 700,
                        mb: 4,
                        textAlign: 'center'
                    }}
                >
                    Latest Blog Posts
                </Typography>

                <Grid container spacing={4}>
                    {blogPosts.map((post) => (
                        <Grid item xs={12} sm={6} md={4} key={post.id}>
                            <Card
                                elevation={3}
                                sx={{
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}
                            >
                                <Link href={`/blogs/${post.id}`} passHref>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="200"
                                            image={post.imageUrl}
                                            alt={post.title}
                                        />
                                        <CardContent>
                                            <Typography
                                                gutterBottom
                                                variant="h6"
                                                component="h2"
                                            >
                                                {post.title}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                color="text.secondary"
                                                sx={{ mb: 2 }}
                                            >
                                                {post.excerpt}
                                            </Typography>

                                            <Stack
                                                direction="row"
                                                spacing={1}
                                                sx={{ mb: 2 }}
                                            >
                                                {post.tags.map((tag) => (
                                                    <Chip
                                                        key={tag}
                                                        label={tag}
                                                        size="small"
                                                        color="primary"
                                                        variant="outlined"
                                                    />
                                                ))}
                                            </Stack>

                                            <Box
                                                sx={{
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    alignItems: 'center'
                                                }}
                                            >
                                                <Typography
                                                    variant="caption"
                                                    color="text.secondary"
                                                >
                                                    By {post.author}
                                                </Typography>
                                                <Typography
                                                    variant="caption"
                                                    color="text.secondary"
                                                >
                                                    {post.date}
                                                </Typography>
                                            </Box>
                                        </CardContent>
                                    </CardActionArea>
                                </Link>
                            </Card>
                        </Grid>
                    ))}
                </Grid>

                {blogPosts.length === 0 && (
                    <Box
                        sx={{
                            textAlign: 'center',
                            py: 4
                        }}
                    >
                        <Typography variant="h6">
                            No blog posts available
                        </Typography>
                    </Box>
                )}
            </Container>
        </>
    );
}