export function Footer() {
  return (
    <footer className="border-t border-paper-line py-10 text-center text-sm text-ink-soft">
      <p>© {new Date().getFullYear()} Josias Fabian</p>
      <p className="mt-1">
        <a href="https://github.com/j05145" target="_blank" rel="noreferrer" className="text-rust-text hover:underline">
          GitHub
        </a>
      </p>
    </footer>
  );
}
