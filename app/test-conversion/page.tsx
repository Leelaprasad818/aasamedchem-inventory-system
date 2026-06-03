import {
  convertWeightToGrams,
  convertVolumeToMl,
  formatINR,
} from "@/lib/conversions";

export default function TestPage() {
  return (
    <div className="p-8 space-y-4">

      <h1 className="text-3xl font-bold">
        Conversion Test
      </h1>

      <p>
        2 kg = {convertWeightToGrams(2, "kg")} g
      </p>

      <p>
        5 L = {convertVolumeToMl(5, "L")} mL
      </p>

      <p>
        Price = {formatINR(1250)}
      </p>

    </div>
  )
}