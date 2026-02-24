import React, { useState } from 'react'
import Navbar from '../shared/Navbar'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { RadioGroup } from '../ui/radio-group'
import { Button } from '../ui/button'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { USER_API_END_POINT } from '@/utils/constant'
import { toast } from 'sonner'
import { useDispatch } from 'react-redux'
import store from '@/redux/store'
import { Loader2 } from 'lucide-react'
import { setLoading } from '@/redux/authSlice'
import { useSelector } from 'react-redux'
const signup = () => {
    const [input, setInput] = useState({
        fullname: "",
        email: "",
        phoneNumber: "",
        password: "",
        role: "",
        file: ""
    })
    const { loading } = useSelector((store) => store.auth);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }

    const changeFileHandler = (e) => {
        setInput({ ...input, file: e.target.files?.[0] })
    }
    const submitHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("fullname", input.fullname);
        formData.append("email", input.email);
        formData.append("phoneNumber", input.phoneNumber);
        formData.append("password", input.password);
        formData.append("role", input.role);
        if (input.file) {
            formData.append("file", input.file);
        }
        try {
            dispatch(setLoading(true));
            const res = await axios.post(`${USER_API_END_POINT}/register`, formData, {
                headers: { "Content-Type": "multipart/form-data" },
                withCredentials: true
            });
            if (res.data.success) {
                navigate("/login");
                toast.success(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response?.data?.message || "Something went wrong");
        } finally {
            dispatch(setLoading(false));
        }
    }
    return (
        <div>
            <Navbar />
            <div className='flex items-center justify-center max-w-7xl mx-auto'>
                <form onSubmit={submitHandler} className='w-1/2 border border-gray-200 rounded-md p-4 my-10 '>
                    <h1 className='font-bold text-xl mb-5'>Sign Up</h1>
                    <div className='my-2'>
                        <Label>FullName</Label>
                        <Input
                            type="text"
                            value={input.fullname}
                            name='fullname'
                            onChange={changeEventHandler}
                            placeholder="Enter your full name"
                            className='mb-3'
                        />
                    </div>
                    <div className='my-2'>
                        <Label>Email</Label>
                        <Input
                            type="email"
                            value={input.email}
                            name='email'
                            onChange={changeEventHandler}
                            placeholder="Enter your email"
                            className='mb-3'
                        />
                    </div>
                    <div className='my-2'>
                        <Label>Phone Number</Label>
                        <Input
                            type="text"
                            value={input.phoneNumber}
                            name='phoneNumber'
                            onChange={changeEventHandler}
                            placeholder="Enter your phone number"
                            className='mb-3'
                        />
                    </div>
                    <div className='my-2'>
                        <Label>Password</Label>
                        <Input
                            type="password"
                            value={input.password}
                            name='password'
                            onChange={changeEventHandler}
                            placeholder="Enter your password"
                            className='mb-3'
                        />
                    </div>
                    <div className='flex items-center justify-between gap-6'>
                        <div>
                            <RadioGroup defaultValue="option-one" className='flex items-center gap-4 my-5'>
                                <div className="flex items-center gap-3">
                                    <Input
                                        type="radio"
                                        value="student"
                                        name="role"
                                        className='cursor-pointer'
                                        checked={input.role === "student"}
                                        onChange={changeEventHandler} />
                                    <Label htmlFor="r1">Student</Label>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Input
                                        type="radio"
                                        value="recruiter"
                                        name="role"
                                        className='cursor-pointer'
                                        checked={input.role === "recruiter"}
                                        onChange={changeEventHandler} />
                                    <Label htmlFor="r2">Recruiter</Label>
                                </div>

                            </RadioGroup>
                        </div>
                        <div className='flex items-center gap-2'>
                            <Label>PROFILE</Label>
                            <Input
                                accept='image/*'
                                type="file"
                                onChange={changeFileHandler}
                                className='cursor-pointer'
                            />
                        </div>
                    </div>
                    {
                        loading ? <Button className="w-full my-4"> <Loader2 className='mr-2 h-4 w-4 animate-spin' /> Please wait </Button> : <Button type="submit" className="w-full my-4">Signup</Button>
                    }
                    <span className='text-sm'>Already have an account? <a href="/login" className='text-blue-500 '>Login</a></span>
                </form>
            </div>
        </div>
    )
}

export default signup
