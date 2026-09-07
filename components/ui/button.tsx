import Link from "next/link";
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

function cx(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md";

const variantClasses: Record<Variant, string> = {
  primary: "bg-rust text-leather-dark",
  secondary: "bg-leather text-cream border border-leather-line",
  ghost: "bg-transparent text-ink border border-paper-line",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-sm",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-md font-medium transition-[transform,background-color,color] duration-150 hover:scale-105 hover:bg-rust hover:text-leather-dark active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rust";

export function Button({
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant; size?: Size }) {
  return (
    <button className={cx(base, variantClasses[variant], sizeClasses[size], className)} {...props} />
  );
}

export function LinkButton({
  variant = "primary",
  size = "md",
  className,
  href,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: Variant; size?: Size; href: string }) {
  const isExternal = href.startsWith("http");
  const classes = cx(base, variantClasses[variant], sizeClasses[size], className);
  if (isExternal) {
    return <a href={href} target="_blank" rel="noreferrer noopener" className={classes} {...props} />;
  }
  return (
    <Link href={href} className={classes} {...props}>
      {props.children}
    </Link>
  );
}
