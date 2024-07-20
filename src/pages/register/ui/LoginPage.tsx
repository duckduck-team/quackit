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
  FormLabel
} from "@/shared/ui/form"
import { Input } from "@/shared/ui/input"
import Link from "next/link"
import { login } from "../lib/login"
import { useRouter } from "next/navigation"
import { CredentialsForLogin } from "../lib/interfaces"


const formSchema = z.object({
    username: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    password: z.string().min(4, {
      message: "Password must be at least 4 characters.",
    }),
})

export function LoginPage() {
    const router = useRouter();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            password: ""
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        const token = await login(values as CredentialsForLogin);
        if (token) {
            localStorage.setItem('access_token', token.access_token);
            router.push('/posts');
        } else {
            router.push('/auth');
        }
    }

    return (
        <div className="p-6 h-fit rounded-lg border-solid border-2 border-[E4E4E7]">
            <span className="inline-block mb-[22px] text-xl font-semibold">Authorize</span>
            <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-y-[22px]">
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
                <span className="text-xs text-[#71717A]">By clicking «Register», you accept <Link href={""} className="underline">Terms of Service</Link> and <Link href={""} className="underline">Privacy Policy</Link>.</span>
                <div className="text-xs">
                    <Button className="w-fit" type="submit">Login</Button><span className="inline-block ml-4 text-[#71717A]">Don't have an account? <Link href={"/auth"} className="underline">Register</Link></span>
                </div>
            </form>
            </Form>
        </div>
    )
}
