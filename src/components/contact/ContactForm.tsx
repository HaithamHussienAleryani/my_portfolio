"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";
import { useActionState, useEffect, useTransition } from "react";
import { FormSchema } from "./schema";
import { onSubmit } from "./action";

export function ContactForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      full_name: "",
      email: "",
      message: "",
    },
  });
  const initialState = { success: false, message: "" };
  const [state, formAction, isPending] = useActionState(onSubmit, initialState);
  const [isPendingTransition, startTransition] = useTransition();

  useEffect(() => {
    if (!state.message) return;

    if (state.success) {
      toast.success(state.message);
      form.reset();
    } else {
      toast.error(state.message);
    }
  }, [state, form]);

  function handleAction(data: z.infer<typeof FormSchema>) {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });
    startTransition(() => formAction(formData));
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleAction)}
        className="w-full md:w-2/3 space-y-6"
      >
        <FormField
          control={form.control}
          name="full_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          disabled={isPendingTransition}
          className="rounded-full cursor-pointer bg-black dark:bg-white px-10"
          size={"lg"}
          type="submit"
        >
          Submit
        </Button>
      </form>
    </Form>
  );
}
