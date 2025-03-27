import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import {Button} from "@/components/ui/button";

import { HeroHeader } from '@/components/hero-header'
import HeroBg from '../../public/upscaled-hero-bg.png';
import MeImage from "../../public/me.jpg";
import {ArrowUpRight, Github, InstagramIcon, Linkedin} from "lucide-react";
import SocialMediaIcon from "@/components/social-media-icon";
import PrimaryButton from "@/components/PrimaryButton";
import CircularText from "@/components/motion-primitives/circle-text";




export default function HeroSection() {
    return (
        <div className={'relative'}>
            <Image src={HeroBg} alt={"Hero Image"}  className={'absolute h-screen w-screen'}/>
            <HeroHeader />
            <main className="overflow-x-hidden">
                <section>
                    <div className="pb-24 pt-12 md:pb-32 lg:pb-56 lg:pt-44">
                        <div className="relative mx-auto flex max-w-6xl  lg:gap-x-10 flex-col px-6 lg:flex lg:flex-row justify-center items-start">
                            <div>
                                <div className={" w-full justify-center pt-7   lg:pt-18 flex items-center  gap-x-4"}>
                                    <div>
                                        <Image src={MeImage} alt={"Haitham`s image"} className={' size-14 bg-black lg:size-20 object-cover rounded-full'}/>
                                    </div>
                                    <div>
                                        <h4 className={'text-black text-xl lg:text-2xl font-medium'}>Haitham Hussein</h4>
                                        <p className={'text-muted-foreground text-sm lg:text-md'}>React & NextJs Developer</p>
                                        <ul className={' mt-2 lg:mt-4 flex space-x-4'}>
                                            <SocialMediaIcon icon={<Github className={'size-4 lg:size-5'} />}/>
                                            <SocialMediaIcon icon={<Linkedin className={'size-4 lg:size-5'}/>}/>
                                            <SocialMediaIcon icon={<InstagramIcon className={'size-4 lg:size-5'}/>}/>
                                        </ul>
                                    </div>
                                </div>

                            </div>

                            <div className="mx-auto max-w-lg  lg:ml-0 lg:max-w-4/6  text-left">
                                <div className={'flex justify-start  pt-4 gap-x-2 items-center lg:pb-6'}>
                                    <div className={'size-2 rounded-full bg-primary'}></div>
                                    <p>Available for freelance</p>
                                </div>
                                <h1 className="mt-3  text-balance  text-5xl md:text-6xl lg:text-7xl lg:mt-0 xl:text-8xl">Crafting Seamless Experiences with React & Next.js</h1>
                                <p className="mt-8 max-w-2xl text-pretty text-lg">Focused on turning ideas into functional, high-performing web solutions with clean and maintainable code.</p>

                                <div className="mt-12 flex flex-col items-center gap-2 sm:flex-row justify-start">
                                    <PrimaryButton title={"Let's Work Together"}/>
                                    <Button
                                        key={2}
                                        asChild

                                        variant="ghost"
                                        className="px-5 text-base h-11 rounded-full">
                                        <Link href="#">
                                            <span className="text-nowrap">View My CV</span>
                                        </Link>
                                    </Button>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}
