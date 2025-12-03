export default function Footer() {
  return (
    <footer className="bg-[var(--color-surface)] py-3 md:py-4 text-center text-xs font-bold border-t-4 border-[var(--color-primary)] px-4 flex-shrink-0">
      © {new Date().getFullYear()} Emil Wardana. All rights reserved.
    </footer>
  );
}
