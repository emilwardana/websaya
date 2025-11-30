export default function Footer() {
  return (
    <footer className="bg-[var(--color-surface)] py-6 md:py-8 text-center text-xs md:text-sm font-bold border-t-4 border-[var(--color-primary)] px-4">
      © {new Date().getFullYear()} Emil Wardana. All rights reserved.
    </footer>
  );
}
