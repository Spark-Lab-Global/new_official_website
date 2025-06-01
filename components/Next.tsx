const Next = ({ href, title }: { href?: string; title: string }) => {
  return (
    <a href={href ?? "/"} className="p-4">
      <div className="mx-auto flex max-w-screen-2xl flex-col items-center gap-2 bg-[#F4F4F4] py-16">
        <p className="text-mobai-gray text-3xl">Next</p>
        <p className="text-4xl font-bold">{title}</p>
      </div>
    </a>
  );
};

export default Next;
