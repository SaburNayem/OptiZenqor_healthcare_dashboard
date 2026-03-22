"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AlertBanner } from "@/components/dashboard/AlertBanner";
import { ConfidenceBadge } from "@/components/dashboard/ConfidenceBadge";
import { UrgencyBadge } from "@/components/dashboard/UrgencyBadge";

const steps = ["Patient details", "Symptom selection", "Dynamic safety questions", "Analysis results"];

export default function PatientSymptomCheckerPage() {
  const [step, setStep] = useState(0);
  const [critical, setCritical] = useState(false);
  const urgency = useMemo(() => (critical ? "CRITICAL" : "MEDIUM"), [critical]);

  return (
    <section className="space-y-5">
      <h1 className="text-3xl font-bold">Symptom Checker</h1>
      <p className="text-[var(--text-muted)]">Guided flow for safe symptom triage. Output is assistive and non-diagnostic.</p>
      <div className="grid gap-3 sm:grid-cols-4">
        {steps.map((label, i) => (
          <div key={label} className={`rounded-xl border p-3 text-sm ${i === step ? "border-[var(--brand-primary)] bg-[var(--surface-secondary)]" : "border-[var(--border-color)] bg-white"}`}>
            {i + 1}. {label}
          </div>
        ))}
      </div>
      {step < 3 ? (
        <div className="rounded-2xl border border-[var(--border-color)] bg-white p-5">
          <p className="text-sm text-[var(--text-muted)]">Step {step + 1}: {steps[step]}</p>
          <p className="mt-2 text-sm text-[var(--text-muted)]">Enter information carefully. If severe chest pain, breathing distress, or loss of consciousness is present, use emergency services immediately.</p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Button variant="outline" onClick={() => setCritical((v) => !v)}>Toggle Critical Scenario</Button>
            <Button onClick={() => setStep((v) => Math.min(v + 1, 3))}>Next</Button>
          </div>
        </div>
      ) : (
        <div className="space-y-4 rounded-2xl border border-[var(--border-color)] bg-white p-5">
          <AlertBanner text="Possible conditions are guidance only and must be reviewed by a licensed clinician." />
          <p className="text-lg font-semibold">Possible Conditions (Cautious Wording)</p>
          <ul className="list-disc space-y-1 pl-5 text-sm text-[var(--text-muted)]">
            <li>May be related to mild respiratory irritation.</li>
            <li>Could align with transient viral symptoms.</li>
          </ul>
          <div className="flex flex-wrap gap-2">
            <UrgencyBadge value={urgency} />
            <ConfidenceBadge value={critical ? "HIGH" : "MEDIUM"} />
          </div>
          <p className="text-sm text-[var(--text-muted)]">Suggested doctor type: Internal Medicine</p>
          <div className="rounded-xl bg-[var(--surface-secondary)] p-4 text-sm text-[var(--text-muted)]">Safety action checklist: hydrate, monitor severe symptoms, seek urgent care if condition worsens.</div>
          {critical ? <Button asChild variant="danger"><Link href="/emergency">Critical: Go to Emergency Guidance</Link></Button> : null}
        </div>
      )}
    </section>
  );
}
