export default function Footer() {
  return (
    <footer className="w-full bg-[var(--color-surface)] py-3 md:py-4 text-center text-xs font-bold border-t-4 border-[var(--color-primary)] px-4 mt-auto relative z-10">
      © {new Date().getFullYear()} Emil Wardana. All rights reserved.
    </footer>
  );
}
