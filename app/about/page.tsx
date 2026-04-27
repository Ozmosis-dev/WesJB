import type { Metadata } from "next";
import { AboutContent } from "./_content";

export const metadata: Metadata = {
  title: "About",
  description:
    "The journey of Wesley Johnson from a small town outside Dallas to Syracuse to almost a decade in the NBA, and now coaching out of New Orleans.",
};

export default function AboutPage() {
  return <AboutContent />;
}
