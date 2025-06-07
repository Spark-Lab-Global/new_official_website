const Block = ({ src, name }: { src: string; name: string }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="aspect-[3/2] overflow-hidden">
        <img src={src} alt="Ryan" className="h-full w-full object-cover" />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-mobai-gray text-xl font-bold">{name}</p>
      </div>
    </div>
  );
};

interface D2Props {
  images?: Array<{
    src: string;
    width?: number;
    height?: number;
    [key: string]: any;
  }>;
}
const D2 = ({ images }: D2Props) => {
  return (
    <div className="p-10">
      <div className="mx-auto flex max-w-screen-xl flex-col gap-10">
        <h2 className="text-foreground font-title text-3xl font-bold lg:text-5xl">
          The History of Spark
        </h2>
        <div className="flex flex-col items-center gap-10">
          {/* <p className="text-mobai-gray w-full text-base lg:text-lg">
            We are here to spark rule-makers who live themselves as a creative
            reality. We are here to spark rule-makers who live themselves as a
            creative reality. We are here to spark rule-makers who live
            themselves as a creative reality. We are here to spark rule-makers
            who live
          </p> */}
          <div className="grid grid-cols-2 gap-10 md:grid-cols-3">
            <Block src={images![0].src} name="The Beatles" />
            <Block src={images![1].src} name="Jony Ive" />
            <Block src={images![2].src} name="Richard Feynman" />
            <Block src={images![3].src} name="James Turrell" />
            <Block src={images![4].src} name="Nikola Tesla" />
            <Block src={images![5].src} name="Bruce lee" />
          </div>
          {/* <p className="text-mobai-gray w-full text-base lg:text-lg">
            We are here to spark rule-makers who live themselves as a creative
            reality. We are here to spark rule-makers who live themselves as a
            creative reality. We are here to spark rule-makers who live
            themselves as a creative reality. We are here to spark rule-makers
            who live
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default D2;
