import React from 'react'
import { Button } from './ui/button'
import { Bookmark } from 'lucide-react'
import { Avatar, AvatarImage } from './ui/avatar'
import { Badge } from './ui/badge'
import { useNavigate } from 'react-router-dom'

const Job = ({job}) => {
    const navigate = useNavigate();
   // const jobId = "bvsfhsufhsfjvfrkjr";
   const daysAgoFunction = (mongodbTime) => {
    const createdAt = new Date(mongodbTime);
    const currentTime = new Date();
    const timeDifference = currentTime - createdAt;
    return Math.floor(timeDifference/(1000*24*60*60));
   }
    return (
        <div className='p-5 rounded-md shadow-xl bg-white border border-gray-200'>
            <div className='flex item-center justify-between'>
                <p className='text-sm text-gray-500 '>{daysAgoFunction(job?.createdAt) === 0 ? "Today" : `${daysAgoFunction(job?.createdAt)} days ago`}</p>
                <Button variant="outline" className='rounded-full' size='icon'><Bookmark /></Button>
            </div>


            <div className='flex items-center gap-2 my-2'>
                <Button className="p-6" variant="ouline" size="icon">
                    <Avatar>
                        <AvatarImage src="https://imgs.search.brave.com/gXNPRM8YVNdK92th5plxB3xaBH9WJWZAAtSq_PFTUmE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNDYv/NjI3LzIzNy9zbWFs/bC9jcmVhdGl2ZS1s/b2dvLWRlc2lnbi1m/b3ItdGVjaG5vbG9n/aWNhbC1jb21wYW55/LXZlY3Rvci5qcGc" />
                    </Avatar>
                </Button>
                <div>
                    <h1 className='font-medium text-lg'>{job?.company?.name}</h1>
                    <p className='text-sm text-gray-500'>{job?.location}</p>
                </div>
            </div>
            <div>
                <h1 className='font-bold text-lg my-2'>{job?.title}</h1>
                <p className='text-sm text-gray-600'>{job?.description}</p>
            </div>
            <div className='flex items-center gap-2 mt-4'>
                <Badge className={'text-blue-700 font-bold'} variant='ghost'>{job?.position}</Badge>
                <Badge className={'text-[#F83002] font-bold'} variant='ghost'>{job?.jobType}</Badge>
                <Badge className={'text-[#7209b7] font-bold'} variant='ghost'>{job?.salary}LPA</Badge>
            </div>
            <div className='flex items-center gap-4 mt-4'>
                <Button onClick={() => navigate(`/description/${job?._id}`)} variant="outline">Details</Button>
                <Button className='bg-[#7209b7]'>Save for later</Button>
            </div>
        </div>

    )
}

export default Job
