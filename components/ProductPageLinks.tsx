import Link from "next/link";
import { ArrowRight, ChefHat, Flame, Soup, Sparkles } from "lucide-react";
import { Badge, Card } from "@/components/ui";
import { seoProductPages } from "@/lib/product-pages";

const iconMap = {
  "mirchi-powder": Flame,
  "haldi-powder": Sparkles,
  "coriander-powder": Soup,
  "garam-masala": ChefHat,
  "chicken-masala": ChefHat
};

export function ProductPageLinks() {
  return (
    <section className="px-5 py-14 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-3xl">
            <Badge className="border-green-200 bg-green-50 text-zestGreen">Product Pages</Badge>
            <h2 className="font-display mt-4 text-4xl font-black tracking-tight text-zinc-950 md:text-5xl">
              Explore ZestFresh spice products
            </h2>
            <p className="mt-4 text-lg leading-8 text-zinc-700">
              Open each product page for details, uses, pack forms, images, and enquiry support for hotels, hostels, restaurants, and bulk buyers.
            </p>
          </div>
          <Link
            href="/order"
            className="inline-flex items-center rounded-full bg-zestRed px-5 py-3 text-sm font-black text-white shadow-lg shadow-red-900/20 transition hover:-translate-y-1"
          >
            Enquire Now
            <ArrowRight size={17} className="ml-2" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {seoProductPages.map((page) => {
            const Icon = iconMap[page.slug as keyof typeof iconMap] ?? Sparkles;

            return (
              <Link key={page.slug} href={`/${page.slug}`} className="block">
                <Card className="h-full p-5 transition duration-300 hover:-translate-y-1 hover:shadow-premium">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-green-50 text-zestGreen">
                    <Icon size={23} aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-black text-zinc-950">{page.title}</h3>
                  <p className="mt-3 text-sm font-semibold leading-6 text-zinc-600">{page.buyerLine}</p>
                  <span className="mt-5 inline-flex items-center text-sm font-black text-zestRed">
                    Open page
                    <ArrowRight size={16} className="ml-2" aria-hidden="true" />
                  </span>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
