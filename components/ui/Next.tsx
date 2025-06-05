const Next = ({ href, title }: { href?: string; title: string }) => {
  return (
    <a href={href ?? "/"} className="block md:hidden">
      <div className="flex flex-col items-center gap-2 bg-[#2A2B28] py-16">
        <p className="text-mobai-gray text-3xl">Next</p>
        <p className="text-4xl font-bold">{title}</p>
      </div>
    </a>
  );
};

export default Next;
