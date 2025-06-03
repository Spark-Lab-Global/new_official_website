import leanStartup from "@/assets/leanStartup.png";

const C2 = () => {
  return (
    <div className="p-10">
      <div className="mx-auto flex max-w-screen-2xl flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-10">
          <img src={leanStartup.src} alt="Lean Startup" />
          <p className="text-mobai-gray w-full text-base whitespace-pre-line lg:text-lg">
            Spark Lab 为年轻创业者提供一套全栈式产品体系，覆盖从 -1 到 10
            的完整成长路径：
            <br />
            - 在 Spark Lab+，你可以通过 AI Hacker House
            等开放活动快速入场、碰撞灵感；
            <br />
            - 在 Container
            中，我们提供科技火人节、Fellows等多种形式的项目，帮助你从 0 到 1
            明确方向、构建项目；
            <br />- 进入 Spark Lab 校友社区后，我们将长期陪伴你 1 到 10
            的持续成长，并通过早期投资基金为你提供第一张支票；
            我们不只是项目集合，而是一个系统化的构建平台。从最初的
            spark，到真正的 startup，我们陪你走完整个 builder 的旅程。
          </p>
        </div>
      </div>
    </div>
  );
};

export default C2;
