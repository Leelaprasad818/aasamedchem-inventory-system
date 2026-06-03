export function convertToBaseUnit(
  quantity: number,
  unit: string
) {
  switch (unit) {
    case "kg":
      return quantity * 1000;

    case "L":
      return quantity * 1000;

    default:
      return quantity;
  }
}

export function calculatePrice(
  quantity: number,
  unit: string,
  basePrice: number
) {
  const convertedQuantity =
    convertToBaseUnit(quantity, unit);

  return convertedQuantity * basePrice;
}