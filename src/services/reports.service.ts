import { reports } from "@/lib/mock-data";
import { withMockLatency } from "@/services/base";

export const reportsService = {
  list: async () => withMockLatency(reports),
};
