export const generatePriceOptions = (
  min: number,
  max: number,
  step: number
) => {
  return Array.from(
    { length: Math.floor((max - min) / step) + 1 },
    (_, i) => min + i * step
  );
};
