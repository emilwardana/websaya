export default function Footer() {
  return (
    <footer className="bg-[var(--color-surface)] py-8 text-center text-sm font-bold border-t-4 border-[var(--color-primary)]">
      © {new Date().getFullYear()} Emil Wardana. All rights reserved.
    </footer>
  );
}
