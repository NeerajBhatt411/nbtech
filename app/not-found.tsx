import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-4">
      <h1 className="text-2xl font-semibold text-foreground">404 — Page not found</h1>
      <p className="text-center text-white/70">
        The page you are looking for does not exist.
      </p>
      <Button href="/" variant="primary">
        Back to home
      </Button>
    </div>
  );
}
