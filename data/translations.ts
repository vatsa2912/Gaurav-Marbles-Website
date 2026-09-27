export type Language = "en" | "hi";

export interface Translations {
  nav: {
    home: string;
    about: string;
    products: string;
    collections: string;
    projects: string;
    calculator: string;
    catalogue: string;
    testimonials: string;
    faq: string;
    contact: string;
    getQuote: string;
    whatsapp: string;
    callNow: string;
  };
  hero: {
    headline: string;
    subheadline: string;
    exploreCollections: string;
    requestQuote: string;
    whatsappUs: string;
    viewShowroom: string;
  };
  trust: {
    premiumMaterials: string;
    premiumMaterialsDesc: string;
    wideRange: string;
    wideRangeDesc: string;
    personalAssistance: string;
    personalAssistanceDesc: string;
    localShowroom: string;
    localShowroomDesc: string;
  };
  categories: {
    sectionTitle: string;
    sectionSubtitle: string;
    marble: string;
    tiles: string;
    granite: string;
    sanitaryware: string;
    bathroomFittings: string;
    chemicals: string;
    otherProducts: string;
    explore: string;
  };
  products: {
    featuredTitle: string;
    featuredSubtitle: string;
    allProducts: string;
    searchPlaceholder: string;
    filterByCategory: string;
    filterByBrand: string;
    filterByFinish: string;
    filterByColor: string;
    filterByAvailability: string;
    sortBy: string;
    getPrice: string;
    viewDetails: string;
    enquireNow: string;
    priceOnRequest: string;
    inStock: string;
    availableOnOrder: string;
    clearFilters: string;
    noProductsFound: string;
    needHelpChoosing: string;
    talkToExpert: string;
    specifications: string;
    size: string;
    finish: string;
    material: string;
    brand: string;
    color: string;
    category: string;
    relatedProducts: string;
  };
  calculator: {
    title: string;
    subtitle: string;
    length: string;
    width: string;
    unitFeet: string;
    unitMeters: string;
    wastagePercentage: string;
    wastageRecommended: string;
    carpetArea: string;
    recommendedQuantity: string;
    tileEstimatorTitle: string;
    tileBoxEstimate: string;
    disclaimer: string;
    requestQuoteWithArea: string;
    reset: string;
  };
  quote: {
    title: string;
    subtitle: string;
    fullName: string;
    phone: string;
    emailOptional: string;
    selectedProduct: string;
    category: string;
    quantityRequirement: string;
    message: string;
    submitQuote: string;
    submitting: string;
    successTitle: string;
    successMessage: string;
    continueOnWhatsApp: string;
  };
  common: {
    call: string;
    whatsapp: string;
    email: string;
    address: string;
    openingHours: string;
    getDirections: string;
    demoNotice: string;
    viewAll: string;
    copyright: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: "Home",
      about: "About Us",
      products: "Products",
      collections: "Collections",
      projects: "Projects",
      calculator: "Area Calculator",
      catalogue: "Catalogue",
      testimonials: "Testimonials",
      faq: "FAQ",
      contact: "Contact",
      getQuote: "Get a Quote",
      whatsapp: "WhatsApp",
      callNow: "Call Now",
    },
    hero: {
      headline: "Timeless Stone. Beautiful Spaces.",
      subheadline:
        "Premium marble, tiles, granite, sanitaryware and interior solutions for homes and spaces that deserve a lasting impression.",
      exploreCollections: "Explore Collections",
      requestQuote: "Request a Quote",
      whatsappUs: "WhatsApp Us",
      viewShowroom: "Visit Our Showroom",
    },
    trust: {
      premiumMaterials: "Premium Materials",
      premiumMaterialsDesc: "Carefully curated stone, tiles & sanitaryware with exceptional finish.",
      wideRange: "Wide Product Range",
      wideRangeDesc: "Extensive collections across natural marble, vitrified tiles & fittings.",
      personalAssistance: "Personalized Assistance",
      personalAssistanceDesc: "Expert guidance for quantity estimation, matching, and selection.",
      localShowroom: "Trusted Local Showroom",
      localShowroomDesc: "Physical destination in Firozabad with authentic material inspection.",
    },
    categories: {
      sectionTitle: "Explore Our Collections",
      sectionSubtitle:
        "Discover a curated selection of architectural surfaces and bath fittings designed for enduring elegance.",
      marble: "Marble",
      tiles: "Tiles",
      granite: "Granite",
      sanitaryware: "Sanitaryware",
      bathroomFittings: "Bathroom Fittings",
      chemicals: "Chemicals & Adhesives",
      otherProducts: "Specialty Materials",
      explore: "Explore Collection",
    },
    products: {
      featuredTitle: "Featured Collections",
      featuredSubtitle: "Handpicked selections known for distinct character, durability, and craftsmanship.",
      allProducts: "All Products",
      searchPlaceholder: "Search products by name, stone or finish...",
      filterByCategory: "Category",
      filterByBrand: "Brand",
      filterByFinish: "Finish",
      filterByColor: "Colour",
      filterByAvailability: "Availability",
      sortBy: "Sort By",
      getPrice: "Get Price",
      viewDetails: "View Details",
      enquireNow: "Enquire Now",
      priceOnRequest: "Price available on request",
      inStock: "Available in Showroom",
      availableOnOrder: "Available on Order",
      clearFilters: "Clear All Filters",
      noProductsFound: "No products matched your criteria.",
      needHelpChoosing: "Need help choosing the right material for your space?",
      talkToExpert: "Speak with our showroom consultant for live recommendations and batch inspection.",
      specifications: "Technical Specifications",
      size: "Size / Dimensions",
      finish: "Surface Finish",
      material: "Material Composition",
      brand: "Brand / Origin",
      color: "Color Tone",
      category: "Category",
      relatedProducts: "You May Also Consider",
    },
    calculator: {
      title: "Marble & Tile Area Calculator",
      subtitle:
        "Calculate your required surface area with recommended cutting wastage allowance to plan your order accurately.",
      length: "Length",
      width: "Width",
      unitFeet: "Feet (sq ft)",
      unitMeters: "Meters (sq m)",
      wastagePercentage: "Cutting & Layout Wastage",
      wastageRecommended: "10% recommended for standard square layouts, 15% for diagonal/herringbone.",
      carpetArea: "Calculated Net Area",
      recommendedQuantity: "Recommended Quantity (incl. wastage)",
      tileEstimatorTitle: "Tile Box Estimator",
      tileBoxEstimate: "Estimated Box Count",
      disclaimer:
        "Note: Final material quantity may vary based on layout, cutting, installation and site conditions. Please confirm with a professional before purchase.",
      requestQuoteWithArea: "Request Quote with this Calculation",
      reset: "Reset Calculator",
    },
    quote: {
      title: "Request a Showroom Quotation",
      subtitle:
        "Share your material requirements and our team in Firozabad will prepare an estimate tailored to your project.",
      fullName: "Your Full Name *",
      phone: "Mobile Number (10 digits) *",
      emailOptional: "Email Address (Optional)",
      selectedProduct: "Product of Interest",
      category: "Material Category",
      quantityRequirement: "Approximate Quantity / Area / Requirements *",
      message: "Additional Project Details or Questions",
      submitQuote: "Submit Quote Request",
      submitting: "Submitting Request...",
      successTitle: "Thank You! Your Request Has Been Received",
      successMessage:
        "Our team will review your requirements and reach out to you promptly. For immediate assistance, feel free to connect directly via WhatsApp.",
      continueOnWhatsApp: "Continue on WhatsApp Now",
    },
    common: {
      call: "Call Us",
      whatsapp: "Chat on WhatsApp",
      email: "Email Showroom",
      address: "Showroom Address",
      openingHours: "Opening Hours",
      getDirections: "Get Directions on Google Maps",
      demoNotice: "Showroom catalogue display. Actual batch color, texture and quarry markings may vary.",
      viewAll: "View All",
      copyright: "Gaurav Marbles. All Rights Reserved.",
    },
  },
  hi: {
    nav: {
      home: "मुख्य पृष्ठ",
      about: "हमारे बारे में",
      products: "उत्पाद",
      collections: "कलेक्शन",
      projects: "प्रोजेक्ट्स",
      calculator: "एरिया कैलकुलेटर",
      catalogue: "कैटलॉग",
      testimonials: "समीक्षाएं",
      faq: "अक्सर पूछे जाने वाले प्रश्न",
      contact: "संपर्क करें",
      getQuote: "कोटेशन प्राप्त करें",
      whatsapp: "व्हाट्सएप",
      callNow: "कॉल करें",
    },
    hero: {
      headline: "सदाबहार पत्थर। खूबसूरत घर।",
      subheadline:
        "प्रीमियम मार्बल, टाइल्स, ग्रेनाइट, सेनेटरीवेयर और बाथरूम फिटिंग्स — आपके घर और प्रतिष्ठान को दें एक भव्य और टिकाऊ पहचान।",
      exploreCollections: "कलेक्शन देखें",
      requestQuote: "कोटेशन मांगें",
      whatsappUs: "व्हाट्सएप पर बात करें",
      viewShowroom: "शोरूम पधारें",
    },
    trust: {
      premiumMaterials: "प्रीमियम गुणवत्ता सामग्री",
      premiumMaterialsDesc: "उत्कृष्ट फिनिश और मजबूती के साथ चयनित मार्बल, टाइल्स व फिटिंग्स।",
      wideRange: "विशाल प्रोडक्ट रेंज",
      wideRangeDesc: "नेचुरल मार्बल से लेकर विट्रीफाइड टाइल्स और आधुनिक फिटिंग्स का विशाल संग्रह।",
      personalAssistance: "व्यक्तिगत मार्गदर्शन",
      personalAssistanceDesc: "क्षेत्रफल अनुमान और उचित पत्थर के चयन में विशेषज्ञ सलाह।",
      localShowroom: "विश्वसनीय स्थानीय शोरूम",
      localShowroomDesc: "फिरोजाबाद में प्रत्यक्ष शोरूम जहां आप स्वयं सामग्री देखकर परख सकते हैं।",
    },
    categories: {
      sectionTitle: "हमारे प्रमुख संग्रह",
      sectionSubtitle: "आधुनिक इंटीरियर और मजबूत निर्माण के लिए चयनित मार्बल, टाइल्स और सैनिटरीवेयर।",
      marble: "मार्बल",
      tiles: "टाइल्स",
      granite: "ग्रेनाइट",
      sanitaryware: "सेनेटरीवेयर",
      bathroomFittings: "बाथरूम फिटिंग्स",
      chemicals: "केमिकल्स एवं एडहेसिव",
      otherProducts: "अन्य सामग्री",
      explore: "संग्रह देखें",
    },
    products: {
      featuredTitle: "विशेष उत्पाद",
      featuredSubtitle: "अपनी सुंदरता, मजबूती और कारीगरी के लिए लोकप्रिय विशेष पत्थर और टाइल्स।",
      allProducts: "सभी उत्पाद",
      searchPlaceholder: "नाम, पत्थर या फिनिश से खोजें...",
      filterByCategory: "श्रेणी",
      filterByBrand: "ब्रांड",
      filterByFinish: "फिनिश",
      filterByColor: "रंग",
      filterByAvailability: "उपलब्धता",
      sortBy: "क्रमबद्ध करें",
      getPrice: "मूल्य जानें",
      viewDetails: "विवरण देखें",
      enquireNow: "पूछताछ करें",
      priceOnRequest: "मूल्य अनुरोध पर उपलब्ध",
      inStock: "शोरूम में उपलब्ध",
      availableOnOrder: "ऑर्डर पर उपलब्ध",
      clearFilters: "फ़िल्टर हटाएं",
      noProductsFound: "कोई उत्पाद नहीं मिला।",
      needHelpChoosing: "क्या सही सामग्री चुनने में सहायता चाहिए?",
      talkToExpert: "हमारे शोरूम सलाहकार से बात करें और अपने प्रोजेक्ट के लिए सही सुझाव पाएं।",
      specifications: "तकनीकी विवरण",
      size: "आकार / माप",
      finish: "सतह फिनिश",
      material: "सामग्री संरचना",
      brand: "ब्रांड / स्रोत",
      color: "रंग टोन",
      category: "श्रेणी",
      relatedProducts: "संबंधित विकल्प",
    },
    calculator: {
      title: "मार्बल एवं टाइल एरिया कैलकुलेटर",
      subtitle: "अपने फर्श या दीवार के क्षेत्रफल और कटिंग वेस्टेज की गणना करें ताकि सही मात्रा का अनुमान लगाया जा सके।",
      length: "लंबाई",
      width: "चौड़ाई",
      unitFeet: "फीट (वर्ग फीट)",
      unitMeters: "मीटर (वर्ग मीटर)",
      wastagePercentage: "कटिंग एवं लेआउट वेस्टेज",
      wastageRecommended: "सीधे लेआउट के लिए 10% और डायगोनल लेआउट के लिए 15% वेस्टेज की सिफारिश की जाती है।",
      carpetArea: "कुल नेट क्षेत्रफल",
      recommendedQuantity: "अनुशंसित कुल मात्रा (वेस्टेज सहित)",
      tileEstimatorTitle: "टाइल बॉक्स अनुमानक",
      tileBoxEstimate: "अनुमानित बॉक्स संख्या",
      disclaimer:
        "नोट: वास्तविक सामग्री की मात्रा साइट की स्थिति, कटिंग और कारीगर के तरीके पर निर्भर करती है। खरीदारी से पहले पेशेवर मिस्त्री/इंजीनियर से पुष्टि करें।",
      requestQuoteWithArea: "इस माप के साथ कोटेशन मांगें",
      reset: "रीसेट करें",
    },
    quote: {
      title: "शोरूम कोटेशन का अनुरोध करें",
      subtitle: "अपनी आवश्यकता साझा करें और फिरोजाबाद स्थित हमारी टीम आपको उचित अनुमान प्रदान करेगी।",
      fullName: "आपका पूरा नाम *",
      phone: "मोबाइल नंबर (10 अंक) *",
      emailOptional: "ईमेल (वैकल्पिक)",
      selectedProduct: "रुचि का उत्पाद",
      category: "सामग्री श्रेणी",
      quantityRequirement: "अनुमानित मात्रा / एरिया / विवरण *",
      message: "अतिरिक्त विवरण या प्रश्न",
      submitQuote: "कोटेशन अनुरोध भेजें",
      submitting: "अनुरोध भेजा जा रहा है...",
      successTitle: "धन्यवाद! आपका अनुरोध प्राप्त हो गया है",
      successMessage:
        "हमारी टीम आपकी आवश्यकताओं की समीक्षा कर शीघ्र ही आपसे संपर्क करेगी। तुरंत सहायता के लिए आप सीधे व्हाट्सएप पर भी बात कर सकते हैं।",
      continueOnWhatsApp: "व्हाट्सएप पर तुरंत जारी रखें",
    },
    common: {
      call: "कॉल करें",
      whatsapp: "व्हाट्सएप चैट",
      email: "ईमेल भेजें",
      address: "शोरूम का पता",
      openingHours: "खुलने का समय",
      getDirections: "गूगल मैप्स पर रास्ता देखें",
      demoNotice: "प्राकृतिक पत्थर होने के कारण वास्तविक बैच के रंग, नसों और शेड में हल्का अंतर हो सकता है।",
      viewAll: "सभी देखें",
      copyright: "गौरव मार्बल्स। सर्वाधिकार सुरक्षित।",
    },
  },
};
