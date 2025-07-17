import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impact",
  description: "FGW FARM CO., LTD"
};

export default function ImpactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
