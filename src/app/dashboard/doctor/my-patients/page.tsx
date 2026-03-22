import { patients } from "@/lib/mock-data";
import { PatientCard } from "@/components/dashboard/PatientCard";
import { Button } from "@/components/ui/button";

export default function DoctorMyPatientsPage() {
  return (
    <section className="space-y-5">
      <h1 className="text-3xl font-bold">My Patients</h1>
      <div className="grid gap-4 md:grid-cols-3">
        {patients.map((patient) => (
          <PatientCard key={patient.id} patient={patient} />
        ))}
      </div>
      <div className="flex flex-wrap gap-3">
        <Button>Add Notes</Button>
        <Button variant="secondary">Mark Follow-Up</Button>
        <Button variant="outline">Recommend Test</Button>
        <Button variant="secondary">Schedule Next Visit</Button>
      </div>
    </section>
  );
}
