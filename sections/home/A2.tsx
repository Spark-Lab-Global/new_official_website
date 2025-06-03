interface A2Props {
  t: (
    key:
      | "nav.about"
      | "nav.manifesto"
      | "nav.portfolio"
      | "nav.people"
      | "nav.apply",
  ) => string;
  translatePath: (path: string) => string;
}

const A2 = ({ t, translatePath }: A2Props) => {
  return (
    <div className="flex flex-col items-center gap-10 p-10">
      <div className="flex flex-col items-center gap-10">
        <h2 className="text-3xl font-bold lg:text-5xl">
          <span className="text-mobai-orange decoration-mobai-orange underline decoration-2 underline-offset-6">
            Spark
          </span>
          <span className="text-mobai-gray decoration-mobai-gray underline decoration-2 underline-offset-6">
            {" "}
            the New Renaissance.
          </span>
        </h2>
        <div className="flex flex-col items-center gap-1">
          <p className="text-mobai-gray text-base lg:text-lg">
            从 Spark 到 Startup，
          </p>
          <p className="text-mobai-gray text-base lg:text-lg">
            我们帮年轻创始人一路燃烧，写进历史。
          </p>
        </div>
      </div>
      <div className="flex w-full flex-col items-center gap-1">
        <nav>
          <ul className="text-mobai-gray flex flex-row items-center gap-2 text-base lg:text-lg">
            <li>
              <a
                href={translatePath("/manifesto")}
                className="decoration-mobai-gray underline decoration-1 underline-offset-2"
              >
                {t("nav.manifesto")}
              </a>
            </li>
            <li className="text-mobai-gray">|</li>
            <li>
              <a
                href={translatePath("/portfolio")}
                className="decoration-mobai-gray underline decoration-1 underline-offset-2"
              >
                {t("nav.portfolio")}
              </a>
            </li>
            <li className="text-mobai-gray">|</li>
            <li>
              <a
                href={translatePath("/people")}
                className="decoration-mobai-gray underline decoration-1 underline-offset-2"
              >
                {t("nav.people")}
              </a>
            </li>
            <li className="text-mobai-gray">|</li>
            <li>
              <a
                href={translatePath("/apply")}
                className="decoration-mobai-gray underline decoration-1 underline-offset-2"
              >
                {t("nav.apply")}
              </a>
            </li>
          </ul>
        </nav>
        <p className="text-mobai-gray text-base lg:text-lg">
          我们不投资 BP，只为热爱买单
        </p>
      </div>
    </div>
  );
};

export default A2;
