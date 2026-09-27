export interface FAQItem {
  id: string;
  question: string;
  hindiQuestion: string;
  answer: string;
  hindiAnswer: string;
  category: "General" | "Marble & Granite" | "Tiles" | "Sanitaryware & Fittings" | "Showroom & Visit";
}

export const FAQ_DATA: FAQItem[] = [
  {
    id: "faq-01",
    category: "General",
    question: "Where is Gaurav Marbles showroom located in Firozabad?",
    hindiQuestion: "फिरोजाबाद में गौरव मार्बल्स का शोरूम कहाँ स्थित है?",
    answer:
      "Gaurav Marbles is conveniently located at PURUSHOTTAM VIHAR, BAMBA, Bypass Rd, near THARPOOTHA, Jagdamba Nagar, Firozabad, Uttar Pradesh 283203. You can use our 'Get Directions' link or Google Maps location for step-by-step navigation.",
    hindiAnswer:
      "गौरव मार्बल्स पुरुषोत्तम विहार, बम्बा, बाईपास रोड, थरपूठा के पास, जगदम्बा नगर, फिरोजाबाद, उत्तर प्रदेश 283203 पर स्थित है। आप सीधे गूगल मैप्स लिंक द्वारा आसानी से शोरूम पहुँच सकते हैं।",
  },
  {
    id: "faq-02",
    category: "General",
    question: "What are your showroom opening hours?",
    hindiQuestion: "आपके शोरूम के खुलने का समय क्या है?",
    answer:
      "Our showroom is open daily from 9:00 AM to 8:00 PM, Monday through Sunday. Walk-ins are always welcome, and you can also call ahead to schedule personalized material guidance.",
    hindiAnswer:
      "हमारा शोरूम प्रतिदिन सुबह 9:00 बजे से रात 8:00 बजे तक (सोमवार से रविवार) खुला रहता है। आप सीधे पधार सकते हैं या पहले से कॉल कर सकते हैं।",
  },
  {
    id: "faq-03",
    category: "Marble & Granite",
    question: "Do you supply natural Indian and imported marble?",
    hindiQuestion: "क्या आप भारतीय एवं इम्पोर्टेड मार्बल उपलब्ध कराते हैं?",
    answer:
      "Yes, we offer a wide range of natural marbles including authentic Rajasthan Makrana White, Udaipur Green, and fine imported Italian Statuario varieties in varying lot thicknesses and finishes.",
    hindiAnswer:
      "हाँ, हमारे पास प्रसिद्ध मकराना व्हाइट, उदयपुर ग्रीन तथा चुनिंदा इम्पोर्टेड इटैलियन मार्बल के विभिन्न लॉट्स और फिनिश उपलब्ध हैं।",
  },
  {
    id: "faq-04",
    category: "Tiles",
    question: "What types and sizes of tiles do you stock?",
    hindiQuestion: "आप किस प्रकार और साइज की टाइल्स उपलब्ध कराते हैं?",
    answer:
      "We supply glazed vitrified tiles (GVT/PGVT), ceramic wall tiles, anti-skid bathroom floor tiles, and heavy-duty parking tiles. Popular formats include 600×1200mm (2×4 ft), 600×600mm (2×2 ft), and 300×600mm wall highlighters.",
    hindiAnswer:
      "हम जीवीटी/पीजीवीटी विट्रीफाइड फ्लोर टाइल्स, डिजाइनर वॉल टाइल्स, बाथरूम एंटी-स्किड टाइल्स और हैवी ड्यूटी पार्किंग टाइल्स उपलब्ध कराते हैं। इसमें 2×4 फीट, 2×2 फीट और वॉल साइज़ प्रमुख हैं।",
  },
  {
    id: "faq-05",
    category: "Marble & Granite",
    question: "Is granite recommended for kitchen countertops?",
    hindiQuestion: "क्या रसोई के काउंटरटॉप के लिए ग्रेनाइट सबसे उपयुक्त है?",
    answer:
      "Absolutely. Natural granite—especially dense varieties like Telephone Jet Black or Tan Brown—is impervious to knife scratches, acidic food spills, and hot cookware directly from the stove. It is the most durable surface for Indian cooking requirements.",
    hindiAnswer:
      "जी बिल्कुल। प्राकृतिक ग्रेनाइट (विशेषकर जेट ब्लैक) गर्म बर्तनों, तेल-मसालों के दाग और खरोंच के प्रति अत्यधिक प्रतिरोधी है, जो भारतीय रसोई के लिए सबसे टिकाऊ विकल्प है।",
  },
  {
    id: "faq-06",
    category: "Sanitaryware & Fittings",
    question: "Do you provide sanitaryware and bathroom fittings as well?",
    hindiQuestion: "क्या आप सेनेटरीवेयर और बाथरूम फिटिंग्स भी प्रदान करते हैं?",
    answer:
      "Yes, we carry a complete range of bathroom solutions including designer countertop wash basins, rimless wall-hung water closets, quarter-turn brass faucets, thermostatic shower systems, and stainless steel kitchen sinks.",
    hindiAnswer:
      "हाँ, हमारे यहाँ टेबल-टॉप वॉश बेसिन, रिमलेस वॉल-हंग टॉयलेट्स, ब्रास मिक्सर नल, रेन शॉवर्स और स्टेनलेस स्टील किचन सिंक का पूरा संग्रह उपलब्ध है।",
  },
  {
    id: "faq-07",
    category: "Showroom & Visit",
    question: "Can I request prices and quotations online or via WhatsApp?",
    hindiQuestion: "क्या मैं ऑनलाइन या व्हाट्सएप पर कोटेशन और रेट मांग सकता हूँ?",
    answer:
      "Yes! Because natural stone prices vary based on lot quality, thickness, and quantity, every product page features a 'Get Price' and 'WhatsApp Enquiry' button. You can also use our 'Request a Quote' form or Area Calculator for instant WhatsApp sharing.",
    hindiAnswer:
      "हाँ! प्राकृतिक पत्थर के रेट लॉट, साइज और मात्रा पर आधारित होते हैं। आप किसी भी उत्पाद पर 'Get Price' या व्हाट्सएप बटन दबाकर तुरंत रेट व विवरण प्राप्त कर सकते हैं।",
  },
  {
    id: "faq-08",
    category: "Showroom & Visit",
    question: "Do you help customers calculate material quantities and wastage?",
    hindiQuestion: "क्या आप ग्राहकों को आवश्यक माल की मात्रा और वेस्टेज निकालने में सहायता करते हैं?",
    answer:
      "Yes. You can use the interactive Area Calculator right on this website, or bring your floor plans to our Firozabad showroom where proprietor Gaurav Kumar Agrawal and our team will assist you with room-by-room calculations and cutting allowances.",
    hindiAnswer:
      "हाँ। आप हमारी वेबसाइट पर एरिया कैलकुलेटर का उपयोग कर सकते हैं या अपने घर का नक्शा लेकर हमारे फिरोजाबाद शोरूम पधार सकते हैं जहाँ हमारी टीम सही मात्रा का आंकलन करने में पूरी मदद करेगी।",
  },
  {
    id: "faq-09",
    category: "Tiles",
    question: "Do you supply tile adhesives, epoxy grouts, and cleaners?",
    hindiQuestion: "क्या आप टाइल एडहेसिव, एपॉक्सी ग्राउट और केमिकल भी बेचते हैं?",
    answer:
      "Yes, we supply IS-standard Type 1 and Type 2 polymer-modified tile adhesives, stain-proof epoxy joint grouts, stone penetrating sealers, and acid-free tile cleaners to ensure secure, long-lasting installation.",
    hindiAnswer:
      "हाँ, मजबूत और सीलन-मुक्त फिटिंग के लिए हमारे पास पॉलीमर टाइल एडहेसिव (Type 1 व Type 2), वाटरप्रूफ एपॉक्सी ग्राउट और स्टोन प्रोटेक्टिव सीलर्स उपलब्ध हैं।",
  },
  {
    id: "faq-10",
    category: "Showroom & Visit",
    question: "How can I check immediate product availability?",
    hindiQuestion: "माल तुरंत स्टॉक में है या नहीं, यह कैसे पता करें?",
    answer:
      "You can click the floating WhatsApp button or call us directly at 9897695715 with the product name or specifications. We will confirm batch availability and slab lots immediately.",
    hindiAnswer:
      "आप वेबसाइट पर दिए गए फ्लोटिंग व्हाट्सएप बटन पर क्लिक करके या सीधे 9897695715 पर कॉल करके उत्पाद की वर्तमान उपलब्धता की पुष्टि तुरंत कर सकते हैं।",
  },
];
