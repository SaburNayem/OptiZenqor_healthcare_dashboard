import { appointments } from "@/lib/mock-data";
import { AppointmentCard } from "@/components/dashboard/AppointmentCard";

export default function PatientAppointmentsPage() {
  const groups = {
    upcoming: appointments.filter((a) => a.status === "upcoming"),
    ongoing: appointments.filter((a) => a.status === "ongoing"),
    completed: appointments.filter((a) => a.status === "completed"),
    cancelled: appointments.filter((a) => a.status === "cancelled"),
  };
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold">My Appointments</h1>
      {(Object.keys(groups) as Array<keyof typeof groups>).map((status) => (
        <div key={status} className="space-y-3">
          <h2 className="text-xl font-semibold capitalize">{status}</h2>
          <div className="grid gap-4 lg:grid-cols-2">
            {groups[status].map((appointment) => (
              <AppointmentCard key={appointment.id} appointment={appointment} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
