import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <h1 className="text-2xl">Article Not Found</h1>
      <Button variant="ghost" asChild className="mb-4 p-0 hover:bg-transparent">
        <Link
          href="/blog"
          className="inline-flex items-center text-lg font-medium"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to blog
        </Link>
      </Button>
    </div>
  );
}
