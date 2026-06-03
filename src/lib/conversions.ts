export function convertWeightToGrams(
  value: number,
  unit: string
) {
  if (unit === "kg") return value * 1000
  return value
}

export function convertVolumeToMl(
  value: number,
  unit: string
) {
  if (unit === "L") return value * 1000
  return value
}

export function formatINR(value: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(value)
}