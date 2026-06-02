import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';
import { Button } from './ui/button';

interface MobileCarouselProps {
  children: React.ReactNode[];
  slidesToShow?: number;
}

export function MobileCarousel({ children, slidesToShow = 1.2 }: MobileCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    containScroll: 'trimSnaps',
    dragFree: true,
  });

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="relative">
      {/* Carousel Container */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-3">
          {children.map((child, index) => (
            <div
              key={index}
              className="flex-none"
              style={{
                width: slidesToShow === 1 ? '85%' : `calc(${100 / slidesToShow}% - 12px)`,
              }}
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      {canScrollPrev && (
        <Button
          variant="outline"
          size="icon"
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 h-8 w-8 rounded-full bg-amber-700 hover:bg-amber-800 backdrop-blur-sm border-2 border-amber-800 shadow-lg"
          onClick={scrollPrev}
        >
          <ChevronLeft className="h-4 w-4 text-white" />
        </Button>
      )}

      {canScrollNext && (
        <Button
          variant="outline"
          size="icon"
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 h-8 w-8 rounded-full bg-amber-700 hover:bg-amber-800 backdrop-blur-sm border-2 border-amber-800 shadow-lg"
          onClick={scrollNext}
        >
          <ChevronRight className="h-4 w-4 text-white" />
        </Button>
      )}
    </div>
  );
}