const A2 = () => {
  return (
    <div className="flex flex-col items-center gap-10 p-10">
      <div className="flex flex-col items-center gap-10">
        <h2 className="text-5xl font-bold">
          <span className="text-mobai-orange decoration-mobai-orange underline decoration-2 underline-offset-6">
            Spark
          </span>
          <span className="text-mobai-gray decoration-mobai-gray underline decoration-2 underline-offset-6">
            {" "}
            the New Renaissance.
          </span>
        </h2>
        <div className="flex flex-col items-center gap-1">
          <p className="text-mobai-gray text-lg">From spark to startup</p>
          <p className="text-mobai-gray text-lg">
            We help young founders burn their way into history.
          </p>
        </div>
      </div>
      <div className="flex w-full flex-col items-center gap-1">
        <nav>
          <ul className="text-mobai-gray flex flex-row items-center gap-2 text-lg">
            <li>
              <a
                href="/"
                className="decoration-mobai-gray underline decoration-2 underline-offset-2"
              >
                Manifesto
              </a>
            </li>
            <li className="text-mobai-gray">|</li>
            <li>
              <a
                href="/"
                className="decoration-mobai-gray underline decoration-2 underline-offset-2"
              >
                Portfolio
              </a>
            </li>
            <li className="text-mobai-gray">|</li>
            <li>
              <a
                href="/"
                className="decoration-mobai-gray underline decoration-2 underline-offset-2"
              >
                People
              </a>
            </li>
            <li className="text-mobai-gray">|</li>
            <li>
              <a
                href="/"
                className="decoration-mobai-gray underline decoration-2 underline-offset-2"
              >
                Apply
              </a>
            </li>
          </ul>
        </nav>
        <p className="text-mobai-gray text-lg">
          We don’t fund decks. We fund obsessions
        </p>
      </div>
    </div>
  );
};

export default A2;
