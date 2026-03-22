import {
  type Appointment,
  type Doctor,
  type Metric,
  type NotificationItem,
  type Patient,
  type ReportSummary,
  type SymptomSession,
  type TimelineItem,
} from "@/lib/types";

export const adminMetrics: Metric[] = [
  { label: "Total Patients", value: "12,480", delta: "+5.1%" },
  { label: "Total Doctors", value: "642", delta: "+1.7%" },
  { label: "Today Appointments", value: "1,146", delta: "+3.4%" },
  { label: "Active Cases", value: "382", delta: "-2.1%" },
  { label: "Emergency Alerts Today", value: "18", delta: "+0.6%" },
  { label: "Uploaded Reports Today", value: "974", delta: "+8.2%" },
];

export const doctorMetrics: Metric[] = [
  { label: "Today Appointments", value: "14", delta: "+2" },
  { label: "Pending Reviews", value: "9", delta: "+1" },
  { label: "Active Patients", value: "126", delta: "+4" },
  { label: "Urgent Referrals", value: "3", delta: "Now" },
];

export const patientMetrics: Metric[] = [
  { label: "Upcoming Appointments", value: "2" },
  { label: "Reports Uploaded", value: "11" },
  { label: "Pending Follow-Ups", value: "1" },
  { label: "Reminders This Week", value: "4" },
];

export const patients: Patient[] = [
  {
    id: "p1",
    name: "Amina Hassan",
    age: 42,
    country: "UAE",
    status: "stable",
    lastAppointment: "2026-03-21 10:30",
    recentSymptomActivity: "Mild chest discomfort",
    medicalHistorySummary: "Hypertension, annual cardiac monitoring",
  },
  {
    id: "p2",
    name: "Lucas Meyer",
    age: 66,
    country: "Germany",
    status: "follow-up",
    lastAppointment: "2026-03-20 15:00",
    recentSymptomActivity: "Dizziness and fatigue",
    medicalHistorySummary: "Type-2 diabetes, renal panel follow-up",
  },
  {
    id: "p3",
    name: "Sofia Alvarez",
    age: 29,
    country: "Spain",
    status: "critical",
    lastAppointment: "2026-03-22 08:40",
    recentSymptomActivity: "Severe abdominal pain",
    medicalHistorySummary: "Recent surgery, active post-op monitoring",
  },
];

export const doctors: Doctor[] = [
  {
    id: "d1",
    name: "Dr. Nora Kim",
    specialization: "Cardiology",
    rating: 4.9,
    experience: 14,
    country: "South Korea",
    availability: "online",
    activeAppointments: 8,
  },
  {
    id: "d2",
    name: "Dr. Omar Rahman",
    specialization: "Internal Medicine",
    rating: 4.7,
    experience: 11,
    country: "Egypt",
    availability: "online",
    activeAppointments: 11,
  },
  {
    id: "d3",
    name: "Dr. Maria Costa",
    specialization: "Neurology",
    rating: 4.8,
    experience: 9,
    country: "Brazil",
    availability: "offline",
    activeAppointments: 4,
  },
];

export const appointments: Appointment[] = [
  {
    id: "a1",
    patientName: "Amina Hassan",
    doctorName: "Dr. Nora Kim",
    country: "UAE",
    dateTime: "2026-03-22 09:30",
    reason: "Follow-up for blood pressure",
    status: "upcoming",
  },
  {
    id: "a2",
    patientName: "Lucas Meyer",
    doctorName: "Dr. Omar Rahman",
    country: "Germany",
    dateTime: "2026-03-22 11:15",
    reason: "Review fatigue and labs",
    status: "ongoing",
  },
  {
    id: "a3",
    patientName: "Sofia Alvarez",
    doctorName: "Dr. Maria Costa",
    country: "Spain",
    dateTime: "2026-03-21 17:20",
    reason: "Post-surgery review",
    status: "completed",
  },
  {
    id: "a4",
    patientName: "David Stone",
    doctorName: "Dr. Omar Rahman",
    country: "USA",
    dateTime: "2026-03-20 13:40",
    reason: "General consultation",
    status: "cancelled",
  },
];

export const reports: ReportSummary[] = [
  {
    id: "r1",
    patientName: "Amina Hassan",
    reportType: "CBC",
    confidence: "HIGH",
    abnormalMarkers: 1,
    status: "reviewed",
    aiSummary: "Mild anemia indicators. Recommend physician review.",
  },
  {
    id: "r2",
    patientName: "Lucas Meyer",
    reportType: "Renal Panel",
    confidence: "MEDIUM",
    abnormalMarkers: 3,
    status: "urgent",
    aiSummary: "Elevated creatinine values detected.",
  },
  {
    id: "r3",
    patientName: "Sofia Alvarez",
    reportType: "Liver Function",
    confidence: "HIGH",
    abnormalMarkers: 0,
    status: "pending",
    aiSummary: "No major outliers detected in uploaded report.",
  },
];

export const symptomSessions: SymptomSession[] = [
  {
    id: "s1",
    patientName: "Amina Hassan",
    urgency: "MEDIUM",
    suggestedDoctorType: "Cardiology",
    confidence: "HIGH",
    createdAt: "2026-03-21 22:10",
  },
  {
    id: "s2",
    patientName: "Lucas Meyer",
    urgency: "HIGH",
    suggestedDoctorType: "Internal Medicine",
    confidence: "MEDIUM",
    createdAt: "2026-03-22 06:44",
  },
  {
    id: "s3",
    patientName: "Sofia Alvarez",
    urgency: "CRITICAL",
    suggestedDoctorType: "Emergency Care",
    confidence: "HIGH",
    createdAt: "2026-03-22 07:02",
  },
];

export const notifications: NotificationItem[] = [
  {
    id: "n1",
    title: "Upcoming Appointment Reminder",
    body: "You have an appointment with Dr. Nora Kim at 09:30.",
    category: "appointments",
    priority: "MEDIUM",
    createdAt: "10 min ago",
  },
  {
    id: "n2",
    title: "Urgent Symptom Referral",
    body: "A high urgency referral needs doctor review in < 15 minutes.",
    category: "alerts",
    priority: "HIGH",
    createdAt: "25 min ago",
  },
  {
    id: "n3",
    title: "Report Analysis Complete",
    body: "Your uploaded CBC report is now ready for review.",
    category: "reports",
    priority: "LOW",
    createdAt: "2 hours ago",
  },
];

export const historyTimeline: TimelineItem[] = [
  {
    id: "h1",
    title: "Symptom Check Completed",
    description: "Reported dizziness, fatigue, and mild nausea.",
    category: "symptom-check",
    createdAt: "2026-03-21 21:10",
  },
  {
    id: "h2",
    title: "Appointment Completed",
    description: "Consultation with Dr. Omar Rahman.",
    category: "appointment",
    createdAt: "2026-03-20 15:00",
  },
  {
    id: "h3",
    title: "Report Uploaded",
    description: "Renal panel uploaded and AI summary generated.",
    category: "report",
    createdAt: "2026-03-19 13:25",
  },
];

export const appointmentsTrend = [
  { month: "Jan", value: 3200 },
  { month: "Feb", value: 3550 },
  { month: "Mar", value: 3810 },
  { month: "Apr", value: 4005 },
  { month: "May", value: 4380 },
  { month: "Jun", value: 4620 },
];

export const symptomUsageTrend = [
  { week: "W1", usage: 860 },
  { week: "W2", usage: 930 },
  { week: "W3", usage: 910 },
  { week: "W4", usage: 1040 },
];

export const emergencyByRegion = [
  { region: "MENA", value: 8 },
  { region: "Europe", value: 4 },
  { region: "Asia", value: 5 },
  { region: "Americas", value: 1 },
];

export const doctorAvailabilityData = [
  { label: "Online", value: 78 },
  { label: "Offline", value: 22 },
];

export const countryAdoptionData = [
  { country: "UAE", users: 2200 },
  { country: "Germany", users: 1850 },
  { country: "Spain", users: 1290 },
  { country: "India", users: 2730 },
  { country: "Brazil", users: 1490 },
];
