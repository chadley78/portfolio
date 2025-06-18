'use server'

import { revalidatePath } from "next/cache";
import { createClient } from "./supabase/server";

type FormState = {
  error: string | null;
  success: string | null;
};

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
  
  revalidatePath('/contact');
  return { success: 'Message sent successfully!', error: null };
} 