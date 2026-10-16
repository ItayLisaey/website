import type { StaticImageData } from "next/image";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type EntityLinkProps = {
  href: string;
  logo: string | StaticImageData;
  name: string;
  /** Brand colors for the badge, e.g. "bg-novana/10 text-novana". */
  className?: string;
  /** Punctuation that should hug the badge instead of wrapping away from it. */
  after?: string;
};

export function EntityLink({
  href,
  logo,
  name,
  className,
  after,
}: EntityLinkProps) {
  const badge = (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center gap-1 rounded-[4px] px-1.5 py-1 align-[-0.12em] text-[0.95em] leading-none font-normal whitespace-nowrap transition-opacity hover:opacity-80",
        className,
      )}
    >
      <Image
        src={logo}
        alt=""
        width={14}
        height={14}
        className="size-3.5 rounded-[3px]"
      />
      {name}
    </Link>
  );

  if (!after) return badge;

  return (
    <span className="whitespace-nowrap">
      {badge}
      <span className="-ml-[4px]">{after}</span>
    </span>
  );
}
