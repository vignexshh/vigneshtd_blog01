"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./theme";

interface ChipProps {
  text: string;
  selected: boolean;
}

const tabs = [
  { name: "Home", path: "/" },
  { name: "Posts", path: "/posts" },
  { name: "About", path: "/about" },
];

const NavBar = () => {
  const pathname = usePathname();
  return (
    <div className="flex items-center mb-8 gap-5">
      {" "}
      <div className="flex items-center flex-wrap gap-5">
        {tabs.map((tab, index) => (
          <Link href={tab.path} key={index}>
            <Chip
              text={tab.name}
              selected={pathname === tab.path}
              key={tab.name}
            />
          </Link>
        ))}
      </div>
      <div>
        <ThemeToggle />
      </div>
    </div>
  );
};

const Chip: React.FC<ChipProps> = ({ text, selected }) => {
  return (
    <button
      className={`${
        selected
          ? "text-white"
          : "text-neutral-800 dark:text-neutral-100 hover:text-neutral-500 dark:hover:text-neutral-500"
      } text-sm transition-colors px-2 py-1 rounded-md relative`}
    >
      <span className="relative z-10">{text}</span>
      {selected && (
        <motion.span
          layoutId="chip-background"
          transition={{ type: "linear", duration: 0.2 }}
          className="absolute inset-0 z-0 bg-neutral-800 dark:bg-neutral-800 rounded-md"
        />
      )}
    </button>
  );
};

export default NavBar;
