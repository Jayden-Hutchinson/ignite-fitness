import { useState, type ReactNode } from "react";

type Props = {
  items: ReactNode[];
};

// function CarouselButton({
//   icon,
//   onClick,
//   "aria-label": ariaLabel,
// }: {
//   icon: ReactNode;
//   onClick: () => void;
//   "aria-label": string;
// }) {
//   return (
//     <button
//       type="button"
//       onClick={onClick}
//       aria-label={ariaLabel}
//       className="absolute top-1/2 right-3 size-7 -translate-y-1/2 cursor-pointer rounded-full bg-orange-500 text-white md:size-10 md:text-xl"
//     >
//       {icon}
//     </button>
//   );
// }

function Carousel({ items }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function previous() {
    setCurrentIndex((index) => (index - 1 + items.length) % items.length);
  }

  function next() {
    setCurrentIndex((index) => (index + 1) % items.length);
  }

  if (items.length === 0) return null;

  return (
    <div className="relative w-full">
      {/* Slides */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="flex w-full shrink-0 justify-center px-2"
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <button
        type="button"
        onClick={previous}
        aria-label="Previous slide"
        className="absolute top-1/2 left-3 size-7 -translate-y-1/2 cursor-pointer rounded-full bg-orange-500 text-white md:size-10 md:text-xl"
      >
        &#10094;
      </button>
      {/* <CarouselButton
        icon={<span>&#10095;</span>}
        aria-label="Previous slide"
        onClick={previous}
      />
      <CarouselButton
        icon={<span>&#10094;</span>}
        aria-label="Next slide"
        onClick={next}
      /> */}

      <button
        type="button"
        onClick={next}
        aria-label="Next slide"
        className="absolute top-1/2 right-3 size-7 -translate-y-1/2 cursor-pointer rounded-full bg-orange-500 text-white md:size-10 md:text-xl"
      >
        &#10095;
      </button>

      {/* Pagination dots */}
      <div className="mt-8 flex justify-center gap-2">
        {items.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={currentIndex === index ? "true" : undefined}
            className={`h-2.5 w-2.5 rounded-full transition-colors ${
              currentIndex === index ? "bg-orange-500" : "bg-neutral-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
