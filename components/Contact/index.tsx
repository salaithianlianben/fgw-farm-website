"use client";

import { useTranslation } from "@/hooks/useTranslation";
import { MailIcon, PhoneIcon } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const Contact = () => {
  const { t } = useTranslation();

  // Animation variants for the container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  // Animation variants for each contact card
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1] as const
      }
    }
  };

  // Hover animation for cards
  const cardHover = {
    y: -5,
    scale: 1.02,
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)",
    transition: {
      duration: 0.3,
      ease: [0.25, 0.1, 0.25, 1] as const
    }
  };

  // Animation for icons
  const iconHover = {
    scale: 1.1,
    rotate: 5,
    transition: {
      duration: 0.2,
      ease: [0.25, 0.1, 0.25, 1] as const
    }
  };

  // Animation for links
  const linkHover = {
    scale: 1.05,
    transition: {
      duration: 0.2,
      ease: [0.25, 0.1, 0.25, 1] as const
    }
  };

  const linkTap = {
    scale: 0.95
  };

  return (
    <section id="contact" className="mb-9 overflow-hidden py-9">
      <div className="container">
        <motion.div 
          className="grid grid-cols-1 gap-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div 
            className="flex h-[180px] flex-col justify-between rounded border p-4 shadow"
            variants={cardVariants}
            whileHover={cardHover}
          >
            <div className="flex">
              <motion.div 
                className="flex rounded border p-2"
                whileHover={iconHover}
              >
                <Image
                  src="/images/about/zalo_logo.webp"
                  alt="Zalo"
                  width={20}
                  height={20}
                  className="h-5 w-5"
                />
              </motion.div>
            </div>
            <div className="space-y-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <p>{t('contact.chat_to_support')}</p>
                <p className="text-sm text-gray-600">{t('contact.we_are_here_to_help')}</p>
              </motion.div>

              <motion.a
                href="https://zalo.me/0974371490"
                className="text-sm text-blue-500"
                whileHover={linkHover}
                whileTap={linkTap}
              >
                097 437 1490
              </motion.a>
            </div>
          </motion.div>

          <motion.div 
            className="flex h-[180px] flex-col justify-between rounded border p-4 shadow"
            variants={cardVariants}
            whileHover={cardHover}
          >
            <div className="flex">
              <motion.div 
                className="flex rounded border p-2"
                whileHover={iconHover}
              >
                <PhoneIcon className="h-5 w-5 text-gray-500" />
              </motion.div>
            </div>
            <div className="space-y-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <p>{t('contact.call_us')}</p>
                <p className="text-sm text-gray-600">Available 24/7 </p>
              </motion.div>

              <motion.a 
                href="tel:0379444450" 
                className="text-sm text-blue-500"
                whileHover={linkHover}
                whileTap={linkTap}
              >
                0379 4444 50
              </motion.a>
            </div>
          </motion.div>

          <motion.div 
            className="flex h-[180px] flex-col justify-between rounded border p-4 shadow"
            variants={cardVariants}
            whileHover={cardHover}
          >
            <div className="flex">
              <motion.div 
                className="flex rounded border p-2"
                whileHover={iconHover}
              >
                <MailIcon className="h-5 w-5" />
              </motion.div>
            </div>
            <div className="space-y-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <p>{t('contact.contact_to_us')}</p>
                <p className="text-sm text-gray-600">{t('contact.we_are_here_to_help')}</p>
              </motion.div>

              <motion.a
                href="mailto:fgw.farm@gmail.com"
                className="text-sm text-blue-500"
                whileHover={linkHover}
                whileTap={linkTap}
              >
                fgw.farm@gmail.com
              </motion.a>
            </div>
          </motion.div>

          <motion.div 
            className="flex h-[180px] flex-col justify-between rounded border p-4 shadow"
            variants={cardVariants}
            whileHover={cardHover}
          >
            <div className="flex">
              <motion.div 
                className="flex rounded border p-2"
                whileHover={iconHover}
              >
                <Image
                  src="/images/logo/facebook_icon.png"
                  alt="Facebook"
                  width={20}
                  height={20}
                  className="h-5 w-5"
                />
              </motion.div>
            </div>
            <div className="space-y-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <p>{t('contact.chat_via_facebook')}</p>
                <p className="text-sm text-gray-600">{t('contact.we_are_here_to_help')}</p>
              </motion.div>

              <motion.a
                href="https://www.facebook.com/FGWFARMnongtraisaucanxi"
                className="text-sm text-blue-500"
                whileHover={linkHover}
                whileTap={linkTap}
              >
                FGW FARM
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;