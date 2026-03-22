import { patients } from "@/lib/mock-data";
import { Input } from "@/components/ui/input";
import { PatientCard } from "@/components/dashboard/PatientCard";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function AdminPatientsPage() {
  return (
    <section className="space-y-5">
      <h1 className="text-3xl font-bold">Patients Management</h1>
      <div className="grid gap-3 sm:grid-cols-3">
        <Input placeholder="Search patient" />
        <Input placeholder="Filter by country" />
        <Input placeholder="Filter by status" />
      </div>
      <div className="overflow-hidden rounded-2xl border border-[var(--border-color)] bg-white">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Patient Name</TableHead>
              <TableHead>Age</TableHead>
              <TableHead>Country</TableHead>
              <TableHead>Last Appointment</TableHead>
              <TableHead>Recent Symptom Activity</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {patients.map((patient) => (
              <TableRow key={patient.id}>
                <TableCell>{patient.name}</TableCell>
                <TableCell>{patient.age}</TableCell>
                <TableCell>{patient.country}</TableCell>
                <TableCell>{patient.lastAppointment}</TableCell>
                <TableCell>{patient.recentSymptomActivity}</TableCell>
                <TableCell>{patient.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <h2 className="text-xl font-semibold">Patient Profile Quick View</h2>
      <div className="grid gap-4 md:grid-cols-3">
        {patients.map((patient) => (
          <PatientCard key={patient.id} patient={patient} />
        ))}
      </div>
    </section>
  );
}
