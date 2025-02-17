import { z } from 'zod';

export const CHAPTER_MATERIAL_SCHEMA = z.object({
    url: z.string().url(),
});

const CHAPTER_SCHEMA = z.object({
    title: z.string().min(3, 'Title is required'),
    materials: z.array(CHAPTER_MATERIAL_SCHEMA).optional(),
});

const MODULE_SCHEMA = z.object({
    title: z.string().min(3, 'Title is required').max(255, 'Title is too long'),
    description: z.string().optional(),
    chapters: z.array(CHAPTER_SCHEMA).optional(),
});

const COURSE_SCHEMA = z.object({
    title: z.string().superRefine((value, ctx) => {
        if (value === "") {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Title is required",
          });
        } else if (value.length < 3) {
          ctx.addIssue({
            code: z.ZodIssueCode.too_small, 
            type: 'string',
            minimum: 3,
            inclusive: true,
            message: 'Title must be longer than 3 characters',
          });
        }
    }),
    description: z.string().optional(),
    category: z.string().optional(),
    introVideo: z.string().url().optional(),
    thumbnail: z.string().url().optional(),
    price: z.number().positive('Price must be a positive number').optional(),
    status: z.enum(['DRAFT', 'PUBLISHED']).default('DRAFT'),
    teachers: z.string().array().min(1, 'At least one teacher is required'),
    modules: z.array(MODULE_SCHEMA).optional(),
    chapters: z.array(CHAPTER_SCHEMA).optional(),

});

export default COURSE_SCHEMA;