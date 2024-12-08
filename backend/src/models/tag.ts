import { relations } from 'drizzle-orm';
import {
    integer,
    pgTable,
    primaryKey,
    serial,
    varchar
} from 'drizzle-orm/pg-core';
import { blogPosts } from './blogPost';

export const tags = pgTable('tags', {
    id: serial('id').primaryKey(),
    name: varchar('name', { length: 50 }).unique().notNull(),
    slug: varchar('slug', { length: 50 }).unique().notNull()
});

export const blogPostTags = pgTable('blog_post_tags', {
    blogPostId: integer('blog_post_id').references(() => blogPosts.id),
    tagId: integer('tag_id').references(() => tags.id)
}, (t) => ({
    pk: primaryKey({ columns: [t.blogPostId, t.tagId] })
}));

export const tagsRelations = relations(tags, ({ many }) => ({
    blogPosts: many(blogPostTags)
}));