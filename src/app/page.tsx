import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-20">
      <div className="rounded-3xl border border-[var(--border-color)] bg-white/90 p-8 shadow-[0_20px_55px_rgba(14,62,90,0.16)] md:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--text-muted)]">OptiZenqor Healthcare</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-bold text-[var(--text-strong)] md:text-5xl">Global Medical Dashboard System</h1>
        <p className="mt-5 max-w-2xl text-lg text-[var(--text-muted)]">Safety-first command center for admins, doctors, and patients with role-aware navigation and non-diagnostic AI guidance.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild><Link href="/dashboard/admin/overview">Enter Admin Dashboard</Link></Button>
          <Button asChild variant="secondary"><Link href="/dashboard/doctor/overview">Enter Doctor Dashboard</Link></Button>
          <Button asChild variant="outline"><Link href="/dashboard/patient/home">Enter Patient Dashboard</Link></Button>
        </div>
      </div>
    </main>
  );
}
