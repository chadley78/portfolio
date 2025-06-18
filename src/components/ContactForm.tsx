'use client'

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { submitContactForm } from '@/lib/actions';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { useEffect, useRef } from 'react';

const initialState = {
  error: null,
  success: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button 
      type="submit" 
      disabled={pending}
      className="w-full text-lg sm:text-xl md:text-2xl font-bold py-4 sm:py-6 bg-[#242424] text-white hover:bg-[#242424]/90 transition-colors"
    >
      {pending ? 'Submitting...' : 'Send Message'}
    </Button>
  );
}

export default function ContactForm() {
  const [state, formAction] = useActionState(submitContactForm, initialState);
  const formRef = useRef<HTMLFormElement>(null);
  
  useEffect(() => {
    if (state.success) {
      formRef.current?.reset();
    }
  }, [state.success])

  return (
    <form ref={formRef} action={formAction} className="space-y-6 sm:space-y-8 max-w-2xl mx-auto">
      <div>
        <Label htmlFor="name" className="text-lg sm:text-xl md:text-2xl font-bold text-[#242424] mb-2 block">
          Name
        </Label>
        <Input 
          id="name" 
          name="name" 
          type="text" 
          required 
          className="text-lg sm:text-xl md:text-2xl p-4 sm:p-6 border-2 border-[#242424]/20 focus:border-[#242424] transition-colors"
        />
      </div>
      <div>
        <Label htmlFor="email" className="text-lg sm:text-xl md:text-2xl font-bold text-[#242424] mb-2 block">
          Email
        </Label>
        <Input 
          id="email" 
          name="email" 
          type="email" 
          required 
          className="text-lg sm:text-xl md:text-2xl p-4 sm:p-6 border-2 border-[#242424]/20 focus:border-[#242424] transition-colors"
        />
      </div>
      <div>
        <Label htmlFor="message" className="text-lg sm:text-xl md:text-2xl font-bold text-[#242424] mb-2 block">
          Message
        </Label>
        <Textarea 
          id="message" 
          name="message" 
          required 
          className="text-lg sm:text-xl md:text-2xl p-4 sm:p-6 border-2 border-[#242424]/20 focus:border-[#242424] transition-colors min-h-[120px] sm:min-h-[160px]"
        />
      </div>
      <SubmitButton />
      {state.error && (
        <p className="text-red-500 text-lg sm:text-xl md:text-2xl font-bold text-center">
          {state.error}
        </p>
      )}
      {state.success && (
        <p className="text-green-500 text-lg sm:text-xl md:text-2xl font-bold text-center">
          {state.success}
        </p>
      )}
    </form>
  );
} 