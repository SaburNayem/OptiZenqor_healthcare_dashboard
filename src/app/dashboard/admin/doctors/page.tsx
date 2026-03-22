import { doctors } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import { DoctorCard } from "@/components/dashboard/DoctorCard";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function AdminDoctorsPage() {
  return (
    <section className="space-y-5">
      <h1 className="text-3xl font-bold">Doctors Management</h1>
      <div className="overflow-hidden rounded-2xl border border-[var(--border-color)] bg-white">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Specialization</TableHead>
              <TableHead>Rating</TableHead>
              <TableHead>Experience</TableHead>
              <TableHead>Country</TableHead>
              <TableHead>Availability</TableHead>
              <TableHead>Active Appointments</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {doctors.map((doctor) => (
              <TableRow key={doctor.id}>
                <TableCell>{doctor.name}</TableCell>
                <TableCell>{doctor.specialization}</TableCell>
                <TableCell>{doctor.rating}</TableCell>
                <TableCell>{doctor.experience} yrs</TableCell>
                <TableCell>{doctor.country}</TableCell>
                <TableCell>{doctor.availability}</TableCell>
                <TableCell>{doctor.activeAppointments}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="flex flex-wrap gap-3">
        <Button>Approve Doctor</Button>
        <Button variant="outline">Suspend Doctor</Button>
        <Button variant="secondary">View Schedule</Button>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {doctors.map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </div>
    </section>
  );
}
