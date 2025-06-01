const FAQ = () => {
  return (
    <div className="flex flex-col gap-10 md:flex-row">
      <p className="text-mobai-black font-serif text-2xl font-bold whitespace-nowrap">
        Question 1
      </p>
      <p className="text-mobai-gray w-full font-serif text-xl">
        We are here to spark rule-makers who live themselves as a creative
        reality. We are here to spark rule-makers who live themselves as a
        creative reality. We are here to spark rule-makers who live themselves
        as a creative reality. We are here to spark rule-makers who live
      </p>
    </div>
  );
};

const B3 = () => {
  return (
    <div className="p-10">
      <div className="mx-auto flex max-w-screen-2xl flex-col items-center gap-10">
        <h2 className="text-mobai-gray decoration-mobai-gray font-serif text-6xl font-bold underline decoration-2 underline-offset-6">
          FAQ
        </h2>
        <div className="flex flex-col items-center gap-10">
          <FAQ />
          <FAQ />
          <FAQ />
        </div>
      </div>
    </div>
  );
};

export default B3;
