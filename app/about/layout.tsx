import { Metadata } from "next";


export const metadata: Metadata = {
  title: "About",
  description: "This is About Page",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
