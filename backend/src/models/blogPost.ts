import { relations } from 'drizzle-orm';
import {
    boolean,
    integer,
    pgTable,
    serial,
    text,
    timestamp,
    varchar
} from 'drizzle-orm/pg-core';
import { categories } from './category';
import { comments } from './comment';
import { blogPostTags } from './tag';
import { users } from './user';

export const BlogPostStatus = {
    DRAFT: 'draft',
    PUBLISHED: 'published',
    ARCHIVED: 'archived',
    SCHEDULED: 'scheduled'
} as const;

export const blogPosts = pgTable('blog_posts', {
    id: serial('id').primaryKey(),
    title: varchar('title', { length: 255 }).notNull(),
    slug: varchar('slug', { length: 255 }).unique().notNull(),
    content: text('content').notNull(),
    excerpt: text('excerpt'),
    authorId: integer('author_id').references(() => users.id),
    categoryId: integer('category_id').references(() => categories.id),
    featuredImage: varchar('featured_image', { length: 500 }),
    status: varchar('status', {
        length: 20,
        enum: Object.values(BlogPostStatus) as [string, ...string[]]
    }).default(BlogPostStatus.DRAFT).notNull(),
    metaTitle: varchar('meta_title', { length: 255 }),
    metaDescription: varchar('meta_description', { length: 500 }),
    isCommentEnabled: boolean('is_comment_enabled').default(true),
    viewCount: integer('view_count').default(0),
    publishedAt: timestamp('published_at'),
    scheduledFor: timestamp('scheduled_for'),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().notNull()
});

export const blogPostsRelations = relations(blogPosts, ({ one, many }) => ({
    author: one(users, {
        fields: [blogPosts.authorId],
        references: [users.id]
    }),
    category: one(categories, {
        fields: [blogPosts.categoryId],
        references: [categories.id]
    }),
    comments: many(comments),
    tags: many(blogPostTags)
}));
