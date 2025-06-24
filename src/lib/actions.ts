'use server'

import { revalidatePath } from "next/cache";
import { createClient } from "./supabase/server";
import { Project } from "@/types";
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

type FormState = {
  error: string | null;
  success: string | null;
};

export async function getProjects(): Promise<Project[]> {
  const supabase = await createClient();
  const { data, error } = await supabase.from('projects').select('*');
  
  if (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
  
  return data as Project[] || [];
}

export async function submitContactForm(prevState: FormState, formData: FormData): Promise<FormState> {
  const supabase = await createClient();

  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;

  // Basic validation
  if (!name || !email || !message) {
    return { error: 'All fields are required.', success: null };
  }

  const { error } = await supabase
    .from('contacts')
    .insert([{ name, email, message }]);

  if (error) {
    console.error('Supabase error:', error);
    return { error: 'Failed to submit message. Please try again.', success: null };
  }

  // Send email notification
  try {
    await resend.emails.send({
      from: 'Portfolio Contact <noreply@yourdomain.com>',
      to: [process.env.CONTACT_EMAIL || 'your-email@example.com'],
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });
  } catch (emailError) {
    console.error('Email error:', emailError);
    // Don't fail the form submission if email fails
  }
  
  revalidatePath('/contact');
  return { success: 'Message sent successfully!', error: null };
} 