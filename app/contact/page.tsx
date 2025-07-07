import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | Free Next.js Template for Startup and SaaS",
  description: "This is Contact Page for Startup Nextjs Template",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Get in touch"
        description="If you have any questions or feedback, feel free to reach out using the contact form. We’ll respond as quickly as we can."
      />
      <Contact />
    </>
  );
};

export default ContactPage;
