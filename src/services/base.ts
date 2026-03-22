import type { ApiResponse } from "@/lib/types";

export async function withMockLatency<T>(data: T, message?: string): Promise<ApiResponse<T>> {
  await new Promise((resolve) => setTimeout(resolve, 200));
  return { ok: true, data, message };
}
