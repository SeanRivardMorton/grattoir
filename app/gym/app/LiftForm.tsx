"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { createClient } from "@/utils/supabase/server";
import { createLift } from "@/app/gym/app/actions";

const AddLiftSchema = z.object({
  name: z.string().min(3),
  description: z.string().max(400),
});

export type AddLiftSchemaType = z.infer<typeof AddLiftSchema>;

const LiftForm = () => {
  const form = useForm<AddLiftSchemaType>({
    resolver: zodResolver(AddLiftSchema),
    defaultValues: {
      name: "",
      description: "",
    },
  });

  const handleSubmit = form.handleSubmit(async (data) => {
    const asd = await createLift(data);
  });

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormDescription>Lift Name</FormDescription>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Textarea {...field} />
                  </FormControl>
                  <FormDescription>Lift Description</FormDescription>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
        </div>
        <div className="flex flex-row justify-end">
          <Button type="submit">Add</Button>
        </div>
      </form>
    </Form>
  );
};

export default LiftForm;
