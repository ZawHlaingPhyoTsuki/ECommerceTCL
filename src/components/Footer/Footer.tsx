import { ModeToggle } from "../ui/mode-toggle";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 py-6 text-sm dark:border-neutral-700">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-1 px-4 md:flex-row md:gap-0 md:px-4 min-[1320px]:px-0">
        <p>© 2023-2025 ACME, Inc. All rights reserved.</p>
        <hr className="mx-4 hidden h-4 w-[1px] border-l border-neutral-400 md:inline-block" />
        <p>Hello</p>
        <p className="md:ml-auto">
          <a href="https://vercel.com" className="text-black dark:text-white">
            Created by ▲ Vercel
          </a>
        </p>
      </div>
      <ModeToggle />
    </footer>
  );
}
