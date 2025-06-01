const Block = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="border-mobai-black flex w-full flex-col gap-4 border-t-8 py-4">
      <p className="font-serif text-2xl font-bold">{title}</p>
      <p className="text-mobai-gray font-serif text-xl">{description}</p>
      <button className="mt-auto text-left font-serif text-2xl font-bold">
        Learn more
      </button>
    </div>
  );
};

const A3 = () => {
  return (
    <div className="p-10">
      <div className="mx-auto flex max-w-screen-2xl flex-col gap-10">
        <div className="border-mobai-gray h-96 border-4 bg-[#F4F4F4]"></div>
        <div className="flex flex-row gap-6">
          <Block
            title="Spark is a fire only you can feel."
            description="A spark isn’t a trend, a childhood dream, or a lightning bolt from above.
 It’s the moment a problem won’t leave you alone —
 the quiet obsession that makes you forget time, fear, or applause.
 It’s not something you’re told to do. It’s the thing you can’t not do.
 When you feel it, you’ll know.
 It lights you up — and you light the world."
          />
          <Block
            title="Building is not only business. It’s expression."
            description="
 Sustainable drive doesn’t come from money — it comes from meaning.
 Building isn’t just business. It’s self-expression.
 The most powerful startups don’t chase markets.
 They’re born from one person’s unshakable belief in a better possibility.
 Spark is where it all begins — not to succeed, but because you must."
          />
          <Block
            title="Sparks need a container."
            description="In a world of speed and templates, what we lack isn’t skill — it’s space.
 Sparks don’t survive in noise. They need a container:
 a safe, honest, and undistracted place to explore,
 to stray off-path, and to ask the only question that matters:
 “What do I truly want to build?”
 That’s why Spark Lab exists.
 Not to teach you how to pitch — but to help you build the world only you can imagine."
          />
        </div>
      </div>
    </div>
  );
};

export default A3;
