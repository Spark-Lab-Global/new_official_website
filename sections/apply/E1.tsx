import a from "@/assets/e1/a.png";

const E1 = () => {
  return (
    <div
      className="relative flex h-screen flex-col bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${a.src})`,
      }}
    ></div>
  );
};

export default E1;
