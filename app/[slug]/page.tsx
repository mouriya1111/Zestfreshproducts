import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Badge } from "@/components/ui";
import { formatCurrency } from "@/lib/price-types";
import { getMirchiPrices } from "@/lib/prices";
import { getProductsForPage, getSeoProductPage, seoProductPages } from "@/lib/product-pages";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return seoProductPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getSeoProductPage(slug);

  if (!page) {
    return {};
  }

  return {
    title: `${page.title} Supplier | ZestFresh Products`,
    description: page.description,
    keywords: page.keywords,
    alternates: {
      canonical: `https://zestfreshproducts.in/${page.slug}`
    },
    openGraph: {
      title: `${page.title} | ZestFresh Products`,
      description: page.description,
      url: `https://zestfreshproducts.in/${page.slug}`,
      type: "website"
    }
  };
}

export default async function ProductSeoPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getSeoProductPage(slug);

  if (!page) {
    notFound();
  }

  const data = await getMirchiPrices();
  const products = getProductsForPage(data, page);
  const mainProduct = products[0];

  if (!mainProduct) {
    notFound();
  }

  const enquiryHref = `/order?product=${encodeURIComponent(mainProduct.variety)}`;

  return (
    <main>
      <Navbar />
      <section className="grain">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Badge className="bg-green-50 text-zestGreen">ZestFresh Products</Badge>
            <h1 className="font-display mt-5 text-5xl font-black leading-tight text-zinc-950 md:text-7xl">
              {page.searchTitle}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-700">{page.description}</p>
            <p className="mt-3 max-w-2xl text-base font-semibold leading-7 text-zinc-700">{page.buyerLine}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link className="bg-zestGreen text-white" href={enquiryHref}>
                Enquire Now
              </Link>
              <Link className="bg-white text-zinc-950 border" href="/#products">
                View All Products
              </Link>
            </div>
          </div>

          <div className="shadow-premium overflow-hidden rounded-[2rem] bg-white p-5">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.25rem] bg-orange-50">
              <Image src={mainProduct.image} alt={`${page.title} product image`} fill priority className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <Badge className="bg-red-50 text-zestRed">Product details</Badge>
            <h2 className="font-display mt-4 text-4xl font-black tracking-tight text-zinc-950">Available {page.title} options</h2>
            <p className="mt-4 text-lg leading-8 text-zinc-700">
              Choose from available pack forms and send an enquiry for current supply, packaging, delivery, and bulk quantity support.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {products.map((product) => (
              <article key={product.id} className="overflow-hidden rounded-[1.5rem] border bg-white shadow-soft">
                <div className="relative aspect-[4/3] bg-zinc-50">
                  <Image src={product.image} alt={`${product.variety} ${page.title}`} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h3 className="font-display text-2xl font-black text-zinc-950">{product.variety}</h3>
                    <Badge className="bg-green-50 text-zestGreen">{product.availability}</Badge>
                  </div>
                  <p className="mt-3 leading-7 text-zinc-700">{product.description}</p>
                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-xl bg-zinc-50 p-4">
                      <p className="text-xs font-bold uppercase text-zinc-500">Pack sizes</p>
                      <p className="mt-1 font-black text-zinc-950">{product.forms.join(", ")}</p>
                    </div>
                    <div className="rounded-xl bg-zinc-50 p-4">
                      <p className="text-xs font-bold uppercase text-zinc-500">Indicative rate</p>
                      <p className="mt-1 font-black text-zinc-950">{formatCurrency(product.wholesalePrice, data.currency)} / {product.unit}</p>
                    </div>
                  </div>
                  <div className="mt-5">
                    <p className="text-xs font-bold uppercase text-zinc-500">Common uses</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {product.uses.map((use) => (
                        <span key={use} className="rounded-full bg-green-50 px-3 py-1 text-sm font-bold text-zestGreen">
                          {use}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Link className="mt-6 bg-zestRed text-white" href={`/order?product=${encodeURIComponent(product.variety)}`}>
                    Enquire Now
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl">
          <Badge className="bg-orange-50 text-zestOrange">Bulk buyers</Badge>
          <h2 className="font-display mt-4 text-4xl font-black tracking-tight text-zinc-950">For hotels, hostels, restaurants, and retailers</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {["Bulk quantity support", "Food-service friendly packing", "Fast enquiry response"].map((item) => (
              <div key={item} className="rounded-[1.25rem] border bg-zinc-50 p-6">
                <h3 className="font-display text-xl font-black text-zinc-950">{item}</h3>
                <p className="mt-2 leading-7 text-zinc-700">
                  Share your requirement and ZestFresh will confirm supply, packaging, delivery, and available options.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer company={data.company} />
    </main>
  );
}
