import {
    Avatar,
    Box,
    Chip,
    Container,
    Divider,
    Stack,
    Typography
} from '@mui/material';
import Head from 'next/head';
import Image from 'next/image';

export default function BlogPost({ params }) {
    // Simulated blog post data - replace with your actual API fetch
    const blogPost = {
        id: params.slug,
        title: 'Understanding React Hooks: A Comprehensive Guide',
        content: `
      React Hooks revolutionized the way we write React components by allowing functional components to use state and other React features without writing a class.

      ## What are React Hooks?

      React Hooks are functions that let you use state and other React features in functional components. Before Hooks, you needed to convert a functional component to a class component to use state or lifecycle methods.

      ### Key Hooks

      1. **useState**: Allows you to add state to functional components
      2. **useEffect**: Handles side effects in components
      3. **useContext**: Simplifies context consumption
      4. **useReducer**: More complex state management
      
      ## Example of useState

      \`\`\`javascript
      const [count, setCount] = useState(0);
      \`\`\`

      Hooks have made React development more straightforward and readable.
    `,
        author: {
            name: 'John Doe',
            avatar: '/api/placeholder/100/100',
            bio: 'Senior React Developer and Technical Writer'
        },
        publishedAt: 'June 15, 2024',
        readTime: '5 min read',
        tags: ['React', 'Web Development', 'JavaScript'],
        featuredImage: '/api/placeholder/1200/600'
    };

    return (
        <>
            <Head>
                <title>{blogPost.title} | Your Blog Name</title>
                <meta
                    name="description"
                    content={`${blogPost.title} - ${blogPost.content.slice(0, 160)}...`}
                />
                <meta
                    name="keywords"
                    content={blogPost.tags.join(', ')}
                />
                <link
                    rel="canonical"
                    href={`https://yourdomain.com/blogs/${params.slug}`}
                />
            </Head>

            <Container maxWidth="md" sx={{ py: 4 }}>
                {/* Blog Post Header */}
                <Typography
                    variant="h3"
                    component="h1"
                    gutterBottom
                    sx={{
                        fontWeight: 700,
                        mb: 3
                    }}
                >
                    {blogPost.title}
                </Typography>

                {/* Metadata */}
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        mb: 3
                    }}
                >
                    <Stack
                        direction="row"
                        spacing={2}
                        alignItems="center"
                    >
                        <Avatar
                            src={blogPost.author.avatar}
                            alt={blogPost.author.name}
                        />
                        <Box>
                            <Typography variant="subtitle2">
                                {blogPost.author.name}
                            </Typography>
                            <Typography
                                variant="caption"
                                color="text.secondary"
                            >
                                {blogPost.publishedAt} · {blogPost.readTime}
                            </Typography>
                        </Box>
                    </Stack>

                    <Stack
                        direction="row"
                        spacing={1}
                    >
                        {blogPost.tags.map((tag) => (
                            <Chip
                                key={tag}
                                label={tag}
                                size="small"
                                color="primary"
                                variant="outlined"
                            />
                        ))}
                    </Stack>
                </Box>

                {/* Featured Image */}
                <Box
                    sx={{
                        position: 'relative',
                        width: '100%',
                        height: { xs: 250, sm: 400 },
                        mb: 4
                    }}
                >
                    <Image
                        src={blogPost.featuredImage}
                        alt={blogPost.title}
                        fill
                        style={{
                            objectFit: 'cover',
                            borderRadius: '8px'
                        }}
                    />
                </Box>

                {/* Blog Content */}
                <Box
                    sx={{
                        '& h2': {
                            mt: 3,
                            mb: 2,
                            fontWeight: 600
                        },
                        '& h3': {
                            mt: 2,
                            mb: 1,
                            fontWeight: 500
                        },
                        '& p': {
                            mb: 2,
                            lineHeight: 1.6
                        },
                        '& pre': {
                            backgroundColor: '#f4f4f4',
                            padding: 2,
                            borderRadius: 2,
                            overflowX: 'auto'
                        }
                    }}
                >
                    {/* You'd typically parse markdown here */}
                    {blogPost.content.split('\n').map((paragraph, index) => (
                        <Typography
                            key={index}
                            variant="body1"
                            paragraph
                        >
                            {paragraph}
                        </Typography>
                    ))}
                </Box>

                <Divider sx={{ my: 4 }} />

                {/* Author Bio */}
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 3
                    }}
                >
                    <Avatar
                        src={blogPost.author.avatar}
                        alt={blogPost.author.name}
                        sx={{ width: 100, height: 100 }}
                    />
                    <Box>
                        <Typography variant="h6">
                            {blogPost.author.name}
                        </Typography>
                        <Typography
                            variant="body2"
                            color="text.secondary"
                        >
                            {blogPost.author.bio}
                        </Typography>
                    </Box>
                </Box>
            </Container>
        </>
    );
}