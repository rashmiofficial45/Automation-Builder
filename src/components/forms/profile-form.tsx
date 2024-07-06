"use client"
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { EditUserProfileSchema } from "@/lib/types";
import { z } from "zod";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "../ui/input";
import { Loader2 } from "lucide-react";
import { Button } from "../ui/button";
type Props = {};

const ProfileForm = (props: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof EditUserProfileSchema>>({
    mode:"onChange",
    resolver: zodResolver(EditUserProfileSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });
  return <Form {...form}>
  <form onSubmit={()=>{}} className="flex flex-col gap-6">
    <FormField disabled={isLoading}
      control={form.control}
      name="name"
      render={({ field }) => (
        <FormItem>
          <FormLabel className=" text-lg">Username</FormLabel>
          <FormControl>
            <Input placeholder="Full Name..." {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
    <FormField disabled={true}
      control={form.control}
      name="email"
      render={({ field }) => (
        <FormItem>
          <FormLabel className=" text-lg">Email</FormLabel>
          <FormControl>
            <Input placeholder="Email..." type="email" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
    <Button
          type="submit"
          className="self-start hover:bg-[#2F006B] hover:text-white "
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Saving
            </>
          ) : (
            'Save User Settings'
          )}
        </Button>
  </form>
</Form>
};

export default ProfileForm;
