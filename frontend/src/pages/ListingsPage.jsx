import { useEffect } from "react";
import { MARKETPLACE_URL } from "@/lib/constants";

export default function ListingsPage() {
  useEffect(() => {
    window.location.href = MARKETPLACE_URL;
  }, []);

  return (
    <div className="flex items-center justify-center py-32">
      <p className="text-sm text-muted-foreground">
        Redirecting to the Campus Needs Exchange…
      </p>
    </div>
  );
}
