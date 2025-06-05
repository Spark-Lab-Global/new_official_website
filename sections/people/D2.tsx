import a from "@/assets/d2/a.png";
import b from "@/assets/d2/b.png";
import c from "@/assets/d2/c.png";
import d from "@/assets/d2/d.png";
import e from "@/assets/d2/e.png";
import f from "@/assets/d2/f.png";

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

const D2 = () => {
  return (
    <div className="p-10">
      <div className="mx-auto flex max-w-screen-xl flex-col gap-10">
        <h2 className="text-foreground font-serif text-3xl font-bold lg:text-5xl">
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
            <Block src={a.src} name="Brian Eno" />
            <Block src={b.src} name="Jony Ive" />
            <Block src={c.src} name="Richard Feynman" />
            <Block src={d.src} name="James Turrell" />
            <Block src={e.src} name="Nikola Tesla" />
            <Block src={f.src} name="Bruce lee" />
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
