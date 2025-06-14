import { useTranslations } from "@/i18n/utils";

interface JoinTeamProps {
  t: ReturnType<typeof useTranslations>;
}

const JoinTeam = ({ t }: JoinTeamProps) => {
  return (
    <div className="py-20">
      <div className="mx-auto flex w-full max-w-screen-xl flex-col items-center text-center gap-10">
        <div className="text-foreground font-title flex text-3xl font-bold lg:text-5xl">
          {t("team.join.title")}
        </div>
        <p className="text-mobai-gray text-base max-w-3xl lg:text-lg">
          {t("team.join.description")}
        </p>
        <a
          href="mailto:support@sparklab.city"
          className="inline-flex items-center justify-center px-8 py-3 bg-black text-white rounded-full hover:bg-opacity-90 transition-all text-lg"
        >
          {t("team.join.button")}
        </a>
      </div>
    </div>
  );
};

export default JoinTeam; 