import aImage from "@/assets/a3/a.png";
import bImage from "@/assets/a3/b.png";
import cImage from "@/assets/a3/c.png";
import dImage from "@/assets/a3/d.png";
import { useTranslations } from "@/i18n/utils";

const Block = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="flex w-full flex-col gap-4 py-4 lg:gap-6">
      <p className="font-serif text-base font-bold lg:text-xl">{title}</p>
      <p className="text-mobai-gray text-base lg:text-lg">{description}</p>
      <button className="text-left font-serif text-base font-bold lg:text-xl">
        Learn more
      </button>
    </div>
  );
};

const ImageCarousel = () => {
  const images = [aImage, bImage, cImage, dImage];

  return (
    <div className="relative h-[500px] overflow-hidden border-4 border-[#3A3A3A]">
      <div className="animate-scroll-infinite flex">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={`Image ${index + 1}`}
            className="h-[500px] min-w-full flex-shrink-0 object-cover"
          />
        ))}
        {images.map((image, index) => (
          <img
            key={`duplicate-${index}`}
            src={image.src}
            alt={`Image ${index + 1} duplicate`}
            className="h-[500px] min-w-full flex-shrink-0 object-cover"
          />
        ))}
      </div>
    </div>
  );
};

interface A3Props {
  t: ReturnType<typeof useTranslations>;
}

const A3 = ({ t }: A3Props) => {
  return (
    <div className="p-10">
      <div className="mx-auto flex max-w-screen-xl flex-col gap-10">
        <ImageCarousel />
        <div className="flex flex-col gap-6 lg:flex-row">
          <Block
            title={t("a3.thesis1.title")}
            description={t("a3.thesis1.description")}
          />
          <Block
            title={t("a3.thesis2.title")}
            description={t("a3.thesis2.description")}
          />
          <Block
            title={t("a3.thesis3.title")}
            description={t("a3.thesis3.description")}
          />
        </div>
      </div>
    </div>
  );
};

export default A3;
