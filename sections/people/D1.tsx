import a from "@/assets/d1/a.svg";

const D1 = () => {
  return (
    <div
      className="relative flex h-screen flex-col bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${a.src})`,
      }}
    >
      <div className="relative mx-auto flex h-full w-full max-w-screen-xl flex-col items-center justify-center p-10">
        <h1 className="font-title text-center text-4xl leading-tight font-bold tracking-tight whitespace-pre-line text-white drop-shadow-2xl sm:text-6xl lg:text-7xl xl:text-8xl">
          Find your spark by getting lost
        </h1>
      </div>
    </div>
  );
};

export default D1;
