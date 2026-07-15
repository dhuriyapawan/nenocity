export function animateEntry(element) {
  if (!element) return;
  element.style.opacity = '0';
  element.style.transform = 'translateY(20px)';
}
