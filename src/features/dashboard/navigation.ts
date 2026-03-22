import type { NavigationItem, Role } from "@/lib/types";

export const roleNavigation: Record<Role, NavigationItem[]> = {
  admin: [
    { title: "Overview", href: "/dashboard/admin/overview" },
    { title: "Patients", href: "/dashboard/admin/patients" },
    { title: "Doctors", href: "/dashboard/admin/doctors" },
    { title: "Appointments", href: "/dashboard/admin/appointments" },
    { title: "Symptom Checker Activity", href: "/dashboard/admin/symptom-checker-activity" },
    { title: "Reports Intelligence", href: "/dashboard/admin/reports-intelligence" },
    { title: "Emergency Alerts", href: "/dashboard/admin/emergency-alerts" },
    { title: "Notifications", href: "/dashboard/admin/notifications" },
    { title: "Analytics", href: "/dashboard/admin/analytics" },
    { title: "Settings", href: "/dashboard/admin/settings" },
  ],
  doctor: [
    { title: "Overview", href: "/dashboard/doctor/overview" },
    { title: "My Appointments", href: "/dashboard/doctor/my-appointments" },
    { title: "My Patients", href: "/dashboard/doctor/my-patients" },
    { title: "Symptom Referrals", href: "/dashboard/doctor/symptom-referrals" },
    { title: "Reports Review", href: "/dashboard/doctor/reports-review" },
    { title: "Schedule", href: "/dashboard/doctor/schedule" },
    { title: "Notifications", href: "/dashboard/doctor/notifications" },
    { title: "Profile", href: "/dashboard/doctor/profile" },
  ],
  patient: [
    { title: "Home", href: "/dashboard/patient/home" },
    { title: "Symptom Checker", href: "/dashboard/patient/symptom-checker" },
    { title: "Find Doctors", href: "/dashboard/patient/find-doctors" },
    { title: "My Appointments", href: "/dashboard/patient/my-appointments" },
    { title: "Reports", href: "/dashboard/patient/reports" },
    { title: "History", href: "/dashboard/patient/history" },
    { title: "Notifications", href: "/dashboard/patient/notifications" },
    { title: "Profile", href: "/dashboard/patient/profile" },
  ],
};
