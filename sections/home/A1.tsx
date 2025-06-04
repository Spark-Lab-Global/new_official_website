import hero from "@/assets/hero.png";

const A1 = () => {
  return (
    <div
      className="flex h-screen flex-col bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${hero.src})`,
      }}
    >
      A1
    </div>
  );
};

export default A1;
