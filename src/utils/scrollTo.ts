/**
 * Smoothly scrolls to an element by its ID
 * @param elementId - The ID of the element to scroll to (without #)
 * @param offset - Optional offset from the top (useful for fixed headers)
 */
export function scrollTo(elementId: string, offset: number = 80): void {
  const element = document.getElementById(elementId);
  
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }
}
