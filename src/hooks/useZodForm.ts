import { UseMutateFunction } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z, { ZodType } from "zod";

const useZodForm = (
  schema: ZodType,
  mutation: UseMutateFunction<any, any, any, any>,
  defaultValues?: any
) => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<any>({
    resolver: zodResolver(schema as any),
    defaultValues: { ...defaultValues },
  });

  const onFormSubmit = handleSubmit(async (values) => mutation({ ...values }));

  return { register, watch, reset, onFormSubmit, errors };
};

export default useZodForm;
