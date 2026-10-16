import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { EntityLink } from "@/components/entity-link";
import { Button } from "@/components/ui/button";
import ChordioLogo from "@/public/chordio-logo.svg";
import NovanaLogo from "@/public/novana-logo.png";
import PragmaticanLogo from "@/public/pragmatican-logo.svg";

export default function Home() {
  return (
    <div className="min-h-[95dvh] bg-background flex items-start justify-start">
      <main className="max-w-xl mx-auto px-6 py-32">
        {/* Avatar and Name */}
        <div className="flex items-center gap-4 mb-4">
          <Image
            src="/avatar.svg"
            alt="Itay Lisaey"
            width={48}
            height={48}
            className="rounded-full"
          />
          <div>
            <h1 className="text-2xl font-semibold">Itay Lisaey</h1>
            <p className="text-foreground/70 text-sm">
              Co-Founder &amp; CTO @ Novana
            </p>
            <p className="text-foreground/50 text-sm">Tokyo, Japan</p>
          </div>
        </div>

        {/* About Description */}
        <p className="text-foreground/70 mb-4 leading-relaxed">
          Leading product and technology at{" "}
          <EntityLink
            href="https://novana.io"
            logo={NovanaLogo}
            name="Novana"
            className="bg-novana/10 text-novana"
            after=","
          />{" "}
          where we&apos;re bringing clarity and intelligence to K-12 schools.
        </p>

        <p className="text-foreground/70 mb-4 leading-relaxed">
          Engineer focused on AI-native solutions, LLM systems, and the cloud
          infrastructure behind them.
          <br />I take on select consulting projects through{" "}
          <EntityLink
            href="https://pragmatican.com"
            logo={PragmaticanLogo}
            name="Pragmatican"
            className="bg-pragmatican/10 text-pragmatican"
            after="."
          />
        </p>

        <p className="text-foreground/70 mb-8 leading-relaxed">
          Previously built generative AI systems at{" "}
          <EntityLink
            href="https://chordio.com"
            logo={ChordioLogo}
            name="Chordio"
            className="bg-chordio-tint/35 text-chordio"
          />{" "}
          and led development teams building critical systems in a government
          organization.
        </p>

        {/* Social Links */}
        <div className="flex gap-3">
          <Button variant="outline" size="icon" asChild>
            <a
              href="https://github.com/ItayLisaey"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>GitHub</title>
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </a>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <a
              href="https://linkedin.com/in/itaylisaey"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>LinkedIn</title>
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <a href="mailto:itay@lisaey.com" aria-label="Email">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>Email</title>
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </a>
          </Button>
          <Button
            variant="default"
            className="cursor-pointer bg-novana text-white hover:bg-novana/90"
            asChild
          >
            <Link
              href="https://novana.io"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-0"
            >
              Check out
              <span className="inline-flex items-center gap-1.5">
                <Image
                  src={NovanaLogo}
                  alt=""
                  width={16}
                  height={16}
                  className="size-4 rounded-[3px]"
                />
                Novana
              </span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </main>
    </div>
  );
}
