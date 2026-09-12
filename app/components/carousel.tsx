"use client";

import { Carousel } from "@material-tailwind/react";
import { usePageContext } from "../context/page-context";

const CarouselAny = Carousel as any;

interface CarouselCustomNavigationProps<T extends object> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

export default function CarouselCustomNavigation<T extends object>({
  items,
  renderItem,
}: CarouselCustomNavigationProps<T>) {

  const { currentPage } = usePageContext();

  return (
    <CarouselAny
      className="rounded-xl h-[400px] md:h-[500px] lg:h-[600px]"
      navigation={({
        setActiveIndex,
        activeIndex,
        length,
      }: {
        setActiveIndex: (index: number) => void;
        activeIndex: number;
        length: number;
      }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_: unknown, i: number) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-[#46667a]" : "w-4 bg-[#46667a]/40"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      {items.map((item, i) => (
        <div key={i} className="h-full w-full flex items-center justify-center p-8">
          {renderItem(item)}
        </div>
      ))}
    </CarouselAny>
  );
}