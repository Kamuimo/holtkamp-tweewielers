"use client";

import { useActionState, useEffect, useState } from "react";
import { submitContactForm } from "@/app/actions/contact";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { useSearchParams } from "next/navigation";

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContactForm, null);
  const searchParams = useSearchParams();
  const day = searchParams.get("day");

  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (day) {
      const dayMap: Record<string, string> = {
        Di: "Dinsdag",
        Wo: "Woensdag",
        Do: "Donderdag",
        Vr: "Vrijdag",
        Za: "Zaterdag"
      };
      const fullDay = dayMap[day] || day;
      setSubject("Proefrit inplannen");
      setMessage(`Ik wil graag een proefrit inplannen voor aankomende ${fullDay}.`);
    }
  }, [day]);

  useEffect(() => {
    if (state?.success) {
      toast.success(state.message);
      // Optional: reset form. We could use a ref to the form element.
      const form = document.getElementById("contact-form") as HTMLFormElement;
      if (form) form.reset();
      setSubject("");
      setMessage("");
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
        <Input 
          id="subject" 
          name="subject" 
          placeholder="Waar gaat uw bericht over?" 
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required 
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Bericht</Label>
        <Textarea 
          id="message" 
          name="message" 
          placeholder="Typ hier uw bericht of vraag..." 
          className="min-h-[150px]"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
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
