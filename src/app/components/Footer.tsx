export default function Footer() {
  return (
    <footer className="bg-[var(--color-primary)] text-[var(--color-text)] py-5 text-center text-xs">
      © {new Date().getFullYear()} Emil Wardana. All rights reserved.
    </footer>
  );
}
