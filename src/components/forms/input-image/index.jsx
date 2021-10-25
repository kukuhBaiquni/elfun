import clsx from 'clsx'
import React, { Fragment } from 'react'
import Dropzone from 'react-dropzone'

export default function InputImage() {
  return (
    <Dropzone
      accept='.jpg, .jpeg, .png, .gif, .bmp'
      disabled={false}
      multiple={false}
      noClick
      onDropAccepted={(acceptedFiles) => console.log(acceptedFiles[0])}
    >
      {({
        getRootProps, getInputProps, open, isDragActive, fileRejections,
      }) => {
        const fileRejectionsMsg = fileRejections[0]?.errors[0].message
        // const finalErrorMsg = fileRejectionsMsg || errorMsg
        console.log('getInputProps', getInputProps())
        console.log('getRootProps', getRootProps())
        return (
          <Fragment>
            <p>Jncx</p>
            <input {...getInputProps()} />
            {/* <div
              className={clsx(
                'border border-neutral-5 px-6 py-16 text-center',
                isDragActive && 'border-primary',
                label ? 'border-solid' : 'border-dashed',
                finalErrorMsg && 'border-error',
              )}
              {...getRootProps()}
            >
              <input {...getInputProps()} />
              {isProcessing
                ? <div>⏳ {isCompressing ? 'Compressing' : 'Uploading'} {fileName}</div>
                : (
                  <Fragment>
                    {label
                      ? (
                        <button
                          className='border-2 border-primary text-neutral-black rounded-lg p-5 m-4 font-semibold'
                          disabled={disabled}
                          type='button'
                          onClick={open}
                        >
                          <MdAdd className='text-primary text-4xl mx-auto' />
                          <div className='text-xs'>Add Photo</div>
                        </button>
                      )
                      : (
                        <Fragment>
                          <MdFileUpload className='mx-auto w-10 h-10' />
                          <button
                            className='btn btn-outline--primary px-12 py-2 m-4 text-base'
                            disabled={disabled}
                            ref={innerRef}
                            type='button'
                            onClick={open}
                          >Add File
                          </button>
                          <div className='text-neutral-2'>Or drop a file to upload</div>
                        </Fragment>
                      )}
                  </Fragment>
                )}
            </div> */}
            {/* <Message>{finalErrorMsg}</Message> */}
          </Fragment>
        )
      }}
    </Dropzone>
  )
}
