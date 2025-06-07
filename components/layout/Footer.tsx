import Linkedin from "@/components/icon/Linkedin";
import X from "@/components/icon/X";
import XiaoHongShu from "@/components/icon/XiaoHongShu";

const Footer = () => {
  return (
    <div className="p-4 py-10">
      <div className="mx-auto flex max-w-screen-xl flex-row items-center justify-between">
        <p className="text-mobai-gray font-serif text-xl">© 2025 Spark Lab</p>
        <div className="flex flex-row items-center gap-6">
          <a
            href="https://cn.linkedin.com/company/spark-lab-china"
            target="_blank"
          >
            <Linkedin className="text-mobai-gray size-6" />
          </a>
          <a href="https://x.com/sparklab_city" target="_blank">
            <X className="text-mobai-gray size-6" />
          </a>
          <a
            href="https://www.xiaohongshu.com/user/profile/65b4ed30000000000e026f24"
            target="_blank"
          >
            <XiaoHongShu className="text-mobai-gray size-9" />
          </a>
        </div>
        <p className="text-mobai-gray hidden font-serif text-xl font-bold md:block">
          Careers丨Solar Grants
        </p>
      </div>
    </div>
  );
};

export default Footer;
