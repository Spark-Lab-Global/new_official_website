import leanStartup from "@/assets/leanStartup.png";

const C2 = () => {
  return (
    <div className="p-10">
      <div className="mx-auto flex max-w-screen-2xl flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-10">
          <img src={leanStartup.src} alt="Lean Startup" />
          <p className="text-mobai-gray w-full font-serif text-xl">
            We wrap you in senior brainpower, storycraft, capital, code, and a
            choose-your-own-adventure equity model—plus the playbooks to dodge
            every trap we already stepped in. All you need to bring is the
            obsession
          </p>
        </div>
      </div>
    </div>
  );
};

export default C2;
