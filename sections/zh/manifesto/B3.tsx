const FAQ = ({ question, answer }: { question?: string; answer?: string }) => {
  return (
    <div className="flex w-full flex-col gap-10 md:flex-row">
      <p className="text-mobai-black font-serif text-xl font-bold whitespace-nowrap">
        {question || "Question 1"}
      </p>
      <p className="text-mobai-gray w-full font-serif text-lg whitespace-pre-line">
        {answer ||
          "We are here to spark rule-makers who live themselves as a creative reality. We are here to spark rule-makers who live themselves as a creative reality. We are here to spark rule-makers who live themselves as a creative reality. We are here to spark rule-makers who live"}
      </p>
    </div>
  );
};

const B3 = () => {
  return (
    <div className="p-10">
      <div className="mx-auto flex max-w-screen-2xl flex-col items-center gap-10">
        <h2 className="text-mobai-gray decoration-mobai-gray font-serif text-5xl font-bold underline decoration-2 underline-offset-6">
          FAQ
        </h2>
        <div className="flex flex-col items-center gap-10">
          <FAQ
            question="你们是加速器吗？"
            answer="是，也不是。我们确实提供早期投资与项目支持，但 Spark Lab 从不是一套“训练营”或“创业流水线”。我们不做 Demo Day 之后 say goodbye 的事。
Spark Lab 是一个终身制的创业社区，我们提出「Container → Community」的概念，通过 Container 项目进入 Spark Lab Community，在社区中获得我们的持续支持与投资。"
          />
          <FAQ
            question="没有成熟 idea 可以加入吗？"
            answer="当然可以。我们服务的是完整的 builder 旅程，从 nobody → builder → founder。
只要你有一股说不清、但非做不可的执念，那就已经是 spark 的雏形了。
 有 spark，我们就能一起点燃它。"
          />
          <FAQ
            question="你们是全职的吗？要辞职/退学吗？"
            answer="不一定。我们设计了不同密度的参与方式：短期的 Spark  Lab+，中期的 Container，长期的 Community。
你可以根据自己的节奏参与，不需要一开始就 all in。只要你愿意构建，我们都会欢迎。"
          />
          <FAQ
            question="你们支持哪些方向的项目？"
            answer="只要它是真实的，是你非做不可的，我们就感兴趣。
除此之外，我们尤其关注 2C 消费级应用 和 科技消费类硬件。"
          />
          <FAQ
            question="被你们支持意味着什么？"
            answer="意味着你将进入一个真实的 builder 网络，有人和你一起燃烧。
Spark Lab 会是你创业路上的第一个坚定合伙人，我们通过各种方式支持你：
- 第一张支票
- 媒体内容工作室支持
- 筹款支持
- 独家闭门活动和指导
- 线下 housing 与办公支持
- ……
我们不只是“提供资源”，而是与你一起构建的伙伴。 "
          />
          <FAQ
            question="要怎么加入你们？是否需要发送我的 Deck？"
            answer="不需要 Deck。我们不在意格式，也不看简历。
直接点击【Apply】，告诉我们你的故事，报名加入 Container 项目。"
          />
          <FAQ
            question="你们在寻找什么样的人？"
            answer="我们在寻找那些愿意用一生去探索某个问题、构建某个世界的年轻人。不论你是艺术家、黑客还是构建者，我们支持的年轻人有相似的特质：
1. 富有创造力与好奇心（Creative and curious）
2. 对新兴艺术与科技的敏锐品味（Taste in emerging art and tech）
3. 强烈的主动性与行动力（High agency）
4. 独立视角与真实判断力（Unique perspectives and sharp judgment）
5. 内心的 spark，以及为之燃烧的雄心（A spark — and the ambition to follow it）
我们不看简历，更在意你是谁，以及为什么要做这件事。"
          />
          <FAQ
            question="我应该什么时候申请？"
            answer="当你感觉“我已经无法不做这件事了”的时候，就可以来。
无论你处在哪个阶段，我们都有适合你的路径：
- 你还在寻找同类，但已经开始思考“我为此燃烧是否值得”
- 你有想法，正在探索方向
- 你做出了 MVP，正在验证可行性
- 你已有用户和收入（有 MRR / ARR / 融资），想找加速通道
我们的项目（如科技火人节等）不定期开启，欢迎提前填写意向表，我们会在合适的时候与你联系。"
          />
          <FAQ
            question="Spark Lab 会占股份吗？"
            answer="我们希望和创始人建立的是深厚的长期共创关系，而不是一次性的资源交易。
大多数项目是奖学金支持，不占股份。
 只有当你主动选择接受我们的投资时，我们才会作为早期投资人进入，占少量股份，长期陪跑。"
          />
          <FAQ
            question="我好像还没有准备好？"
            answer="欢迎你先参加 SL+（如 AI Hacker House 等）开放活动。
Spark Lab 的社区随时欢迎“还在路上”的你。"
          />
        </div>
      </div>
    </div>
  );
};

export default B3;
