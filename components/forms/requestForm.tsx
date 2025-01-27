"use client"

import React, { useState } from 'react'
import CustomFormField from '../../app/(components)/customformfield'
import { UserFormValidation } from '../../lib/validation';
import { useForm, FormProvider } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import SubmitButton from '../../app/(components)/submitbutton';

export enum FormFieldType {
    INPUT = "input",
    TEXTAREA = "textarea",
    PHONE_INPUT = "phoneInput",
    CHECKBOX = "checkbox",
    DATE_PICKER = "datePicker",
    SELECT = "select",
    SKELETON = "skeleton",
}


const RequestForm = () => {
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
    try {
      console.log(values);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <hr />
      <FormProvider {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6 flex-1"
        >
          <CustomFormField
            inputType={FormFieldType.INPUT}
            control={form.control}
            name="name"
            label="Student Full Name"
            placeholder="Full Name"
          />
          <CustomFormField
            inputType={FormFieldType.INPUT}
            control={form.control}
            name="email"
            label="Email Address"
            placeholder="Email Address"
          />
          <CustomFormField
            inputType={FormFieldType.DATE_PICKER}
            control={form.control}
            name="dob"
            label="Date of Birth"
          />
          <CustomFormField
            inputType={FormFieldType.INPUT}
            control={form.control}
            name="id"
            label="Student ID Number"
            placeholder="ID Number"
          />
          <CustomFormField
            inputType={FormFieldType.INPUT}
            control={form.control}
            name="universityName"
            label="Name of University"
            placeholder="University Name"
          />
          <CustomFormField
            inputType={FormFieldType.INPUT}
            control={form.control}
            name="programOfStudy"
            label="Program of Study"
            placeholder="BSc. Computer Science"
          />
          <CustomFormField
            inputType={FormFieldType.DATE_PICKER}
            control={form.control}
            name="gradDate"
            label="Graduation Date"
          />
          <SubmitButton isLoading={isLoading}>Send Request</SubmitButton>
        </form>
      </FormProvider>
    </div>
  )
}

export default RequestForm
