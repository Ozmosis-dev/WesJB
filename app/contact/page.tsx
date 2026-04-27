import type { Metadata } from "next";
import { ContactContent } from "./_content";

export const metadata: Metadata = {
  title: "Book the Floor",
  description:
    "Book a private session with Wesley Johnson in New Orleans, or apply for the elite track: sustained, custom-scoped programs for serious athletes.",
};

export default function ContactPage() {
  return <ContactContent />;
}
