import useOnScroll from "@/hooks/useOnScroll";
import clsx from "clsx";
import IconPigMoney from "~icons/tabler/pig-money";

function Logo() {
  return (
    <div className="flex items-center gap-2 cursor-pointer">
      <IconPigMoney className="h-10 w-10 text-[#fcc307] hover:text-green-200 transition-colors" />
      <div className="text-xl font-black select-none">
        <span className={clsx("text-slate-900", "dark:text-slate-200")}>
          WAC
        </span>
        <span className={clsx("text-[#fcc307]", "dark:text-red-600")}>count</span>
      </div>
    </div>
  );
}

export function Header() {
  const isOpaque = useOnScroll(50);

  return (
    <header
      className={clsx(
        "fixed top-0 z-40 w-full flex-none transition-colors duration-300 lg:z-50 lg:border-slate-900/10 dark:border-slate-50/[0.06]",
        isOpaque
          // ? "bg-white supports-backdrop-blur:bg-white/95 dark:bg-slate-900/75"
          // : "bg-white/95 supports-backdrop-blur:bg-white/60 dark:bg-transparent"
          ? 'lg:border-b bg-white/95 supports-backdrop-blur:bg-white dark:bg-transparent'
          : 'bg-transparent supports-backdrop-blur:bg-transparent dark:bg-slate-900/75'
      )}
    >
      <div className="mx-auto max-w-[90rem]">
        <div className="py-2 border-b border-slate-900/10 lg:px-8 lg:border-0 dark:border-slate-300/10 mx-4 lg:mx-0">
          <Logo />
        </div>
      </div>
    </header>
  );
}
