

export type TNavLinks = {
  id: string,
  label: string,
  href: string,
}

export type TReseaux = {
  id: string,
  icon: string,
  href: string,
  alt: string,
}

export type TProject = {
  id: string,
  title: string,
  description: string,
  img: string,
  href: string,
}

export type TTechnos = {
  id: string,
  name: string,
}

export type TFormFieldProps = {
  control: Control<z.infer<typeof formSchema>>,
  name: keyof z.infer<typeof formSchema>,
  label: string,
  textarea: boolean,
}