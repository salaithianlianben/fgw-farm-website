// components/CompanyStructuredData.js
export default function CompanyStructuredData() {
  const companyData = {
    "@context": "https://schema.org",
    "@type": "Corporation",
    "name": "FGW Farm Co., Ltd",
    "alternateName": "FGW Farm",
    "description": "Vietnamese company specializing in Black Soldier Fly farming and processing for sustainable agriculture solutions",
    "url": "https://fgw-farm.vercel.app",
    // "logo": "https://fgw-farm.vercel.app/logo.png",
    // "image": "https://fgwfarm.com/company-photo.jpg",
    "foundingDate": "2022",
    "foundingLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "VN"
      }
    },
    // "address": {
    //   "@type": "PostalAddress",
    //   "streetAddress": "Your Street Address",
    //   "addressLocality": "Your City",
    //   "addressRegion": "Your Province",
    //   "postalCode": "Your Postal Code",
    //   "addressCountry": "VN"
    // },
    // "contactPoint": [
    //   {
    //     "@type": "ContactPoint",
    //     "telephone": "+84-xxx-xxx-xxx",
    //     "contactType": "customer service",
    //     "email": "info@fgwfarm.com",
    //     "availableLanguage": ["English", "Vietnamese"]
    //   },
    //   {
    //     "@type": "ContactPoint",
    //     "telephone": "+84-xxx-xxx-xxx",
    //     "contactType": "sales",
    //     "email": "sales@fgwfarm.com"
    //   }
    // ],
    // "sameAs": [
    //   "https://linkedin.com/company/fgw-farm",
    //   "https://facebook.com/fgwfarm",
    //   "https://twitter.com/fgwfarm"
    // ],
    "industry": "Sustainable Agriculture",
    "naics": "111998",
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "minValue": 10,
      "maxValue": 50
    },
    "knowsAbout": [
      "Black Soldier Fly Larvae Oil",
      "Black Soldier Fly Larvae Fertilizer",
      "Dried Calcium Worms ",
      "Black Soldier Fly Larvae Eggs",
      "Black Soldier Fly Larvae Powder"
    ],
    // "makesOffer": [
    //   {
    //     "@type": "Offer",
    //     "itemOffered": {
    //       "@type": "Product",
    //       "name": "Black Soldier Fly Protein Animal Feed",
    //       "description": "High-protein animal feed produced from Black Soldier Fly larvae"
    //     },
    //     "category": "Animal Feed"
    //   },
    //   {
    //     "@type": "Offer",
    //     "itemOffered": {
    //       "@type": "Product",
    //       "name": "Organic Fertilizer",
    //       "description": "Premium organic fertilizer from BSF processing"
    //     },
    //     "category": "Fertilizer"
    //   },
    //   {
    //     "@type": "Offer",
    //     "itemOffered": {
    //       "@type": "Product",
    //       "name": "Bio-compost",
    //       "description": "High-quality bio-compost for sustainable agriculture"
    //     },
    //     "category": "Soil Amendment"
    //   }
    // ],
    "areaServed": [
      {
        "@type": "Country",
        "name": "Vietnam"
      },
      {
        "@type": "Country",
        "name": "Korea"
      }
    ],
    "founder": {
      "@type": "Person",
      "name": "Trương Thị Yến"
    },
    // "award": [
    //   "Sustainable Agriculture Innovation Award 2023", // Add actual awards
    //   "Green Technology Recognition 2024"
    // ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(companyData) }}
    />
  )
}