"use client";

import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import { useTranslation } from "@/hooks/useTranslation";

const ContactPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Breadcrumb
        pageName={t('contact.get_in_touch')}
        description={t('contact.short_title')}
      />
      <Contact />
    </>
  );
};

export default ContactPage;
