import Linkedin from "@/components/icon/Linkedin";
import X from "@/components/icon/X";
import XiaoHongShu from "@/components/icon/XiaoHongShu";

const Footer = () => {
  return (
    <div className="p-4 py-10">
      <div className="mx-auto flex max-w-screen-2xl flex-row items-center justify-between">
        <p className="text-mobai-gray font-serif text-xl">© 2025 Spark Lab</p>
        <div className="flex flex-row items-center gap-6">
          <Linkedin className="text-mobai-black size-6" />
          <X className="text-mobai-black size-6" />
          <XiaoHongShu className="text-mobai-black size-9" />
        </div>
        <p className="text-mobai-black font-serif text-xl font-bold">
          Careers丨Solar Grants
        </p>
      </div>
    </div>
  );
};

export default Footer;
