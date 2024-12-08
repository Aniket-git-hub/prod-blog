import { relations } from 'drizzle-orm';
import {
    boolean,
    pgTable,
    serial,
    text,
    timestamp,
    varchar
} from 'drizzle-orm/pg-core';
import { blogPosts } from './blogPost';
import { comments } from './comment';
import { emailNotificationLogs, emailNotificationPreferences } from './emailNotifications';

// User Roles Enum
export const UserRole = {
    ADMIN: 'admin',
    AUTHOR: 'author',
    READER: 'reader'
} as const;

export const users = pgTable('users', {
    id: serial('id').primaryKey(),
    username: varchar('username', { length: 50 }).unique().notNull(),
    email: varchar('email', { length: 255 }).unique().notNull(),
    password: varchar('password', { length: 255 }).notNull(),
    role: varchar('role', {
        length: 20,
        enum: Object.values(UserRole) as [string, ...string[]]
    }).notNull().default(UserRole.READER),
    firstName: varchar('first_name', { length: 100 }),
    lastName: varchar('last_name', { length: 100 }),
    bio: text('bio'),
    profileImage: varchar('profile_image', { length: 500 }),
    isActive: boolean('is_active').default(true),
    lastLogin: timestamp('last_login'),
    resetPasswordToken: varchar('reset_password_token', { length: 255 }),
    resetPasswordExpires: timestamp('reset_password_expires'),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().notNull()
});

export const usersRelations = relations(users, ({ many }) => ({
    blogPosts: many(blogPosts),
    comments: many(comments),
    emailNotificationPreferences: many(emailNotificationPreferences),
    emailNotificationLogs: many(emailNotificationLogs)
}));