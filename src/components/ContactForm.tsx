"use client";

import { useActionState, useEffect } from "react";
import { submitContactForm } from "@/app/actions/contact";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContactForm, null);

  useEffect(() => {
    if (state?.success) {
      toast.success(state.message);
      // Optional: reset form. We could use a ref to the form element.
      const form = document.getElementById("contact-form") as HTMLFormElement;
      if (form) form.reset();
    }
  }, [state]);

  return (
    <form id="contact-form" action={formAction} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">Naam</Label>
          <Input id="name" name="name" placeholder="Uw volledige naam" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">E-mailadres</Label>
          <Input id="email" name="email" type="email" placeholder="uw@email.nl" required />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="subject">Onderwerp</Label>
        <Input id="subject" name="subject" placeholder="Waar gaat uw bericht over?" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Bericht</Label>
        <Textarea 
          id="message" 
          name="message" 
          placeholder="Typ hier uw bericht of vraag..." 
          className="min-h-[150px]"
          required 
        />
      </div>
      <Button type="submit" className="w-full sm:w-auto" disabled={isPending}>
        {isPending ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Verzenden...
          </>
        ) : (
          "Verstuur bericht"
        )}
      </Button>
    </form>
  );
}
