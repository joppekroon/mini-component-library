export const uniqueId = (() => {
  let counter = 0;
  return () => `id-${++counter}`;
})();