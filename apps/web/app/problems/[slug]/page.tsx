import React from "react";
import { getProblem } from "@/actions/problem/getProblem";
import { ProblemSubmitBar } from "@/components/ProblemSubmitBar";
import { ProblemComponent } from "@/components/ProblemComponent";
import ProblemPlayground from "@/components/ProblemPlayground";

export default async function page({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const problem = await getProblem(slug);
  if (!problem) {
    return <div>Problem not found</div>;
  }
  return (
    <main className="bg-background text-foreground min-h-[calc(100vh-72px)] pt-6 px-4 pb-6 flex flex-col sm:flex-row gap-6">
      <section className="flex-1">
        <ProblemComponent problem={problem} />
      </section>
      <section className="flex-1">
        <ProblemPlayground problem={problem} />
      </section>
    </main>
  );
}
