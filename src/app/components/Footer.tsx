export default function Footer() {
  return (
    <footer className="bg-[var(--color-primary)] py-6 text-center text-xs text-[var(--color-text)]/70">
      © {new Date().getFullYear()} Emil Wardana. All rights reserved.
    </footer>
  );
}
