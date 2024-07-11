import {useForm} from 'react-hook-form'
import { useChangePasswordMutation} from "../redux/slices/api/userApiSlice.js"
import {toast} from 'sonner'
import ModalWrapper from './ModalWrapper'
import { Dialog } from '@headlessui/react'
import Textbox from './Textbox'
import Loading from './Loader.jsx'
import  Button  from './Button'

const ChangePassword = ({ open, setOpen}) => {
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm();

    const [changeUserPassword, {isLoading}] = useChangePasswordMutation();

    const handleOnSubmit = async(data) => {
          if(data.password !== data.cpass) {
            toast.warning("Password doesn't match")
            return;
          }
          try {
               await changeUserPassword(data).unwrap()
              toast.success("Password Updated Successfully")

              setTimeout(() => {
                setOpen(false)
              },1000)
          } catch (error) {
            console.log(error)
            toast.error(error?.data?.message || error.error)
          }
    }
    
  return (
    <>
      <ModalWrapper open={open} setOpen={setOpen}>
          <form onSubmit={handleSubmit(handleOnSubmit)} className=''>
            <Dialog.Title  
             as='h2'
             className='text-base font-bold leading-6 text-gray-900 mb-4'
            >
            Change Password   
            </Dialog.Title>
            <div className='mt-2 flex flex-col gap-6'>
              <Textbox 
                placeholder="New Password"
                type="password"
                name="password"
                label="New Password"
                className="w-full rounded"
                register={register("password", {
                  required: "New password is required",
                })}
                error={errors.password ? errors.password.message: ""}
              />
              <Textbox 
               placeholder="Confirm new password"
               type="password"
               name="cpass"
               label="Confirm new password"
               className="w-full rounded"
               register = {register("cpass", {
                required: "Confirm new password is required",
               })}
               error={errors.cpass ? errors.cpass.message: ""}
              />
            </div>

            {isLoading ? (
              <div className='py-5'>
                <Loading />
              </div>
            ) : (
              <div className='py-3 mt-4 sm:flex sm: flex-row-reverse'>
                <Button 
                 type='submit'
                 className='bg-blue-600 px-8 text-sm font-semibold text-white hover:bg-blue-700'
                 label='Save'
                />

                <button 
                 type='button'
                 className='bg-white px-5 text-sm font-semibold text-gray-900 sm:w-auto'
                 onClick={() => setOpen(false)}
                >
                  Cancel
                </button>
              </div>
            )}
          </form>
      </ModalWrapper>
    </>
  )
}

export default ChangePassword;
