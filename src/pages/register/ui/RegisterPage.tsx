"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/shared/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/shared/ui/form"
import { Input } from "@/shared/ui/input"
import Link from "next/link"
import { register } from "../lib/register"
import { CredentialsForRegister } from "../lib/interfaces"
import { useRouter } from "next/navigation"

const formSchema = z.object({
    username: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    email: z.string().email({
      message: "Invalid email address.",
    }),
    password: z.string().min(8, {
      message: "Password must be at least 8 characters.",
    }),
    repeatPassword: z.string().min(8, {
      message: "Password must be at least 8 characters.",
    })
  }).refine((data) => data.password === data.repeatPassword, {
    message: "Passwords don't match",
    path: ["repeatPassword"],
  });

export function RegisterPage() {
    const router = useRouter();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            username: "",
            password: "",
            repeatPassword: ""
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        const credentials = {
            username: values.username,
            password: values.password,
            email: values.email,
        } as CredentialsForRegister;

        const token = await register(credentials);
        if (token) {
            localStorage.setItem('access_token', token.access_token);
            router.push('/posts');
        } else {
            router.push('/auth/login');
        }
    }

    return (
        <div className="p-6 h-fit rounded-lg border-solid border-2 border-[E4E4E7]">
            <span className="inline-block mb-[22px] text-xl font-semibold">Register</span>
            <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-y-[22px]">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel className="text-xs">Email</FormLabel>
                        {form.formState.errors?.email && <span className="text-xs">: {form.formState.errors.email.message}</span>}
                        <FormControl>
                            <Input className="text-xs min-w-[250px]" type="email" placeholder="user@alreadit.ru" {...field} />
                        </FormControl>
                    </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel className="text-xs">Username</FormLabel>
                        {form.formState.errors?.username && <span className="text-xs">: {form.formState.errors.username.message}</span>}
                        <FormControl>
                            <Input className="text-xs min-w-[250px]" placeholder="alreadituser" {...field} />
                        </FormControl>
                    </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel className="text-xs">Password</FormLabel>
                        {form.formState.errors?.password && <span className="text-xs">: {form.formState.errors.password.message}</span>}
                        <FormControl>
                            <Input className="text-xs min-w-[250px]" type="password" placeholder="*************" {...field} />
                        </FormControl>
                    </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="repeatPassword"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel className="text-xs">Repeat your password</FormLabel>
                        {form.formState.errors?.repeatPassword && <span className="text-xs">: {form.formState.errors.repeatPassword.message}</span>}
                        <FormControl>
                            <Input className="text-xs min-w-[250px]" type="password" placeholder="*************" {...field} />
                        </FormControl>
                    </FormItem>
                    )}
                    
                />
                <span className="text-xs text-[#71717A]">By clicking «Register», you accept <Link href={""} className="underline">Terms of Service</Link> and <Link href={""} className="underline">Privacy Policy</Link>.</span>
                <div className="text-xs">
                    <Button className="w-fit" type="submit">Register</Button><span className="inline-block ml-4 text-[#71717A]">Already read it? <Link href={"/auth/login"} className="underline">Log in</Link></span>
                </div>
            </form>
            </Form>
        </div>
    )
}
