import Link from "next/link";

export default function LinkButton({
  url = "",
  targetBlank = false,
  icon = HTMLElement,
  innerText = "",
  className = "",
  ...props
}) {
  return (
    <Link
      href={url}
      target={targetBlank ? "_blank" : undefined}
      className={`w-fit mt-6 rounded-lg transition-all hover:scale-105 overflow-hidden shadow-md ${className}`}
      {...props}
    >
      <div className="inline-flex bg-primary/50 items-center justify-center gap-2 text-sm px-5 py-2 transition-all hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 hover:scale-105">
        {icon && icon}
        {innerText}
      </div>
    </Link>
  );
}
