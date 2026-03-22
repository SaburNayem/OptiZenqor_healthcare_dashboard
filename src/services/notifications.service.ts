import { notifications } from "@/lib/mock-data";
import { withMockLatency } from "@/services/base";

export const notificationsService = {
  list: async () => withMockLatency(notifications),
};
