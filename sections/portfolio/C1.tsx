const WeDontCare = () => {
  return (
    <div className="flex flex-col gap-6">
      <p className="text-mobai-black text-right font-serif text-2xl font-bold">
        We don't care
      </p>
      <ol className="text-mobai-gray list-decimal space-y-4 pl-6 font-serif text-xl">
        <li className="pl-4">
          <p className="w-full line-through decoration-2">
            <span className="font-bold">Pedigree-porn.</span> Fancy degrees,
            FAANG badges, or which Ivy crest sits on your résumé.
          </p>
        </li>
        <li className="pl-4">
          <p className="w-full line-through decoration-2">
            <span className="font-bold">Pitch-deck cosplay.</span> Perfect fonts
            and hockey-stick graphs mean nothing without shipped experiments.
          </p>
        </li>
        <li className="pl-4">
          <p className="w-full line-through decoration-2">
            <span className="font-bold">Team headcount.</span> One obsessed
            founder or team outruns ten bored engineers on payroll.
          </p>
        </li>
        <li className="pl-4">
          <p className="w-full line-through decoration-2">
            <span className="font-bold">Past wipe-outs.</span> Scar tissue is
            proof of contact with reality, not a red flag.
          </p>
        </li>
      </ol>
    </div>
  );
};

const WeCareAbout = () => {
  return (
    <div className="flex flex-col gap-6">
      <p className="text-mobai-black text-left font-serif text-2xl font-bold">
        We care about
      </p>
      <ol className="text-mobai-gray list-decimal space-y-4 pl-6 font-serif text-xl">
        <li className="pl-4">
          <p className="w-full">
            <span className="font-bold">The Atomic Founder.</span> One human,
            one GPU—enough to set a market ablaze. We’re hunting for solo
            operators who wield personal experience as a product roadmap, keep
            LLMs running as 24/7 copilots, and ship category killers straight
            from the garage. If you can design, code, narrate, and sell before
            most teams finish their stand-up, you’re the spark we want.
          </p>
        </li>
        <li className="pl-4">
          <p className="w-full">
            <span className="font-bold">Taste-Driven Tech.</span> Spark Lab
            believes the next generation of world-changing products will be
            pulled forward by content and aesthetics. Algorithms may supply the
            horsepower, but the decisive edge is the founder’s taste—an ability
            to translate deep tech into stories, images, and symbols that
            culture instantly feels. When code meets aesthetic, white papers
            morph into movements and inventions become rituals.
          </p>
        </li>
        <li className="pl-4">
          <p className="w-full">
            <span className="font-bold">Product with soul.</span> We back
            founders whose products are extensions of their inner world. At
            their inner world. At Spark Lab, we seek creators who don’t just
            build—they embody. The best products aren’t manufactured, they’re
            lived into existence—infused with the founder’s personal history,
            obsessions, and irreducible taste. When your quirks become features
            and your pain points become product truths, what you ship resonates
            deeper than specs. If your startup feels more like a spiritual
            autobiography than a business plan, you’re building with soul—and
            that’s who we’re here to spark.
          </p>
        </li>
      </ol>
    </div>
  );
};

const C1 = () => {
  return (
    <div className="p-10">
      <div className="mx-auto flex max-w-screen-2xl flex-col items-center gap-10">
        <h2 className="text-mobai-gray decoration-mobai-gray font-serif text-6xl font-bold underline decoration-2 underline-offset-6">
          How We Spark You
        </h2>
        <div className="flex flex-col items-center gap-10">
          <div className="grid w-full grid-cols-2 justify-center gap-24">
            <WeDontCare />
            <WeCareAbout />
          </div>
          <p className="text-mobai-gray w-full font-serif text-xl">
            Why these filters? Spark Lab exists to catalyze atomic
            founders—individuals whose innate gifts and relentless curiosity
            fuse into breakthrough companies. Credentials are easy to fake;
            intrinsic drive isn’t. We fund rule-makers who live their work as a
            creative reality, then surround them with capital, deep-tech and
            content infrastructure, and a global guild of fellow obsessives. If
            that sounds like oxygen to you, step into the circle—everything
            outside is just noise.
          </p>
        </div>
      </div>
    </div>
  );
};

export default C1;
