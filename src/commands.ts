export type CommandItem = {
  title: string;
  desc?: string;
  href: string;
  keywords?: string;
};

export const COMMANDS: CommandItem[] = [
  { title: "Home", href: "/", desc: "Back to landing", keywords: "main root" },
  {
    title: "Features",
    href: "/#features",
    desc: "Homepage section",
    keywords: "cards menu section",
  },
  {
    title: "About",
    href: "/about",
    desc: "Who I am & timeline",
    keywords: "bio timeline me",
  },
  {
    title: "Playground",
    href: "/playground",
    desc: "Experiments, apps & games",
    keywords: "projects experiments code",
  },
  {
    title: "Digital Garden",
    href: "/digital-garden",
    desc: "Open notes & research",
    keywords: "blog notes research garden",
  },
  {
    title: "Contact",
    href: "/contact",
    desc: "Let’s talk",
    keywords: "email socials talk",
  },
];
