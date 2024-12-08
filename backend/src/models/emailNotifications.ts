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
import { users } from './user';

export const emailNotificationPreferences = pgTable('email_notification_preferences', {
    id: serial('id').primaryKey(),
    userId: integer('user_id').references(() => users.id).notNull(),
    notificationType: varchar('notification_type', {
        length: 50,
        enum: [
            'new_post_in_category',
            'new_post_by_author',
            'new_comment_on_post',
            'weekly_digest'
        ]
    }).notNull(),
    isEnabled: boolean('is_enabled').default(true).notNull(),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().notNull()
});

export const emailNotificationLogs = pgTable('email_notification_logs', {
    id: serial('id').primaryKey(),
    recipientId: integer('recipient_id').references(() => users.id).notNull(),
    relatedEntityType: varchar('related_entity_type', {
        length: 50,
        enum: ['blog_post', 'comment', 'category']
    }).notNull(),
    relatedEntityId: integer('related_entity_id').notNull(),
    notificationType: varchar('notification_type', {
        length: 50,
        enum: [
            'new_post_in_category',
            'new_post_by_author',
            'new_comment_on_post',
            'weekly_digest'
        ]
    }).notNull(),
    emailSubject: varchar('email_subject', { length: 255 }).notNull(),
    emailContent: text('email_content').notNull(),
    sentAt: timestamp('sent_at').defaultNow().notNull(),
    isRead: boolean('is_read').default(false).notNull()
});

export const emailNotificationPreferencesRelations = relations(
    emailNotificationPreferences,
    ({ one }) => ({
        user: one(users, {
            fields: [emailNotificationPreferences.userId],
            references: [users.id]
        })
    })
);

export const emailNotificationLogsRelations = relations(
    emailNotificationLogs,
    ({ one }) => ({
        recipient: one(users, {
            fields: [emailNotificationLogs.recipientId],
            references: [users.id]
        })
    })
);