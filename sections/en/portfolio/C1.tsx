const WeDontCare = () => {
  return (
    <div className="flex flex-col items-end gap-6">
      <p className="text-mobai-black text-right font-serif text-xl font-bold">
        We don't care
      </p>
      <ol className="text-mobai-gray list-decimal space-y-4 pl-6 font-serif text-lg">
        <li className="pl-4">
          <p className="w-full line-through decoration-2">
            Whether you went to a top school
          </p>
        </li>
        <li className="pl-4">
          <p className="w-full line-through decoration-2">
            How polished your PPT, deck, or pitch is
          </p>
        </li>
        <li className="pl-4">
          <p className="w-full line-through decoration-2">
            Whether it looks like success
          </p>
        </li>
        <li className="pl-4">
          <p className="w-full line-through decoration-2">
            How many times you’ve failed
          </p>
        </li>
      </ol>
    </div>
  );
};

const WeCareAbout = () => {
  return (
    <div className="flex flex-col gap-6">
      <p className="text-mobai-black text-left font-serif text-xl font-bold">
        We care about
      </p>
      <ol className="text-mobai-gray list-decimal space-y-4 pl-6 font-serif text-lg">
        <li className="pl-4">
          <p className="w-full">Creative and curious</p>
        </li>
        <li className="pl-4">
          <p className="w-full">Taste in emerging art and tech</p>
        </li>
        <li className="pl-4">
          <p className="w-full">High agency</p>
        </li>
        <li className="pl-4">
          <p className="w-full">Unique perspectives and sharp judgment</p>
        </li>
        <li className="pl-4">
          <p className="w-full">A spark — and the ambition to follow it</p>
        </li>
      </ol>
    </div>
  );
};

const C1 = () => {
  return (
    <div className="p-10">
      <div className="mx-auto flex max-w-screen-2xl flex-col items-center gap-10">
        <h2 className="text-mobai-gray decoration-mobai-gray font-serif text-5xl font-bold underline decoration-2 underline-offset-6">
          How We Spark You
        </h2>
        <div className="flex flex-col items-center gap-10">
          <div className="grid w-full grid-cols-1 justify-center gap-10 md:grid-cols-2 md:gap-24">
            <WeDontCare />
            <WeCareAbout />
          </div>
        </div>
      </div>
    </div>
  );
};

export default C1;
