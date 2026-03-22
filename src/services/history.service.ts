import { historyTimeline } from "@/lib/mock-data";
import { withMockLatency } from "@/services/base";

export const historyService = {
  list: async () => withMockLatency(historyTimeline),
};
