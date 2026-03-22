import { doctors } from "@/lib/mock-data";
import { withMockLatency } from "@/services/base";

export const doctorsService = {
  list: async () => withMockLatency(doctors),
};
