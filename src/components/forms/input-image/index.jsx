import clsx from 'clsx'
import React, { Fragment } from 'react'
import { useDropzone } from 'react-dropzone'
import { PhotographIcon } from '@heroicons/react/solid'
import { FormFieldWrapper } from '../FormFieldWrapper'
import PropTypes from 'prop-types'


export default function InputImage(props) {
  const { getRootProps, getInputProps } = useDropzone({
    accept: '.jpg, .jpeg, .png,',
    multiple: false,
    onDrop: (files) => {
      console.log(files)
      // setFiles(acceptedFiles.map(file => Object.assign(file, {
      //   preview: URL.createObjectURL(file)
      // })));
    },
  })

  return (
    <FormFieldWrapper label='Skill Icon' name='skillIcon'>
      <button
        className='border-input h-[54px] w-[54px] rounded'
        type='button'
        {...getRootProps()}
      >
        <PhotographIcon className='w-5 h-5 m-auto' />
      </button>
      <input {...getInputProps()} />
    </FormFieldWrapper>
  )
}
