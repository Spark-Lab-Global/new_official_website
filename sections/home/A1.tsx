// import { useTranslations } from "@/i18n/utils";

interface A1Props {
  imageSrc?: string;
  // t?: ReturnType<typeof useTranslations>;
}

const A1 = ({ imageSrc }: A1Props) => {
  return (
    <div
      className="relative flex h-screen flex-col bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: imageSrc ? `url(${imageSrc})` : 'none',
      }}
    >
      {/* <div className="relative mx-auto flex h-full w-full max-w-screen-xl flex-col items-center justify-center p-10">
        <h1 className="text-center text-4xl leading-tight font-bold tracking-tight whitespace-pre-line text-white drop-shadow-2xl sm:text-6xl lg:text-7xl xl:text-8xl">
          {t("a1.content")}
        </h1>
      </div> */}
    </div>
  );
};

export default A1;
