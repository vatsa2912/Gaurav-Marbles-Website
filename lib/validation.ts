export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

export function validatePhone(phone: string): boolean {
  // Accepts standard 10-digit Indian numbers, optional +91 or leading 0
  const cleaned = phone.replace(/[\s\-()]/g, "");
  return /^(\+91|91|0)?[6-9]\d{9}$/.test(cleaned);
}

export function validateEmail(email: string): boolean {
  if (!email.trim()) return true; // Optional field
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

export function validateQuoteForm(data: {
  name: string;
  phone: string;
  email?: string;
  message?: string;
}): ValidationResult {
  const errors: Record<string, string> = {};

  if (!data.name || data.name.trim().length < 2) {
    errors.name = "Please enter your full name.";
  }

  if (!data.phone || !validatePhone(data.phone)) {
    errors.phone = "Please enter a valid 10-digit Indian phone number.";
  }

  if (data.email && !validateEmail(data.email)) {
    errors.email = "Please enter a valid email address.";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
