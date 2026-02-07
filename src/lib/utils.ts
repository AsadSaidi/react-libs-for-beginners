import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

//Util para combinar clases de tailwind
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
