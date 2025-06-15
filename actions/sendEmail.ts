"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";


export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  // server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is missing in environment variables");
    return {
      error: "Server misconfiguration: Missing API key.",
    };
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  let data;
  // try {
  //   data = await resend.emails.send({
  //     from: "Contact Form <onboarding@resend.dev>",
  //     to: "abhinavgunda2829@gmail.com",
  //     subject: "Message from contact form",
  //     reply_to: senderEmail,
  //     react: React.createElement(ContactFormEmail, {
  //       message: message,
  //       senderEmail: senderEmail,
  //     }),
  //   });
  // } catch (error: unknown) {
  //   return {
  //     error: getErrorMessage(error),
  //   };
  // }
  // return {
  //   data,
  // };

  try {
    const res = await fetch("https://formspree.io/f/mqabbyzb", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: new URLSearchParams({
        email: senderEmail.toString(),
        message: message.toString(),
      }),
    });

    const result = await res.json();

    if (res.ok) {
      return { data: result };
    } else {
      return { error: result?.error || "Formspree error occurred." };
    }
  } catch (error) {
    return { error: "Failed to send message. Please try again later." };
  }
};
