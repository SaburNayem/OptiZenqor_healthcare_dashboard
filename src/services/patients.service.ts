import { patients } from "@/lib/mock-data";
import { withMockLatency } from "@/services/base";

export const patientsService = {
  list: async () => withMockLatency(patients),
};
