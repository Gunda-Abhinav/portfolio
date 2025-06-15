import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type ContactFormEmailProps = {
  message: string;
  senderEmail: string;
};

export default function ContactFormEmail({
  message,
  senderEmail,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>📩 New message via Abhinav’s portfolio site</Preview>
      <Tailwind>
        <Body className="bg-[#f4f7f0] text-[#1e251d] font-sans">
          <Container className="max-w-lg mx-auto py-10">
            <Section className="bg-white border border-[#bcc4aa] rounded-xl px-8 py-6 shadow-md">
              <Heading className="text-xl font-bold text-[#414d36] mb-4 leading-snug">
                ✉️ New Contact Message
              </Heading>

              <Text className="text-sm mb-2 text-gray-700">
                You received a new message from your portfolio's contact form:
              </Text>

              <Section className="bg-[#f4f4f0] border border-[#d8ddcf] rounded-md p-4 text-sm text-gray-800 mb-4">
                {message}
              </Section>

              <Text className="text-sm text-gray-600">
                Sender's Email:{" "}
                <span className="text-[#2d3a27] font-medium">{senderEmail}</span>
              </Text>

              <Hr className="my-6 border-t border-[#dcecc9]" />

              <Text className="text-xs text-gray-400">
                This message was sent from your portfolio contact form. Please do not reply directly to this email.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
