export function isElementInViewport(el: HTMLElement): boolean {
  const rect = el.getBoundingClientRect();
  const { documentElement } = document;

  const viewPortHeight = window.innerHeight || (documentElement && documentElement.clientHeight);
  const viewPortWidth = window.innerWidth || (documentElement && documentElement.clientWidth);

  return (
    rect.top >= 0
    && rect.left >= 0
    && rect.bottom <= (viewPortHeight || 0)
    && rect.right <= (viewPortWidth || 0)
  );
}
