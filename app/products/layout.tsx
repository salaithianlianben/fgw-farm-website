import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
  description: "FGW FARM CO., LTD"
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
