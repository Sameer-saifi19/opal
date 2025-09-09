import { CreateWorkspace } from "@/actions/workspace";
import { useMutationData } from "./useMutationData";
import useZodForm from "./useZodForm";
import { workspaceSchema } from "@/components/form/workspace-form/schema";

export const useCreateWorkspace = () => {
  const {mutate, isPending} = useMutationData(
    ["create-workspace"],
    (data: { name: string }) => CreateWorkspace(data.name),
    "user-workspace"
  );

  const {errors, register, onFormSubmit} = useZodForm(workspaceSchema, mutate)

  return {errors, register, onFormSubmit, isPending}
};
