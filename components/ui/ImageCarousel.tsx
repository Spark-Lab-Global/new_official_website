import aImage from "@/assets/a3/a.png";
import bImage from "@/assets/a3/b.png";
import cImage from "@/assets/a3/c.png";
import dImage from "@/assets/a3/d.png";
import { useEffect, useRef, useState } from "preact/hooks";

const CONFIG = {
  IMAGE_HEIGHT: 500,
  AUTO_SCROLL_SPEED: 8,
  BORDER_WIDTH: 4,
  BORDER_COLOR: "#3A3A3A",
} as const;

const DEFAULT_IMAGES = [aImage, bImage, cImage, dImage] as const;

interface ImageData {
  src: string;
  width?: number;
  height?: number;
  format?: string;
}

interface ImageCarouselProps {
  images?: ImageData[];
}

interface DragState {
  x: number;
  scrollX: number;
}

const useCarousel = (images: ImageData[]) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollX, setScrollX] = useState(0);
  const [imageWidths, setImageWidths] = useState<number[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState<DragState>({ x: 0, scrollX: 0 });
  const autoScrollRef = useRef<ReturnType<typeof setInterval>>();

  const totalWidth = imageWidths.reduce((sum, width) => sum + width, 0);

  useEffect(() => {
    const loadImageDimensions = async () => {
      const widths = await Promise.all(
        images.map(
          (image) =>
            new Promise<number>((resolve) => {
              const img = new Image();
              img.onload = () => {
                const aspectRatio = img.width / img.height;
                resolve(CONFIG.IMAGE_HEIGHT * aspectRatio);
              };
              img.src = image.src;
            }),
        ),
      );
      setImageWidths(widths);
    };

    loadImageDimensions();
  }, [images]);

  const handleDragStart = (clientX: number) => {
    setIsDragging(true);
    setDragStart({ x: clientX, scrollX });
  };

  const handleDragMove = (clientX: number) => {
    if (!isDragging) return;

    const deltaX = dragStart.x - clientX;
    let newScrollX = dragStart.scrollX + deltaX;

    if (newScrollX < 0) newScrollX = totalWidth + newScrollX;
    if (newScrollX >= totalWidth) newScrollX = newScrollX - totalWidth;

    setScrollX(newScrollX);
  };

  const handleDragEnd = () => setIsDragging(false);

  useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (e: MouseEvent) => handleDragMove(e.clientX);
    const handleTouchMove = (e: TouchEvent) => {
      handleDragMove(e.touches[0].clientX);
      e.preventDefault();
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleDragEnd);
    document.addEventListener("touchmove", handleTouchMove, { passive: false });
    document.addEventListener("touchend", handleDragEnd);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleDragEnd);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleDragEnd);
    };
  }, [isDragging, dragStart, scrollX, totalWidth]);

  useEffect(() => {
    if (!isDragging && totalWidth > 0) {
      autoScrollRef.current = setInterval(() => {
        setScrollX((prev) => (prev + 1 >= totalWidth ? 0 : prev + 1));
      }, CONFIG.AUTO_SCROLL_SPEED);
    } else {
      clearInterval(autoScrollRef.current);
    }

    return () => clearInterval(autoScrollRef.current);
  }, [isDragging, totalWidth]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.style.transform = `translateX(-${scrollX}px)`;
    }
  }, [scrollX]);

  return {
    scrollRef,
    imageWidths,
    totalWidth,
    handleDragStart,
  };
};

export const ImageCarousel = ({ images }: ImageCarouselProps) => {
  const imagesToUse: ImageData[] =
    images || DEFAULT_IMAGES.map((img) => ({ src: img.src }));
  const { scrollRef, imageWidths, totalWidth, handleDragStart } =
    useCarousel(imagesToUse);

  const renderImages = (isDuplicate = false) =>
    imagesToUse.map((image, index) => (
      <img
        key={`${isDuplicate ? "dup-" : ""}${index}`}
        src={image.src}
        alt={`Image ${index + 1}${isDuplicate ? " duplicate" : ""}`}
        className="h-[500px] flex-shrink-0 object-cover object-center"
        style={{ width: `${imageWidths[index]}px` }}
        draggable={false}
      />
    ));

  return (
    <div
      className="relative h-[500px] cursor-grab overflow-hidden border-4 border-[#3A3A3A] select-none active:cursor-grabbing"
      onMouseDown={(e) => {
        handleDragStart(e.clientX);
        e.preventDefault();
      }}
      onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
    >
      <div
        ref={scrollRef}
        className="flex h-full transition-none"
        style={{ width: `${totalWidth * 2}px` }}
      >
        {renderImages()}
        {renderImages(true)}
      </div>
    </div>
  );
};
