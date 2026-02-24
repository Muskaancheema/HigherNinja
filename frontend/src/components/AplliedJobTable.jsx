import React from 'react'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell ,TableCaption} from './ui/table'
import { Badge } from './ui/badge'

const AplliedJobTable = () => {
    return (
        <div>
            <Table>
                <TableCaption>A List of your applied Jobs</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>Job Role</TableHead>
                        <TableHead>Company</TableHead>
                        <TableHead className='text-right'>Status</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        [1, 2, 3, 4].map((item, index) => (
                            <TableRow key={index}>
                                <TableCell>17-07-2026</TableCell>
                                <TableCell>FrontEnd Developer</TableCell>
                                <TableCell>Google</TableCell>
                                <TableCell className='text-right'><Badge>Selected</Badge></TableCell>

                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </div>
    )
}

export default AplliedJobTable
