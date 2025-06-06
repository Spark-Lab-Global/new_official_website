import a from "@/assets/e2/a.png";
import b from "@/assets/e2/b.png";
import c from "@/assets/e2/c.png";

const Block = ({ src, title }: { src: string; title: string }) => {
  return (
    <div className="flex flex-1 flex-col gap-4 border-4 border-[#3A3A3A] p-4">
      <div className="aspect-[4/3] w-full overflow-hidden">
        <img src={src} alt="" className="h-full w-full object-cover" />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-mobai-gray text-xl font-bold">{title}</p>
      </div>
    </div>
  );
};

const E2 = () => {
  return (
    <div className="p-10">
      <div className="mx-auto flex max-w-screen-xl flex-col gap-10">
        <h2 className="text-foreground font-title text-3xl font-bold lg:text-5xl">
          Our Programs
        </h2>
        <div className="flex flex-col gap-10 sm:flex-row sm:gap-6">
          <Block src={a.src} title="Burning Hacker/20 Fellows" />
          <Block src={b.src} title="AI Hacker House" />
          <Block src={c.src} title="And more……" />
        </div>
      </div>
    </div>
  );
};

export default E2;
