import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Conversion rate from USD to INR (1 USD = approximately 75 INR)
const USD_TO_INR_RATE = 75;

/**
 * Converts a price from USD to INR
 * @param priceUSD - Price in USD format (e.g. "$25")
 * @returns Price in INR format with ₹ symbol (e.g. "₹1,875")
 */
export function convertToINR(priceUSD: string): string {
  // Extract the numeric value from the USD price string
  const numericValue = parseFloat(priceUSD.replace(/[^0-9.]/g, ""));

  // Convert to INR
  const inrValue = numericValue * USD_TO_INR_RATE;

  // Format the INR price with the ₹ symbol and thousands separator
  return `₹${inrValue.toLocaleString("en-IN")}`;
}
