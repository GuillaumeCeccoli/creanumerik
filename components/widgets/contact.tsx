"use client";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useIntersectionObserver } from "@/lib/hooks/useIntersectionObserverHook";
import { zodResolver } from "@hookform/resolvers/zod";
import { Control, Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { useToast } from "../ui/use-toast";

const formSchema = z.object({
  username: z
    .string()
    .min(3, { message: "Votre nom doit contenir plus de trois lettres" })
    .refine((value) => /^[a-zA-z]+$/.test(value), {
      message: "Votre nom ne peut contenir que des lettres.",
    }),
  mail: z.string().email({ message: "Ce format de mail est invalide." }),
  phone: z
    .string()
    .min(10, {
      message: "Votre numéros de téléphone doit contenir dix chiffres minimum",
    })
    .refine((value) => /^[0-9]+$/.test(value), {
      message: "Ce format est invalide.",
    }),
  message: z
    .string()
    .min(10, {
      message: "Votre message doit contenir au minimum 10 caractères.",
    })
    .max(2000, {
      message:
        "Votre message est trop long, il doit contenir au maximum 2000 caractères.",
    }),
});

type TFormFieldProps = {
  control: Control<z.infer<typeof formSchema>>;
  name: keyof z.infer<typeof formSchema>;
  label: string;
  textarea: boolean;
  isInput: boolean;
  rows?: number;
  placeholder: string;
};

const FormFieldProps: React.FC<TFormFieldProps> = ({
  control,
  name,
  label,
  textarea,
  isInput,
  rows,
  placeholder,
}) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <div>
          <label htmlFor={name}>{label}</label>
          {textarea ? (
            <textarea
              {...field}
              id={name}
              rows={rows}
              placeholder={placeholder}
              className="w-full flex flex-col border border-input rounded-md bg-gray-200 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 my-2"
            />
          ) : isInput ? (
            <Input
              {...field}
              id={name}
              placeholder={placeholder}
              className="my-2 bg-gray-200"
            />
          ) : null}
          {error && <span className="text-red-500">{error.message}</span>}
        </div>
      )}
    />
  );
};

export default function Contact() {
  const ref = useIntersectionObserver("animateX");
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      mail: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (data: {
    username: string;
    mail: string;
    phone: string;
    message: string;
  }) => {
    try {
      const response = await fetch("/api/contactDatas", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error("Le formulaire n'a pu être soumis");
      form.reset({
        username: "",
        mail: "",
        phone: "",
        message: "",
      });
      toast({
        title: "Félicitations !",
        description: "Votre message a bien été envoyé !",
      });
    } catch (error) {
      toast({
        title: "Erreur !",
        description: "Votre message n'a pas pu être envoyé",
      });
    }
  };

  return (
    <article className="flex flex-col items-center gap-10 pb-40">
      <h2 className="text-3xl font-bold py-20">Contact</h2>
      <div
        ref={ref}
        className="hide flex flex-col w-4/5 md:w-1/2 lg:w-1/5 xl:w-2/5"
      >
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-5"
          >
            <FormFieldProps
              control={form.control}
              name="username"
              label="Nom"
              textarea={false}
              isInput={true}
              placeholder="Votre nom"
            />
            <FormFieldProps
              control={form.control}
              name="mail"
              label="Mail"
              textarea={false}
              isInput={true}
              placeholder="Votre mail"
            />
            <FormFieldProps
              control={form.control}
              name="phone"
              label="Téléphone"
              textarea={false}
              isInput={true}
              placeholder="Votre numéro de téléphone"
            />
            <FormFieldProps
              control={form.control}
              name="message"
              label="Message"
              textarea={true}
              rows={10}
              isInput={false}
              placeholder="Votre message"
            />
            <Button
              type="submit"
              className="w-2/5 self-center bg-gray-300 hover:bg-gray-400 shadow-xl text-black font-bold transition-all duration-300 ease-in-out"
            >
              Envoyer
            </Button>
          </form>
        </Form>
      </div>
    </article>
  );
}

