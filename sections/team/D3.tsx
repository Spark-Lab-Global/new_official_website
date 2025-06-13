import a from "@/assets/d3/a.jpeg";
import b from "@/assets/d3/b.png";
import c from "@/assets/d3/c.png";
import d from "@/assets/d3/d.jpeg";
import e from "@/assets/d3/e.jpeg";
import f from "@/assets/d3/f.jpeg";
import g from "@/assets/d3/g.jpeg";

const Block = ({
  src,
  name,
  title,
}: {
  src: string;
  name: string;
  title: string;
}) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="aspect-square overflow-hidden">
        <img src={src} alt="Ryan" className="h-full w-full object-cover" />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-mobai-gray text-xl font-bold">{name}</p>
        <p className="text-mobai-gray text-base">{title}</p>
      </div>
    </div>
  );
};

const D3 = () => {
  return (
    <div className="p-10">
      <div className="mx-auto flex max-w-screen-xl flex-col gap-10">
        <h2 className="text-foreground font-title text-3xl font-bold lg:text-5xl">
          People in Spark Lab
        </h2>
        <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-4">
          <Block src={a.src} name="Ryan" title="building culture @ spark lab" />
          <Block src={b.src} name="Koji" title="founding partner @ spark lab" />
          <Block
            src={c.src}
            name="Aaron"
            title="founding partner @ spark lab"
          />
          <Block
            src={d.src}
            name="Zeeland"
            title="crafting the self-authorship accelerator @ spark lab"
          />
          <Block
            src={e.src}
            name="Troy"
            title="brewing sparks&culture @ spark lab"
          />
          <Block
            src={f.src}
            name="Eons"
            title="a half-life, sparking it forward @ spark lab"
          />
          <Block
            src={g.src}
            name="Koi"
            title="a low-noise tinkerer, weaving tech and humanity @ spark lab"
          />
        </div>
      </div>
    </div>
  );
};

export default D3;
