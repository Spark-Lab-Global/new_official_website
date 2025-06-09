import { useTranslations } from "@/i18n/utils";

interface C2Props {
  t: ReturnType<typeof useTranslations>;
  imageSrc?: string;
}

const C2 = ({ t, imageSrc }: C2Props) => {
  // Parse content to extract intro and bullet points
  const content = t("c2.content") as string;
  const contentParts = content.split('\n\n');
  const intro = contentParts[0];

  // Extract bullet points (items starting with "- ")
  const bulletPoints = contentParts[1]?.split('\n')
    .filter((line: string) => line.trim().startsWith('- '))
    .map((line: string) => line.trim().substring(2)) || [];

  // Get conclusion (anything after bullets)
  const conclusion = contentParts[2] || '';

  return (
    <div className="px-10 pb-20">
      <div className="mx-auto flex max-w-screen-xl flex-col items-center gap-20">
        <div className="flex flex-col items-center gap-20">
          <img src={imageSrc} alt="Lean Startup" />

          <div className="text-mobai-gray w-full text-base lg:text-lg flex flex-col gap-10">
            {/* Introduction */}
            <p>{intro}</p>

            {/* Bullet Points */}
            {bulletPoints.length > 0 && (
              <ul className="flex flex-col gap-6">
                {bulletPoints.map((point: string, index: number) => (
                  <li key={index} className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="bg-foreground w-2 h-2 rounded-full"></div>
                    </div>
                    <p>{point}</p>
                  </li>
                ))}
              </ul>
            )}

            {/* Conclusion */}
            {conclusion && <p className="mt-4">{conclusion}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default C2;
