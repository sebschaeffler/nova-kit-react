// @ts-nocheck
import React from "react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/form/form";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { ControllerRenderProps, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Pencil, Save } from "lucide-react";
import { cn } from "@/utils/style-utils";
import {
  FieldSectionType,
  FieldSectionTypeAttributes,
} from "@/components/ui/form/types";
import { toast, Toaster } from "@/components/ui/sonner";

const firstName = "firstName";
const lastName = "lastName";
const username = "username";
const email = "email";
const profile = "profile";

const fields: FieldSectionType = {
  [firstName]: {
    label: "First Name",
    isRequired: true,
    description: "This is your first name name.",
    value: "",
  },
  [lastName]: {
    label: "Last Name",
    isRequired: true,
    description: "This is your last name.",
    value: "",
  },
  [username]: {
    label: "Username",
    isRequired: true,
    description: "This is your username.",
    value: "",
  },
  [email]: {
    label: "Email",
    isRequired: true,
    description: "This is your company email.",
    value: "",
  },
  [profile]: {
    label: "Profile",
    description: "This is your optional public profile.",
    className: "col-span-2",
    render: (field, isEditing) => <Textarea {...field} readOnly={!isEditing} />,
    value: "",
  },
};

const DemoFormSchema = z.object({
  [firstName]: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  [lastName]: z.string().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
  [username]: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  [email]: z.string().email({
    message: "Email is invalid.",
  }),
  [profile]: z
    .string()
    .min(2, {
      message: "Profile must be at least 2 characters.",
    })
    .optional()
    .or(z.literal("")),
});

type FormSchemaKeys = keyof z.infer<typeof DemoFormSchema>;

const FormDemo = () => {
  const [isEditing, setIsEditing] = React.useState(false);

  const form = useForm<z.infer<typeof DemoFormSchema>>({
    mode: "onBlur",
    reValidateMode: "onBlur",
    resolver: isEditing && zodResolver(DemoFormSchema),
    defaultValues: {
      [firstName]: fields.firstName.value,
      [lastName]: fields.lastName.value,
      [username]: fields.username.value,
      [email]: fields.email.value,
      [profile]: fields.profile.value,
    },
  });

  function onSubmit(data: z.infer<typeof DemoFormSchema>) {
    toast.success("You submitted the following values:", {
      description: (
        <pre className="mt-2 w-[340px] rounded p-4 text-primary">
          <code>{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
    setIsEditing(false);
  }

  return (
    <Form {...form}>
      <Toaster />
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
        <div className="flex w-full flex-col">
          <div className="mb-8 flex w-full items-center justify-between">
            <Label className="text-2xl mb-8">Account details</Label>
            <div className="flex items-center justify-between gap-8">
              <Button
                className={cn(isEditing ? "visible" : "invisible", "w-[120px]")}
                type="reset"
                variant="ghost"
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  setIsEditing(false);
                  form.reset();
                }}
              >
                <Label className="ml-2">Cancel</Label>
              </Button>
              {isEditing ? (
                <Button className="w-[120px]" type="submit">
                  <Save size={18} />
                  <Label className="ml-2">Save</Label>
                </Button>
              ) : (
                <Button
                  className="w-[120px]"
                  onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    setIsEditing(true);
                  }}
                >
                  <Pencil size={18} />
                  <Label className="ml-2">Edit</Label>
                </Button>
              )}
            </div>
          </div>
          <div className="grid w-full grid-cols-2 gap-8">
            {Object.keys(fields).map((key: string, index: number) => {
              const field: FieldSectionTypeAttributes = fields[key];
              return (
                <FormField
                  key={index}
                  control={form.control}
                  name={key as FormSchemaKeys}
                  render={({
                             field: formField,
                           }: {
                    field: Partial<ControllerRenderProps>;
                  }) => (
                    <FormItem className={field.className}>
                      <FormLabel>
                        {field.label} {field.isRequired && "*"}
                      </FormLabel>
                      <FormControl>
                        {field.render ? (
                          field.render(formField, isEditing)
                        ) : (
                          <Input {...formField} readOnly={!isEditing} />
                        )}
                      </FormControl>
                      {isEditing && (
                        <FormDescription>{field.description}</FormDescription>
                      )}
                      <FormMessage />
                    </FormItem>
                  )}
                />
              );
            })}
          </div>
        </div>
      </form>
    </Form>
  );
};

export default FormDemo;
