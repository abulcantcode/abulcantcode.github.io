"use client"
import React, {useTransition, useState} from 'react'
import Image from 'next/image'
import TabButton from './TabButton'

const AboutSection = () => {
    const [tab, setTab] = useState("experience")
    const [isPending, startTransition] = useTransition()

    const handleTabChange = (id: string) => {
        startTransition(() => {
            setTab(id);
        })
    }

    return (
        <section className='text-white'>
            <div className='md:grid-cols-2 md:grid gap-8 items-center py-8 px-3 xl:gap-16 sm:py-16 xl:px-16'>
                <Image src='/images/coding.png' width={500} height={500} alt='coding image'/>
                <div>
                    <h2>About Me</h2>
                    <p>
                        fionsodifjnsldnoisddnoisnfoinn oisnfoisen fosn fsn
                        i nlinlisn ioni jsn fkjsnfnefnsekdsdncli klm lk ml
                        f edf ldflf df df sdfsdfsd fsd fsdf sdf sd fsdf ds
                        djkfnslnfsidlmf sdfm silfmsldmflskdfm km k kmkmkm.
                    </p>
                    <div className='flex flex-row mt-8'>
                        <span className='mr-3 font-semibold hover:text-white text-gray-200 border-b border-orange-500'>
                            Experience
                        </span>
                        <span>
                            Education
                        </span>
                        <span>
                            Skills
                        </span>
                    </div>
                </div>
            </div>
            
        </section>
    )
}

export default AboutSection