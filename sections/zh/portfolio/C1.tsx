const WeDontCare = () => {
  return (
    <div className="flex flex-col items-end gap-6">
      <p className="text-mobai-black text-right font-serif text-xl font-bold">
        We don't care
      </p>
      <ol className="text-mobai-gray list-decimal space-y-4 pl-6 font-serif text-lg">
        <li className="pl-4">
          <p className="w-full line-through decoration-2">你是不是名校出身</p>
        </li>
        <li className="pl-4">
          <p className="w-full line-through decoration-2">
            你的 PPT、Deck 或 Pitch 多漂亮
          </p>
        </li>
        <li className="pl-4">
          <p className="w-full line-through decoration-2">是不是“看起来成功”</p>
        </li>
        <li className="pl-4">
          <p className="w-full line-through decoration-2">你失败过多少次</p>
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
          <p className="w-full">富有创造力与好奇心</p>
        </li>
        <li className="pl-4">
          <p className="w-full">对新兴艺术与科技的敏锐品味</p>
        </li>
        <li className="pl-4">
          <p className="w-full">强烈的主动性与行动力</p>
        </li>
        <li className="pl-4">
          <p className="w-full">独立视角与真实判断力</p>
        </li>
        <li className="pl-4">
          <p className="w-full">内心的 spark，以及为之燃烧的雄心</p>
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
