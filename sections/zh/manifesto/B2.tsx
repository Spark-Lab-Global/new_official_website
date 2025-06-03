import whatIsSparkLab from "@/assets/whatIsSparkLab.png";

const B2 = () => {
  return (
    <div className="p-10">
      <div className="mx-auto flex max-w-screen-2xl flex-col items-center gap-10">
        <h2 className="text-mobai-gray decoration-mobai-gray font-serif text-3xl font-bold underline decoration-2 underline-offset-6 lg:text-5xl">
          What is Spark Lab?
        </h2>
        <div className="flex flex-col items-center gap-10">
          <p className="text-mobai-gray w-full text-base lg:text-lg">
            Spark Lab 是一家加速器，但和你以为的不一样。 我们不是{" "}
            <span className="line-through">YC 2.0</span>. 不是{" "}
            <span className="line-through">只教你路演的创业学校</span>. 也不是{" "}
            <span className="line-through">批量复制创始人的创业工厂</span>
            。Spark Lab 从不是一个简单的“项目”或“计划”。
            我们是艺术家、黑客和构建者的归属地——一个可以安心偏离、点燃
            spark、构建世界的地方。
            我们是一家科技文化媒体工作室、人才加速器、终身制创业校友社区，早期投资是我们的商业模式。
            我们专为那些把自己的人生当作创作素材、并坚持用自己的节奏去打造未来的创始人而存在。
          </p>
          <p className="text-mobai-gray w-full text-base lg:text-lg">
            <span className="font-bold">Mission:</span> 让年轻人开始改变世界
            <br />
            <span className="font-bold">Vision:</span>{" "}
            加速一场以构建为语言的文艺复兴，让人重新成为人
            <br />
            <span className="font-bold">Values:</span> Everything Begins With A
            Spark
          </p>
          <img src={whatIsSparkLab.src} alt="Spark Lab" />
          <p className="text-mobai-gray w-full text-base lg:text-lg">
            我们正在铺设轨道，让最聪明的反叛者以光速前进。
            如果上面的内容让你的兴奋多过害怕，你已经是我们的一员了。
          </p>
        </div>
      </div>
    </div>
  );
};

export default B2;
