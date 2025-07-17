import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technology",
  description: "FGW FARM CO., LTD"
};

export default function TechnologyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
