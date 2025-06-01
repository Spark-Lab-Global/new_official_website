import SparkLab from "@/components/icon/SparkLab.tsx";

interface TitleBarProps {
  currentPath?: string;
}

const TitleBar = ({ currentPath = "/" }: TitleBarProps) => {
  const isRoot = currentPath === "/";
  const textColor = isRoot ? "text-mobai-gray" : "text-mobai-black";
  const bgColor = isRoot ? "bg-mobai-orange" : "bg-mobai-black";

  return (
    <div class="fixed top-0 z-50 flex w-full items-center justify-between p-6">
      <div className="mx-auto flex w-full max-w-screen-2xl items-center justify-between">
        <a href="/">
          <SparkLab class="h-12 w-12 fill-black" />
        </a>
        <nav className="flex flex-row items-center gap-4">
          <ul
            className={`${textColor} flex flex-row items-center gap-4 text-xl font-bold`}
          >
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/manifesto">Manifesto</a>
            </li>
            <li>
              <a href="/">Portfolio</a>
            </li>
            <li>
              <a href="/">People</a>
            </li>
          </ul>
          <button
            className={`${bgColor} rounded-full px-3 py-1 text-xl font-bold text-white`}
          >
            Apply
          </button>
        </nav>
      </div>
    </div>
  );
};

export default TitleBar;
