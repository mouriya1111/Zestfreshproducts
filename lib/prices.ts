import { unstable_noStore as noStore } from "next/cache";
import { readFile } from "node:fs/promises";
import path from "node:path";
import type { MirchiPriceData } from "@/lib/price-types";

export async function getMirchiPrices(): Promise<MirchiPriceData> {
  noStore();
  const file = path.join(process.cwd(), "data", "mirchi-prices.json");
  const raw = await readFile(file, "utf8");
  return JSON.parse(raw) as MirchiPriceData;
}
