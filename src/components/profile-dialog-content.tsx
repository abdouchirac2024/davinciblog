import React from 'react'
import { useTheme } from 'next-themes';
import { Card, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
const statuses = [
    '👋 Speak Freely',
    '🤐 Encrypted',
    '👍🏻 Free to chat',
    '👨🏼‍💻 Coding',
    '📴 Taking a break',
  ];
  


const ProfileDialogContent=() =>{

    const {setTheme}=useTheme();

    return <div>
        <Card  className='border-0'>
        <CardTitle>Profile</CardTitle>
             <div>
             <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>User</AvatarFallback>
              </Avatar>
        </div>
        </Card>
        <div className='flex flex-col gap-y-6'>
            <div className='flex items-center space-x-2'>

            
                </div>

            </div>
        
    </div>
}

export default ProfileDialogContent;