import hero from "@/assets/hero.png";
import { useTranslations } from "@/i18n/utils";

interface A1Props {
  t: ReturnType<typeof useTranslations>;
}

const A1 = ({ t }: A1Props) => {
  return (
    <div
      className="relative flex h-screen flex-col bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${hero.src})`,
      }}
    >
      {/* <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/40" /> */}

      <div className="relative mx-auto flex h-full w-full max-w-screen-xl flex-col items-center justify-center p-10">
        <h1 className="text-center text-4xl leading-tight font-bold tracking-tight whitespace-pre-line text-white drop-shadow-2xl sm:text-6xl lg:text-7xl xl:text-8xl">
          {t("a1.content")}
        </h1>
      </div>
    </div>
  );
};

export default A1;
