"use client";

import { useTranslation } from "@/hooks/useTranslation";
import { MailIcon, PhoneIcon } from "lucide-react";

import Image from "next/image";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <section id="contact" className="mb-9 overflow-hidden py-9">
      <div className="container">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
          <div className="flex h-[180px] flex-col justify-between rounded border p-4 shadow">
            <div className="flex">
              <div className="flex rounded border p-2">
                <Image
                  src="/images/about/zalo_logo.webp"
                  alt="Zalo"
                  width={20}
                  height={20}
                  className="h-5 w-5"
                />
              </div>
            </div>
            <div className="space-y-2">
              <div>
                <p>{t('contact.chat_to_support')}</p>
                <p className="text-sm text-gray-600">{t('contact.we_are_here_to_help')}</p>
              </div>

              <a
                href="https://zalo.me/0974371490"
                className="text-sm text-blue-500"
              >
                097 437 1490
              </a>
            </div>
          </div>

          <div className="flex h-[180px] flex-col justify-between rounded border p-4 shadow">
            <div className="flex">
              <div className="flex rounded border p-2">
                <PhoneIcon className="h-5 w-5 text-gray-500" />
              </div>
            </div>
            <div className="space-y-2">
              <div>
                <p>{t('contact.call_us')}</p>
                <p className="text-sm text-gray-600">Available 24/7 </p>
              </div>

              <a href="tel:0379444450" className="text-sm text-blue-500">
                0379 4444 50
              </a>
            </div>
          </div>

          <div className="flex h-[180px] flex-col justify-between rounded border p-4 shadow">
            <div className="flex">
              <div className="flex rounded border p-2">
                <MailIcon className="h-5 w-5" />
              </div>
            </div>
            <div className="space-y-2">
              <div>
                <p>{t('contact.contact_to_us')}</p>
                <p className="text-sm text-gray-600">{t('contact.we_are_here_to_help')}</p>
              </div>

              <a
                href="mailto:fgw.farm@gmail.com"
                className="text-sm text-blue-500"
              >
                fgw.farm@gmail.com
              </a>
            </div>
          </div>

          <div className="flex h-[180px] flex-col justify-between rounded border p-4 shadow">
            <div className="flex">
              <div className="flex rounded border p-2">
                <Image
                  src="/images/logo/facebook_icon.png"
                  alt="Zalo"
                  width={20}
                  height={20}
                  className="h-5 w-5"
                />
              </div>
            </div>
            <div className="space-y-2">
              <div>
                <p>{t('contact.chat_via_facebook')}</p>
                <p className="text-sm text-gray-600">{t('contact.we_are_here_to_help')}</p>
              </div>

              <a
                href="https://www.facebook.com/FGWFARMnongtraisaucanxi"
                className="text-sm text-blue-500"
              >
                FGW FARM
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
