import { appointments } from "@/lib/mock-data";
import { Input } from "@/components/ui/input";
import { AppointmentCard } from "@/components/dashboard/AppointmentCard";

export default function AdminAppointmentsPage() {
  return (
    <section className="space-y-5">
      <h1 className="text-3xl font-bold">Appointments Management</h1>
      <div className="grid gap-3 sm:grid-cols-4">
        <Input placeholder="Filter by date" />
        <Input placeholder="Filter by country" />
        <Input placeholder="Filter by doctor" />
        <Input placeholder="Filter by patient" />
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        {appointments.map((appointment) => (
          <AppointmentCard key={appointment.id} appointment={appointment} />
        ))}
      </div>
    </section>
  );
}
