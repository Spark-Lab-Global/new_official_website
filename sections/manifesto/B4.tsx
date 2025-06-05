import magicZine from "@/assets/magicZine.png";

const B4 = () => {
  return (
    <div className="p-10">
      <div className="mx-auto flex max-w-screen-xl flex-col items-center gap-20">
        <h2 className="text-mobai-gray decoration-mobai-gray font-title text-5xl font-bold underline decoration-2 underline-offset-6">
          Download Our Spark Deck
        </h2>
        <div className="flex flex-col items-center gap-20">
          <div className="flex flex-col items-center gap-10">
            <img src={magicZine.src} alt="A Magic Zine" className="w-96" />
            <p className="text-mobai-black text-6xl font-bold">A Magic Zine</p>
          </div>
          <p className="text-mobai-gray w-full font-serif text-lg">
            We are here to spark rule-makers who live themselves as a creative
            reality. We are here to spark rule-makers who live themselves as a
            creative reality. We are here to spark rule-makers who live
            themselves as a creative reality. We are here to spark rule-makers
            who live
          </p>
        </div>
      </div>
    </div>
  );
};

export default B4;
