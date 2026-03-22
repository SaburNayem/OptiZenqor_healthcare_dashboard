import { appointments } from "@/lib/mock-data";
import { withMockLatency } from "@/services/base";

export const appointmentsService = {
  list: async () => withMockLatency(appointments),
};
