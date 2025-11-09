import { Button } from "@/components/ui/button";
import PragmaticanLogo from "@/public/pragmatican-logo.svg";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
            <p className="text-foreground/50 text-sm">Tokyo, Japan</p>
          </div>
        </div>

        {/* About Description */}
        <p className="text-foreground/70 mb-8 leading-relaxed">
          Engineer and technical leader specializing in AI-native products, LLM
          workflows, and cloud architecture. Currently consulting at{" "}
          <Link
            href="https://pragmatican.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline"
          >
            Pragmatican
          </Link>
          , previously worked on generative AI systems at{" "}
          <Link
            href="https://chordio.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline"
          >
            Chordio
          </Link>{" "}
          and led development teams building critical systems in a Government
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
          <Button variant="default" className="cursor-pointer " asChild>
            <Link
              href="https://pragmatican.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-0"
            >
              <Image
                src={PragmaticanLogo}
                alt="Pragmatican"
                width={20}
                height={20}
              />
              Pragmatican
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </main>
    </div>
  );
}
