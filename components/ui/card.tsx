function cx(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cx(
        "rounded-lg border border-paper-line bg-paper-dark/60 p-6 transition-[transform,border-color] duration-200 hover:-translate-y-0.5 hover:border-rust/60",
        className
      )}
      {...props}
    />
  );
}
