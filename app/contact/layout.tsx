import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "This is Contact Page",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
