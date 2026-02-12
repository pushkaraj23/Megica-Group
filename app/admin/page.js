"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AdminPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/admin/enquiries/group");
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-[40vh] text-sm text-muted">
      Redirecting…
    </div>
  );
}
