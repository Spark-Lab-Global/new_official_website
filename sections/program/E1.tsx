interface E1Props {
  imageSrc?: string;
}

const E1 = ({ imageSrc }: E1Props) => {
  return (
    <div
      className="relative flex h-screen flex-col bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${imageSrc})`,
      }}
    ></div>
  );
};

export default E1;
