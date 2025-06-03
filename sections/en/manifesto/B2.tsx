import whatIsSparkLab from "@/assets/whatIsSparkLab.png";

const B2 = () => {
  return (
    <div className="p-10">
      <div className="mx-auto flex max-w-screen-2xl flex-col items-center gap-10">
        <h2 className="text-mobai-gray decoration-mobai-gray font-serif text-5xl font-bold underline decoration-2 underline-offset-6">
          What is Spark Lab?
        </h2>
        <div className="flex flex-col items-center gap-10">
          <p className="text-mobai-gray w-full font-serif text-lg">
            Spark Lab is an accelerator — just not the kind you’re used to.
            We’re not <span className="line-through">YC 2.0</span>. Not{" "}
            <span className="line-through">a pitch school</span>. Not{" "}
            <span className="line-through">a startup factory</span>. Spark Lab
            has never been just a “program” or a “project.” We're the home for
            artists, hackers, and builders chasing their spark — and building
            from it, for life. We are a tech-culture media studio, a talent
            accelerator, and a lifelong founder mafia. Early-stage investing is
            our business model. We exist for those who treat their life as
            creative material, and who insist on building the future at their
            own rhythm.
          </p>
          <p className="text-mobai-gray w-full font-serif text-lg">
            <span className="font-bold">Mission:</span> Empowering young people
            to build the world they want to see.
            <br />
            <span className="font-bold">Vision:</span> Accelerating a
            renaissance where building is the language — and humanity is the
            destination.
            <br />
            <span className="font-bold">Values:</span> We are building the rails
            so the brightest rebels can ride at lightspeed. If the timeline
            above excites you more than it scares you, you’re already one of us.
          </p>
          <img src={whatIsSparkLab.src} alt="Spark Lab" />
          <p className="text-mobai-gray w-full font-serif text-lg">
            We are here to spark rule-makers who live themselves as a creative
            reality. We are here to spark rule-makers who live themselves as a
            creative reality. We are here to spark rule-makers who live
            themselves as a creative reality. We are here to spark rule-makers
            who live
          </p>
        </div>
      </div>
    </div>
  );
};

export default B2;
