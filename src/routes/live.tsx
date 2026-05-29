import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/live")({
  component: LivePage,
});

function LivePage() {
  useEffect(() => {
    window.location.replace("/live.html");
  }, []);
  return (
    <div className="flex min-h-screen items-center justify-center bg-background text-muted-foreground">
      Loading live view…
    </div>
  );
}
