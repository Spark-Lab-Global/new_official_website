import a from "@/assets/d1/a.webp";
import b from "@/assets/d1/b.svg";

const D1 = () => {
  return (
    <div
      className="relative flex h-screen flex-col bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${a.src})`,
      }}
    >
      <img
        src={b.src}
        alt=""
        className="absolute inset-0 z-10 h-full w-full object-cover"
      />
      <div className="relative z-20 mx-auto flex h-full w-full max-w-screen-xl flex-col items-center justify-center p-10">
        <h1 className="font-title text-center text-4xl leading-tight font-bold tracking-tight whitespace-pre-line text-white drop-shadow-2xl sm:text-6xl lg:text-7xl xl:text-8xl">
          Find your spark by getting lost
        </h1>
      </div>
    </div>
  );
};

export default D1;
