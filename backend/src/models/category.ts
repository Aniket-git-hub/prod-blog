import { relations } from 'drizzle-orm';
import {
    integer,
    pgTable,
    serial,
    text,
    timestamp,
    varchar
} from 'drizzle-orm/pg-core';
import { blogPosts } from './blogPost';

export const categories = pgTable('categories', {
    id: serial('id').primaryKey(),
    name: varchar('name', { length: 100 }).unique().notNull(),
    slug: varchar('slug', { length: 100 }).unique().notNull(),
    description: text('description'),
    parentCategoryId: integer('parent_category_id'),
    metaTitle: varchar('meta_title', { length: 255 }),
    metaDescription: varchar('meta_description', { length: 500 }),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().notNull()
});

export const categoriesRelations = relations(categories, ({ many, one }) => ({
    blogPosts: many(blogPosts),
    parentCategory: one(categories, {
        fields: [categories.parentCategoryId],
        references: [categories.id]
    })
}));
