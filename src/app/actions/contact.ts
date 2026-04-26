"use server";

export async function submitContactForm(prevState: any, formData: FormData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const subject = formData.get("subject");
  const message = formData.get("message");

  // TODO: Replace this console.log with actual email sending logic (e.g., using Resend, Nodemailer, etc.)
  console.log("=== Nieuw Contactformulier Bericht ===");
  console.log("Naam:", name);
  console.log("E-mail:", email);
  console.log("Onderwerp:", subject);
  console.log("Bericht:", message);
  console.log("======================================");

  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return { success: true, message: "Uw bericht is succesvol verzonden. Wij nemen zo spoedig mogelijk contact met u op." };
}
