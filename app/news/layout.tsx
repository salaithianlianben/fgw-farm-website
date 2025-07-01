import { Metadata } from "next";

export const metadata: Metadata = {
  title: "News",
  description: "This is News Page for",
};

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
