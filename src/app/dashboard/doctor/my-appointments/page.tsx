import { appointments } from "@/lib/mock-data";
import { Input } from "@/components/ui/input";
import { AppointmentCard } from "@/components/dashboard/AppointmentCard";

export default function DoctorMyAppointmentsPage() {
  return (
    <section className="space-y-5">
      <h1 className="text-3xl font-bold">My Appointments</h1>
      <div className="grid gap-3 sm:grid-cols-2">
        <Input placeholder="Filter by status" />
        <Input placeholder="Filter by date" />
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        {appointments.map((appointment) => (
          <AppointmentCard key={appointment.id} appointment={appointment} />
        ))}
      </div>
    </section>
  );
}
