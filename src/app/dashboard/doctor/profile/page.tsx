import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function DoctorProfilePage() {
  return (
    <section className="space-y-5">
      <h1 className="text-3xl font-bold">Doctor Profile</h1>
      <Card>
        <CardHeader><CardTitle>Professional Information</CardTitle></CardHeader>
        <CardContent className="space-y-2 text-sm text-[var(--text-muted)]">
          <p>Name: Dr. Alex Carter</p>
          <p>Specialization: Internal Medicine</p>
          <p>Experience: 12 years</p>
          <p>Rating: 4.8 / 5.0</p>
          <p>Languages: English, Arabic, Spanish</p>
          <p>Availability: Online consultations enabled</p>
        </CardContent>
      </Card>
    </section>
  );
}
