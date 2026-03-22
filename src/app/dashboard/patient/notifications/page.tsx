import { notifications } from "@/lib/mock-data";
import { NotificationCard } from "@/components/dashboard/NotificationCard";

export default function PatientNotificationsPage() {
  return (
    <section className="space-y-5">
      <h1 className="text-3xl font-bold">Notifications</h1>
      <div className="grid gap-4 lg:grid-cols-3">
        {notifications.map((item) => (
          <NotificationCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
