const A2 = () => {
  return (
    <div className="flex flex-col items-center gap-10 p-10">
      <div className="flex flex-col items-center gap-10">
        <h2 className="text-6xl font-bold">
          <span className="text-mobai-orange decoration-mobai-orange underline decoration-2 underline-offset-6">
            Spark
          </span>
          <span className="text-mobai-gray decoration-mobai-gray underline decoration-2 underline-offset-6">
            {" "}
            the Niche of One.
          </span>
        </h2>
        <div className="flex flex-col items-center gap-1">
          <p className="text-mobai-gray text-xl">
            We are here to spark rule-makers
          </p>
          <p className="text-mobai-gray text-xl">
            who live themselves as a creative reality.
          </p>
        </div>
      </div>
      <div className="flex w-full flex-col items-center gap-1">
        <nav>
          <ul className="text-mobai-gray flex flex-row items-center gap-2 text-xl">
            <li>
              <a
                href="/"
                className="decoration-mobai-gray underline decoration-2 underline-offset-2"
              >
                people
              </a>
            </li>
            <li className="text-mobai-gray">|</li>
            <li>
              <a
                href="/"
                className="decoration-mobai-gray underline decoration-2 underline-offset-2"
              >
                money
              </a>
            </li>
            <li className="text-mobai-gray">|</li>
            <li>
              <a
                href="/"
                className="decoration-mobai-gray underline decoration-2 underline-offset-2"
              >
                house
              </a>
            </li>
            <li className="text-mobai-gray">|</li>
            <li>
              <a
                href="/"
                className="decoration-mobai-gray underline decoration-2 underline-offset-2"
              >
                training
              </a>
            </li>
          </ul>
        </nav>
        <p className="text-mobai-gray text-xl">
          all here for your{" "}
          <span className="text-mobai-orange font-bold">spark</span>
        </p>
      </div>
    </div>
  );
};

export default A2;
