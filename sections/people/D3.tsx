import a from "@/assets/d3/a.jpeg";
import b from "@/assets/d3/b.png";
import c from "@/assets/d3/c.png";
import d from "@/assets/d3/d.jpeg";
import e from "@/assets/d3/e.jpeg";
import f from "@/assets/d3/f.jpeg";

const Block = ({ src }: { src: string }) => {
  return (
    <div className="flex flex-col gap-10">
      <div className="aspect-square overflow-hidden">
        <img src={src} alt="Ryan" className="h-full w-full object-cover" />
      </div>
      {/* <p className="text-mobai-gray text-2xl font-bold">Ryan</p> */}
    </div>
  );
};

const D3 = () => {
  return (
    <div className="p-10">
      <div className="mx-auto flex max-w-screen-xl flex-col gap-10">
        <h2 className="text-mobai-gray decoration-mobai-gray font-serif text-3xl font-bold underline decoration-2 underline-offset-6 lg:text-5xl">
          People in Spark Lab
        </h2>
        <div className="grid grid-cols-2 gap-10 md:grid-cols-3">
          <Block src={a.src} />
          <Block src={b.src} />
          <Block src={c.src} />
          <Block src={d.src} />
          <Block src={e.src} />
          <Block src={f.src} />
        </div>
      </div>
    </div>
  );
};

export default D3;
