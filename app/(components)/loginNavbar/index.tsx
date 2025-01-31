"use client"

import React from 'react'
import { useAppDispatch, useAppSelector } from '../../redux'
import { setIsSidebarCollapsed, setIsDarkMode} from '../../../state'
import {Bell, Menu, Moon, Settings, Sun} from 'lucide-react'
import Link from 'next/link'
import Image from "next/image"

const LoginNavbar = () => {
    const dispatch = useAppDispatch();
    const isSidebarCollapsed = useAppSelector((state) => state.global.isSidebarCollapsed); 
    const isDarkMode = useAppSelector((state) => state.global.isDarkMode)

    const toggleSidebar = () => {
        dispatch(setIsSidebarCollapsed(!isSidebarCollapsed))
        }
    const toggleDarkMode = () => {
        dispatch(setIsDarkMode(!isDarkMode));
        };
    
    return (
    <div className='flex justify-between w-full items-center mb-7 bg-white px-5 py-3 rounded-md'>
        <div className='flex justify-between items-center gap-5'>
          
        </div>
        <div className="flex justify-between items-center gap-5">
            <div className="hidden md:flex justify-between items-center gap-5">
                <div className=" rounded-full hover:border hover:border-blue-200 hover:bg-blue-100 p-1">
                    <button onClick={toggleDarkMode} className='hover:text-blue-200'>
                        {isDarkMode ? (
                            <Sun className='cursor-pointer text-gray-500 hover:text-blue-400' size={24} />
                        ) : (
                            <Moon className='cursor-pointer text-gray-500 hover:text-blue-200' size={24}/>
                        )}
                    </button>
                </div>
                <div className="relative rounded-full hover:border hover:border-green-200 hover:bg-blue-100 p-1">
                    
                </div>
            </div>
            <Link href="/settings">
                <Settings className="cursor-pointer text-gray-500" size={24}/>
            </Link>
        </div>
    </div>
  )
}

export default LoginNavbar