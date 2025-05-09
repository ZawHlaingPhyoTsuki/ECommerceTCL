import Collections from "@/components/Products/filter/collections";
import FilterList from "@/components/Products/filter/item";
import { sorting } from "@/lib/constants";
import { Suspense } from "react";

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <div className="mx-auto flex max-w-(--breakpoint-2xl) flex-col gap-8 px-4 pb-4 text-black md:flex-row dark:text-white">
      <div className="order-first w-full flex-none md:max-w-[125px]">
        <Collections />
      </div>
      <div className="order-last min-h-screen w-full md:order-none">
        <Suspense fallback={null}>{children}</Suspense>
      </div>
      <div className="order-none flex-none md:order-last md:w-[125px] ">
        <FilterList list={sorting} title="Sort by" />
      </div>
    </div>
  );
}
