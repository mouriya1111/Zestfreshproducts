import Link from "next/link";
import { Building2, MapPin, PackageCheck, Store } from "lucide-react";
import { Badge, Card } from "@/components/ui";

const buyerGroups = [
  {
    title: "Hotels and restaurants",
    text: "Mirchi powder, haldi powder, coriander powder, garam masala, and chicken masala for regular kitchen use.",
    icon: Building2
  },
  {
    title: "Hostels and PG kitchens",
    text: "Bulk spice powder enquiries for daily cooking, mess kitchens, canteens, and food-service buyers.",
    icon: Store
  },
  {
    title: "Retailers and resellers",
    text: "Consumer pack and bulk pack options can be discussed based on product requirement and stock availability.",
    icon: PackageCheck
  }
];

export function BusinessSeoSection() {
  return (
    <section className="px-5 py-14 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <Badge className="border-orange-200 bg-orange-50 text-zestOrange">Bulk Spice Supplier</Badge>
            <h2 className="font-display mt-4 text-4xl font-black tracking-tight text-zinc-950 md:text-5xl">
              Spice powder supplier for hotels, hostels, restaurants, and bulk buyers.
            </h2>
            <p className="mt-5 text-lg leading-8 text-zinc-700">
              ZestFresh Products supports spice powder enquiries from Hyderabad, Telangana, Andhra Pradesh, and nearby bulk buyers looking for mirchi powder, haldi powder, coriander powder, garam masala, and chicken masala.
            </p>
            <p className="mt-4 text-base font-semibold leading-7 text-zinc-700">
              Share your product requirement, place, quantity, and preferred pack size. The ZestFresh team can respond with current availability, packaging options, dispatch support, and next steps.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link className="inline-flex items-center rounded-full bg-zestGreen px-5 py-3 text-sm font-black text-white shadow-lg shadow-green-900/20" href="/order">
                Send Bulk Enquiry
              </Link>
              <Link className="inline-flex items-center rounded-full border bg-white px-5 py-3 text-sm font-black text-zinc-950" href="/mirchi-powder">
                View Mirchi Powder
              </Link>
            </div>
          </div>

          <div className="grid gap-4">
            <Card className="p-5">
              <div className="flex gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-green-50 text-zestGreen">
                  <MapPin size={23} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-black text-zinc-950">Serving Hyderabad and nearby bulk buyers</h3>
                  <p className="mt-2 leading-7 text-zinc-600">
                    Enquiries are welcome from Telangana, Andhra Pradesh, commercial kitchens, retailers, distributors, canteens, and catering buyers.
                  </p>
                </div>
              </div>
            </Card>

            <div className="grid gap-4 md:grid-cols-3">
              {buyerGroups.map((item) => (
                <Card key={item.title} className="p-5">
                  <div className="grid h-11 w-11 place-items-center rounded-2xl bg-red-50 text-zestRed">
                    <item.icon size={22} aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-black text-zinc-950">{item.title}</h3>
                  <p className="mt-2 text-sm font-semibold leading-6 text-zinc-600">{item.text}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
