export const getSiblings = (element: Element): HTMLCollection | null => {
  const parent = element.parentElement;
  return parent && parent.children;
};

export const getCurrentStarValue = (target: Element): number => {
  const siblings = getSiblings(target);

  return siblings
    ? [...siblings].findIndex((element) => element === target) + 1
    : -1;
};
