import { Button } from "@/components/ui/button";

export default function EmergencyPage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#7f1111_0%,#b22020_100%)] px-6 py-10 text-white">
      <section className="mx-auto max-w-4xl space-y-6 rounded-3xl border border-red-200/30 bg-red-900/35 p-8 backdrop-blur">
        <p className="text-sm uppercase tracking-[0.2em] text-red-100">Emergency Alert</p>
        <h1 className="text-4xl font-bold leading-tight md:text-5xl">Seek immediate medical attention</h1>
        <p className="max-w-2xl text-lg text-red-50">This guidance is non-diagnostic and intended for urgent safety direction. Contact emergency services now if symptoms are severe.</p>
        <div className="rounded-2xl bg-red-950/30 p-5">
          <p className="text-lg font-semibold">Emergency checklist</p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-red-50">
            <li>Do not drive yourself if experiencing serious symptoms.</li>
            <li>Call local emergency services immediately.</li>
            <li>Share current symptoms, medications, and allergies.</li>
            <li>Keep a trusted contact informed.</li>
          </ul>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button variant="danger">Call Emergency</Button>
          <Button variant="outline">Find Nearest Hospital</Button>
          <Button variant="secondary">Consult Doctor</Button>
        </div>
      </section>
    </main>
  );
}
