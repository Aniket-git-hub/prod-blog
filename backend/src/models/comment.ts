import { relations } from 'drizzle-orm';
import {
    boolean,
    integer,
    pgTable,
    serial,
    text,
    timestamp
} from 'drizzle-orm/pg-core';
import { blogPosts } from './blogPost';
import { users } from './user';

// Define comments table
export const comments = pgTable('comments', {
    id: serial('id').primaryKey(),
    blogPostId: integer('blog_post_id').references(() => blogPosts.id),
    userId: integer('user_id').references(() => users.id),
    // Use `integer` here but skip referencing `comments` initially
    parentCommentId: integer('parent_comment_id'),
    content: text('content').notNull(),
    isApproved: boolean('is_approved').default(false),
    isSpam: boolean('is_spam').default(false),
    ipAddress: text('ip_address'),
    userAgent: text('user_agent'),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().notNull()
});

// Define comments relations
export const commentsRelations = relations(comments, ({ one }) => ({
    blogPost: one(blogPosts, {
        fields: [comments.blogPostId],
        references: [blogPosts.id]
    }),
    user: one(users, {
        fields: [comments.userId],
        references: [users.id]
    }),
    // Add the self-referencing relation after comments is defined
    parentComment: one(comments, {
        fields: [comments.parentCommentId],
        references: [comments.id]
    })
}));
