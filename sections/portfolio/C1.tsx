import { useTranslations } from "@/i18n/utils";

interface C1Props {
  t: ReturnType<typeof useTranslations>;
}

const WeDontCare = ({ t }: C1Props) => {
  return (
    <div className="flex justify-end gap-8 md:items-center">
      {/* 文字内容在左侧 */}
      <div className="flex flex-col gap-6 text-right">
        <p className="text-foreground font-serif text-lg font-bold lg:text-xl">
          We don't care
        </p>
        <ol className="text-mobai-gray list-decimal space-y-4 pl-6 text-base lg:text-lg">
          {(t("c1.weDontCareList") as string[]).map(
            (item: string, index: number) => (
              <li className="pl-4 text-right md:whitespace-nowrap" key={index}>
                <p className="line-through decoration-1">{item}</p>
              </li>
            ),
          )}
        </ol>
      </div>
      {/* 右半圆边框 - 在手机上隐藏，电脑上显示 */}
      <div className="border-mobai-gray hidden h-80 w-40 rounded-r-full border-3 border-l-0 md:block"></div>
    </div>
  );
};

const WeCareAbout = ({ t }: C1Props) => {
  return (
    <div className="flex items-center gap-8">
      {/* 左半圆边框 - 在手机上隐藏，电脑上显示 */}
      <div className="border-mobai-gray hidden h-80 w-40 rounded-l-full border-3 border-r-0 md:block"></div>
      {/* 文字内容在右侧 */}
      <div className="flex flex-col gap-6">
        <p className="text-foreground font-serif text-lg font-bold lg:text-xl">
          We care about
        </p>
        <ol className="text-mobai-gray list-decimal space-y-4 pl-6 text-base lg:text-lg">
          {(t("c1.weCareAboutList") as string[]).map(
            (item: string, index: number) => (
              <li className="pl-4 md:whitespace-nowrap" key={index}>
                <p>{item}</p>
              </li>
            ),
          )}
        </ol>
      </div>
    </div>
  );
};

const C1 = ({ t }: C1Props) => {
  return (
    <div className="p-10">
      <div className="mx-auto flex max-w-screen-xl flex-col gap-20">
        <h2 className="text-foreground font-title text-3xl font-bold lg:text-5xl">
          How We Spark You
        </h2>
        <div className="flex flex-col gap-10">
          {/* 相交的半圆容器 */}
          <div className="relative flex flex-col gap-20 md:items-center md:justify-center lg:flex-row">
            {/* 左侧：文字 + 右半圆 */}
            <div className="relative z-10 lg:-mr-15">
              <WeDontCare t={t} />
            </div>
            {/* 右侧：左半圆 + 文字，向左偏移创建相交效果 */}
            <div className="relative z-10 lg:-ml-15">
              <WeCareAbout t={t} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default C1;
