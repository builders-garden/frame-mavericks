import { ApplyFormData } from "@/components/ApplyModal";
import { useApiMutation } from "./use-api-mutation";

export function useApply() {
  return useApiMutation<void, ApplyFormData>({
    url: "/api/apply",
    isProtected: true,
    method: "POST",
  });
}
