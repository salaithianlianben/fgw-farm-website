import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "This is Contact Page",
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
