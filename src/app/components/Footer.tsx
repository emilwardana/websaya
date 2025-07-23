'use client';

export default function Footer() {
  return (
    <footer className="py-10 text-center text-xs text-black/50 dark:text-white/40">
      © {new Date().getFullYear()} Emil Wardana. All rights reserved.
    </footer>
  );
}
