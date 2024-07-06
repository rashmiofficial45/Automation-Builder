import React from 'react'
import UploadCareButton from './uploadcare-button'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { X } from 'lucide-react'

type Props = {}

const ProfilePicture = (props: Props) => {
  return (
    <div className="flex flex-col">
      <p className="text-lg text-white"> Profile Picture</p>
      <div className="flex h-[30vh] flex-col items-center justify-center">
        {/* {userImage ? (
          <>
            <div className="relative h-full w-2/12">
              <Image
                src={userImage}
                alt="User_Image"
                fill
              />
            </div>
            <Button
              onClick={onRemoveProfileImage}
              className="bg-transparent text-white/70 hover:bg-transparent hover:text-white"
            >
              <X /> Remove Logo
            </Button>
          </>
        ) : ( */}
          <UploadCareButton />
        {/* )} */}
      </div>
    </div>
  )
}

export default ProfilePicture