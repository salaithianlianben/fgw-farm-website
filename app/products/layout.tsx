import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
  description: "This is Products Page for",
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
