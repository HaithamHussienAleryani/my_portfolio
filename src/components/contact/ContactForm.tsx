"use client";
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import MeImage from "../../../public/me.jpg";
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
import SocialMediaIconsSection from "../SocialMediaIcons";

const FormSchema = z.object({
  full_name: z.string().min(2, {
    message: "Full name must be at least 2 characters.",
  }),
  email: z.string().email(),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export function ContactForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      full_name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast("You submitted the following values", {
      description: (
        <pre className="mt-2 w-[320px] rounded-md bg-neutral-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <section className="flex flex-col md:flex-row mt-10  gap-10">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
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
            className="rounded-full bg-black dark:bg-white px-10"
            size={"lg"}
            type="submit"
          >
            Submit
          </Button>
        </form>
      </Form>
      <div className="bg-white h-fit dark:bg-OffBlack2 rounded-3xl  flex-col px-7 pt-7 pb-3 ">
        <div className="flex bg-white dark:bg-OffBlack2 rounded-3xl  flex-col ">
          <div className="flex  items-center bg-primary2 w-fit px-3.5 py-1 rounded-full justify-center space-x-2">
            <div className="size-1.5 bg-primary rounded-full"></div>
            <p className="text-xs md:text-sm">Available for work</p>
          </div>
          <div className="border p-1 my-5 rounded-full w-fit h-fit">
            <Image
              src={MeImage}
              alt="Haitham Image"
              className="rounded-full size-18   object-cover "
            />
          </div>

          <p>
            My inbox is always open, Whether you have a project or just want to
            say Hi. I would love to hear from you. Feel free to contact me and
            I'll get back to you.
          </p>
          <div>
            <div className="flex  flex-wrap mt-4 space-x-4">
              <SocialMediaIconsSection className="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
