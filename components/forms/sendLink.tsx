import React, { useState } from 'react'
import { Form } from '../ui/form'
import CustomFormField from '../../app/(components)/customformfield'
import { FormFieldType } from '../../app/requestTranscript/sendlink'
import { UserFormValidation } from '../../lib/validation'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import SubmitButton from '../../app/(components)/submitbutton'

const SendLinkForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const form = useForm<z.infer<typeof UserFormValidation>>({
        resolver: zodResolver(UserFormValidation),
        defaultValues: {
          name: "",
          email: "",
          phone: "",
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
    <div>
        <hr className='h-1 bg-gray-300 my-2'/>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6 flex-1"
          >
            <CustomFormField
              inputType={FormFieldType.INPUT}
              control={form.control}
              name="name"
              label="Student Name"
              placeholder="Student Name"
              iconSrc=""
              iconAlt="product icon"
            />
            <CustomFormField
              inputType={FormFieldType.INPUT}
              control={form.control}
              name="name"
              label="Student ID"
              placeholder="Student ID"
              iconSrc=""
            />
            <CustomFormField
              inputType={FormFieldType.INPUT}
              control={form.control}
              name="email"
              label="Verified Student E mail"
              placeholder='Student Email'
            />
            <SubmitButton isLoading={isLoading}>Send Link</SubmitButton>
          </form>
        </Form>
    </div>
  )
}

export default SendLinkForm