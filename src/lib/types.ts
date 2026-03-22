export type Role = "admin" | "doctor" | "patient";
export type UrgencyLevel = "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
export type ConfidenceLevel = "LOW" | "MEDIUM" | "HIGH";
export type AppointmentStatus = "upcoming" | "ongoing" | "completed" | "cancelled";

export interface ApiResponse<T> {
  ok: boolean;
  data: T;
  message?: string;
}

export interface Metric {
  label: string;
  value: string;
  delta?: string;
}

export interface Patient {
  id: string;
  name: string;
  age: number;
  country: string;
  status: "stable" | "follow-up" | "critical";
  lastAppointment: string;
  recentSymptomActivity: string;
  medicalHistorySummary: string;
}

export interface Doctor {
  id: string;
  name: string;
  specialization: string;
  rating: number;
  experience: number;
  country: string;
  availability: "online" | "offline";
  activeAppointments: number;
}

export interface Appointment {
  id: string;
  patientName: string;
  doctorName: string;
  country: string;
  dateTime: string;
  reason: string;
  status: AppointmentStatus;
}

export interface ReportSummary {
  id: string;
  patientName: string;
  reportType: string;
  confidence: ConfidenceLevel;
  abnormalMarkers: number;
  status: "reviewed" | "pending" | "urgent";
  aiSummary: string;
}

export interface SymptomSession {
  id: string;
  patientName: string;
  urgency: UrgencyLevel;
  suggestedDoctorType: string;
  confidence: ConfidenceLevel;
  createdAt: string;
}

export interface NotificationItem {
  id: string;
  title: string;
  body: string;
  category: "appointments" | "follow-up" | "reports" | "alerts";
  priority: "HIGH" | "MEDIUM" | "LOW";
  createdAt: string;
}

export interface TimelineItem {
  id: string;
  title: string;
  description: string;
  category: "symptom-check" | "appointment" | "report";
  createdAt: string;
}

export interface NavigationItem {
  title: string;
  href: string;
}
