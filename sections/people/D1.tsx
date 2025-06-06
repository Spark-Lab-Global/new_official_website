interface D1Props {
  imageSrc?: string;
  imageSrcB?: string;
}

const D1 = ({ imageSrc, imageSrcB }: D1Props) => {
  return (
    <div
      className="relative flex h-screen flex-col bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${imageSrc})`,
      }}
    >
      <img
        src={imageSrcB}
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
