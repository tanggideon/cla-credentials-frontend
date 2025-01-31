"use client"

import React, { useEffect, useState } from 'react'
import { useAppSelector } from '../../redux';
import { UserFormValidation } from '../../../lib/validation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import CustomFormField from '../../(components)/customformfield';
import { FormFieldType } from '../../requestTranscript/sendlink';
import SubmitButton from '../../(components)/submitbutton';
import { Form } from '../../../components/ui/form';
import Image from 'next/image';
import LoginNavbar from '../../(components)/loginNavbar';


const LoginLayout = ({ children }: { children: React.ReactNode }) => {
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode)

  useEffect(() => {
      if (isDarkMode) {
          document.documentElement.classList.add("dark");
      } else {
          document.documentElement.classList.add("light");
      }
  });

  return (
      <div className={`${isDarkMode ? "dark" : "light"} flex bg-gray-50 text-gray-900 w-full h-full`}>
          <main className="flex w-full h-full items-center flex-col"> 
            <LoginNavbar />
              {children}
          </main>
      </div>
  )
}
type LoginFormData = {
    email: string;
    password: string;
  };

const Login = () => {

    const [isLoading, setIsLoading] = useState(false);
    
      const form = useForm<z.infer<typeof UserFormValidation>>({
        resolver: zodResolver(UserFormValidation),
        defaultValues: {
          email: "",
          password: "",
        },
      });
    
      function onSubmit(values: z.infer<typeof UserFormValidation>) {
        setIsLoading(true);
        try {
          console.log(values);
        } catch (error) {
          console.log(error);
        }
      }
      
  return (
    <LoginLayout>

      <div className='flex flex-row bg-white w-[900px]'>
        <div className='w-3/5 flex flex-col items-center justify-center'>
            <Image src="/assets/images/transcript.jpg" alt="Page" width={300} height={300}/>
            <h1 className='font-semibold text-gray-600 text-lg'>
                Fast, Secure, and Global - Academic Credentials Done Right
            </h1>
            <hr className="h-1 bg-gray-300 my-2" />
            <h1 className='text-gray-500 font-semibold w-4/5'>We help issuing universities, receiving universities, and students streamline transcript management, translation, and evaluation with cutting-edge technology</h1>
        </div>
        <div className='py-10 px-20 w-2/5 flex flex-col items-center'>
        <h1 className='font-extrabold text-lg text-blue-600'>CLA Credentials</h1>
        <h1 className='font-extrabold text-md text-gray-600'>Sign In</h1>
        <hr className="h-1 bg-gray-300 my-2" />
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6 flex-1"
          >
            <CustomFormField
              inputType={FormFieldType.INPUT}
              control={form.control}
              name="name"
              label="Email"
              placeholder="Email"
            />
            <CustomFormField
              inputType={FormFieldType.INPUT}
              control={form.control}
              name="password"
              label="Password"
              placeholder="Password"
            />
            <SubmitButton isLoading={isLoading}>Sign In</SubmitButton>
          </form>
        </Form>
        </div>
      </div>
    </LoginLayout>
  )
}

export default Login