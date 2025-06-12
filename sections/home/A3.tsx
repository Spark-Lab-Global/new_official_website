import { Timeline } from "@/components/ui/timeline";
import { useTranslations } from "@/i18n/utils";
import { type FC } from 'react';

const THESIS_KEYS = ["thesis1", "thesis2", "thesis3"] as const;

interface A3Props {
  t: ReturnType<typeof useTranslations>;
  images?: Array<{
    src: string;
    width?: number;
    height?: number;
    [key: string]: any;
  }>;
}

const A3: FC<A3Props> = ({ t, images }) => {
  const timelineData = [
    {
      title: "1968",
      content: (
        <div className="flex flex-col gap-6">
          <p className="text-mobai-gray text-sm md:text-base whitespace-pre-line lg:text-lg">
            {t("a3.timeline.1968.description" as any)}
          </p>
          {images && images[0] && (
            <img
              src={images[0].src}
              alt="Mother of All Demos"
              className="w-full rounded-lg object-cover shadow-md aspect-video max-h-60 md:max-h-100"
            />
          )}
        </div>
      ),
    },
    {
      title: "1981",
      content: (
        <div className="flex flex-col gap-6">
          <p className="text-mobai-gray text-sm md:text-base whitespace-pre-line lg:text-lg">
            {t("a3.timeline.1981.description" as any)}
          </p>
          {images && images[1] && (
            <img
              src={images[1].src}
              alt="MTV Launch"
              className="w-full rounded-lg object-cover shadow-md aspect-video max-h-60 md:max-h-100"
            />
          )}
        </div>
      ),
    },
    {
      title: "2005",
      content: (
        <div className="flex flex-col gap-6">
          <p className="text-mobai-gray text-sm md:text-base whitespace-pre-line lg:text-lg">
            {t("a3.timeline.2005.description" as any)}
          </p>
          {images && images[2] && (
            <img
              src={images[2].src}
              alt="YC Demo Day"
              className="w-full rounded-lg object-cover shadow-md aspect-video max-h-60 md:max-h-100"
            />
          )}
        </div>
      ),
    },
    {
      title: "2025",
      content: (
        <div className="flex flex-col gap-6">
          <p className="text-mobai-gray text-sm md:text-base whitespace-pre-line lg:text-lg">
            {t("a3.timeline.2025.description" as any)}
          </p>
          {images && images[3] && (
            <img
              src={images[3].src}
              alt="Spark Lab"
              className="w-full rounded-lg object-cover shadow-md aspect-video max-h-60 md:max-h-100"
            />
          )}
        </div>
      ),
    },
  ];

  return (
    <div className="px-4 md:px-10 pb-20">
      <div className="mx-auto max-w-screen-xl">
        <Timeline data={timelineData} />
        <div className="flex flex-col gap-16 md:gap-20 mt-16 md:mt-24">
          {THESIS_KEYS.map((thesis) => {
            const title = t(`a3.${thesis}.title` as any);
            const description = t(`a3.${thesis}.description` as any);
            return (
              <div key={thesis} className="flex flex-col gap-8 md:gap-12 lg:gap-16">
                <p className="text-foreground font-title text-2xl md:text-3xl font-bold lg:text-5xl">
                  {Array.isArray(title) ? title.join(" ") : title}
                </p>
                <p className="text-mobai-gray w-full text-sm md:text-base whitespace-pre-line lg:text-lg">
                  {Array.isArray(description)
                    ? description.join(" ")
                    : description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default A3; 