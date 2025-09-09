import {
  MutationFunction,
  MutationKey,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { toast } from "sonner";

export const useMutationData = <
  TData extends { status: number; data?: string },
  TVariables
>(
  mutationKey: MutationKey,
  mutationFn: MutationFunction<TData, TVariables>,
  queryKey?: string,
  onSuccess?: () => void
) => {
  const client = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationKey,
    mutationFn,
    onSuccess(data) {
      if (onSuccess) onSuccess();
      return toast(data?.status === 200 ? "Success" : "Error", {
        description: data?.data,
      });
    },
    onSettled: async () => {
      return await client.invalidateQueries({ queryKey: [queryKey] });
    },
  });

  return { mutate, isPending };
};
