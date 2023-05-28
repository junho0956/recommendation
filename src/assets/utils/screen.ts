export const screen = {
  desktop: '(min-width:834px)',
  mobile: '(max-width:833px)'
}

export function isMobile() {
  if (typeof window === 'undefined') return false;
  if (window.innerWidth >= 834) return false;
  return true;
}
