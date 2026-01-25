'use client'

import { FormProvider, useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { BaseDialogProps, Dialog } from '@/components/ui/dialog'
import { InputField } from '@/components/ui/input/field'

type FormData = {
  title: string
}

export function DashboardNewResumeDialog(props: BaseDialogProps) {
  const methods = useForm<FormData>({
    defaultValues: {
      title: '',
    },
  })

  function onSubmit(data: FormData) {
    console.log(data)
  }

  return (
    <Dialog
      {...props}
      title="Create new resume"
      description="To begin, choose a title for you resume"
      content={
        <FormProvider {...methods}>
          <form
            className="flex flex-col"
            onSubmit={methods.handleSubmit(onSubmit)}
          >
            <InputField label="Title" name="title" required />
            <Button type="submit" className="w-max mt-6 ml-auto">
              Create
            </Button>
          </form>
        </FormProvider>
      }
    />
  )
}
