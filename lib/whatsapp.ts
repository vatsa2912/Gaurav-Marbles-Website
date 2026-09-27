import { SITE_CONFIG } from "@/data/siteConfig";

/**
 * Encodes text and returns a direct WhatsApp click-to-chat URL
 */
export function getWhatsAppUrl(message: string): string {
  const encoded = encodeURIComponent(message.trim());
  return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encoded}`;
}

/**
 * Standard product inquiry WhatsApp message
 */
export function getProductWhatsAppUrl(productName: string, category?: string): string {
  const categoryNote = category ? ` (${category})` : "";
  const message = `Hello Gaurav Marbles, I am interested in ${productName}${categoryNote}. Please share the price, availability and details.`;
  return getWhatsAppUrl(message);
}

/**
 * General quotation request WhatsApp message
 */
export function getQuoteWhatsAppUrl(details?: {
  name?: string;
  category?: string;
  product?: string;
  quantity?: string;
}): string {
  if (!details || (!details.name && !details.product && !details.category)) {
    return getWhatsAppUrl("Hello Gaurav Marbles, I would like to request a quotation.");
  }

  let msg = `Hello Gaurav Marbles, I would like to request a quotation.\n`;
  if (details.name) msg += `Name: ${details.name}\n`;
  if (details.category) msg += `Category: ${details.category}\n`;
  if (details.product) msg += `Product: ${details.product}\n`;
  if (details.quantity) msg += `Requirement / Area: ${details.quantity}\n`;
  msg += `Please provide your best estimate and material guidance.`;

  return getWhatsAppUrl(msg);
}

/**
 * Area Calculator handoff to WhatsApp
 */
export function getCalculatorWhatsAppUrl(params: {
  length: number;
  width: number;
  unit: string;
  carpetArea: number;
  wastagePercent: number;
  totalArea: number;
  materialType?: string;
}): string {
  const material = params.materialType ? ` for ${params.materialType}` : "";
  const msg = `Hello Gaurav Marbles, I calculated an area requirement${material}:\n` +
    `- Dimensions: ${params.length} × ${params.width} ${params.unit}\n` +
    `- Carpet Area: ${params.carpetArea.toFixed(1)} ${params.unit}²\n` +
    `- Buffer (${params.wastagePercent}% wastage): ${params.totalArea.toFixed(1)} ${params.unit}²\n` +
    `Please assist me with suitable options and a quotation.`;

  return getWhatsAppUrl(msg);
}
