import { SITE_NAME } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background">
      <div className="mx-auto max-w-7xl px-4 py-6 text-center text-sm text-white/70 sm:px-6 lg:px-8">
        © {new Date().getFullYear()} {SITE_NAME}. Built with Next.js.
      </div>
    </footer>
  );
}
