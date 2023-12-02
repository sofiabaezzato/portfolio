import React from 'react'
import { FaPaperPlane } from 'react-icons/fa'

import {
  // @ts-expect-error
  experimental_useFormState as useFormState,
  // @ts-expect-error
  experimental_useFormStatus as useFormStatus,
} from "react-dom";

const SubmitButton = () => {
  const { pending } = useFormStatus()

  return (
    <button
      type='submit'
      className='group h-[3rem] w-[8rem] bg-[#ffd500] text-gray-600 px-7 py-3 flex items-center justify-center gap-2 rounded-full outline-none hover:bg-[#ffd500] hover:text-gray-950 hover:scale-105 active:scale-95 transition-transform disabled:scale-100 disabled:bg-opacity-50'
      disabled={pending}
    >
      {pending ? <div className='h-5 w-5 animate-spin rounded-full border-b-2 border-white'></div> : (
          <>
            Submit <FaPaperPlane className="opacity-70 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </>
        )}
    </button>
  )
}

export default SubmitButton