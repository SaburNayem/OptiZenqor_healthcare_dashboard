import {
  adminMetrics,
  appointmentsTrend,
  doctorAvailabilityData,
  doctorMetrics,
  emergencyByRegion,
  patientMetrics,
  symptomUsageTrend,
} from "@/lib/mock-data";
import { withMockLatency } from "@/services/base";

export const dashboardService = {
  getAdminMetrics: async () => withMockLatency(adminMetrics),
  getDoctorMetrics: async () => withMockLatency(doctorMetrics),
  getPatientMetrics: async () => withMockLatency(patientMetrics),
  getOverviewCharts: async () =>
    withMockLatency({
      appointmentsTrend,
      symptomUsageTrend,
      emergencyByRegion,
      doctorAvailabilityData,
    }),
};
