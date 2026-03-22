import { doctors } from "@/lib/mock-data";
import { Input } from "@/components/ui/input";
import { DoctorCard } from "@/components/dashboard/DoctorCard";
import { Button } from "@/components/ui/button";

export default function PatientFindDoctorsPage() {
  return (
    <section className="space-y-5">
      <h1 className="text-3xl font-bold">Find Doctors</h1>
      <div className="grid gap-3 sm:grid-cols-4">
        <Input placeholder="Specialization" />
        <Input placeholder="Country" />
        <Input placeholder="Minimum rating" />
        <Input placeholder="Availability" />
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {doctors.map((doctor) => (
          <div key={doctor.id} className="space-y-3">
            <DoctorCard doctor={doctor} />
            <Button className="w-full">Book Appointment</Button>
          </div>
        ))}
      </div>
    </section>
  );
}
