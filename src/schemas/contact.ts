import { z } from 'zod';

export const contactSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters long'),
  botcheck: z.string().max(0, 'Spam detected'), // Honeypot validation
});

export type ContactFormData = z.infer<typeof contactSchema>;
