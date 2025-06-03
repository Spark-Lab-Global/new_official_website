import aImage from "@/assets/a3/a.png";
import bImage from "@/assets/a3/b.png";
import cImage from "@/assets/a3/c.png";
import dImage from "@/assets/a3/d.png";

const Block = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="border-mobai-black flex w-full flex-col gap-4 border-t-4 py-4 lg:gap-6">
      <p className="font-serif text-base font-bold lg:text-xl">{title}</p>
      <p className="text-mobai-gray text-base lg:text-lg">{description}</p>
      <button className="text-left font-serif text-base font-bold lg:text-xl">
        Learn more
      </button>
    </div>
  );
};

const ImageCarousel = () => {
  const images = [aImage, bImage, cImage, dImage];

  return (
    <div className="border-mobai-gray relative h-96 overflow-hidden border-4">
      <div className="animate-scroll-infinite flex">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={`Image ${index + 1}`}
            className="h-96 min-w-full flex-shrink-0 object-cover"
          />
        ))}
        {images.map((image, index) => (
          <img
            key={`duplicate-${index}`}
            src={image.src}
            alt={`Image ${index + 1} duplicate`}
            className="h-96 min-w-full flex-shrink-0 object-cover"
          />
        ))}
      </div>
    </div>
  );
};

const A3 = () => {
  return (
    <div className="p-10">
      <div className="mx-auto flex max-w-screen-2xl flex-col gap-10">
        <ImageCarousel />
        <div className="flex flex-col gap-6 lg:flex-row">
          <Block
            title="Spark 是内心还没被翻译成语言的火"
            description="Spark，不是一时的激情，而是探索的副产物，和自我发现的结果。 
Spark 不是某个天降的灵感、既定的人生志向，也不是潮流热点；而是你在一次次真实探索、亲于实践、偏离主线之后，突然间感受到的一点火花。
 当你遇见它，你会知道：它不是外界强加的趋势，是你想构建的世界，是你非做不可的东西。
 你点燃自己，也点燃世界。"
          />
          <Block
            title="创业是将内心世界和过往经历外化的旅程"
            description="真正持久的动力，来自于对内心使命感的发现。
 创业不仅仅是解决市场问题，
 更是创始人对自己过往经历和主体性的具象表达。
那些最打动人的项目，
 往往都始于一个人对某种可能性的深切执念。
Spark，是一切动机的起点；
 它不是为了成功，而是为了必须。"
          />
          <Block
            title="Spark，离不开一块承载「偏离」与「共燃」的土壤"
            description="Spark 从不凭空而生。
 它需要一个被允许发生的空间，需要反复偏离、试错与凝视的过程。

我们真正缺的，往往不是能力或想法，
 而是一个真实而自由的环境 ——
 一个能慢下来思考、允许走偏、重新对齐内心方向的地方。
 一片理想的创业土壤，让 Spark 被发现、被点燃、被构建。

我们会陪你一起，想清楚那句最初也最根本的问题：
你，愿意为了什么而燃烧？
真正让火持续燃烧的，是一群同样在燃烧的人。
 我们和你并肩构建、互相点燃，
 在失败中彼此托举，在创造中彼此映照。
你不是独行者。你是在火堆旁，
 和一群野生创始人一起，
 将 spark 化为现实。"
          />
        </div>
      </div>
    </div>
  );
};

export default A3;
