import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import {Button} from "@/components/ui/button";
import { InfiniteSlider } from '@/components/motion-primitives/infinite-slider'
import { ProgressiveBlur } from '@/components/motion-primitives/progressive-blur'
import { HeroHeader } from '@/components/hero-header'
import HeroBg from '../../public/upscaled-hero-bg.png';
import LogoImage from "../../public/logo.svg";
import {Github, InstagramIcon, Linkedin} from "lucide-react";
import SocialMediaIcon from "@/components/social-media-icon";




export default function HeroSection() {
    return (
        <>
            <Image src={HeroBg} alt={"Hero Image"}  className={'absolute h-screen w-screen'}/>
            <HeroHeader />
            <main className="overflow-x-hidden">
                <section>
                    <div className="pb-24 pt-12 md:pb-32 lg:pb-56 lg:pt-44">
                        <div className="relative mx-auto flex max-w-6xl flex-col px-6 lg:flex lg:flex-row justify-center items-start">
                            <div className={" w-full lg:w-1/3 lg:pt-12 flex items-center  gap-x-4"}>
                               <div>
                                   <Image src={LogoImage} alt={"Haitham`s image"} className={'size-20 rounded-full'}/>
                               </div>
                                <div>
                                    <h4 className={'text-black text-xl font-semibold'}>Haitham Hussein</h4>
                                    <p className={'text-muted-foreground'}>React & NextJs Developer</p>
                                    <ul className={'mt-4 flex space-x-4'}>
                                        <SocialMediaIcon icon={<Github/>}/>
                                        <SocialMediaIcon icon={<Linkedin/>}/>
                                        <SocialMediaIcon icon={<InstagramIcon/>}/>

                                    </ul>
                                </div>
                            </div>
                            <div className="mx-auto max-w-lg text-center lg:ml-0 lg:w-2/3 lg:text-left">
                                <h1 className="mt-8 max-w-6xl text-balance text-4xl font-medium md:text-5xl lg:mt-0 xl:text-6xl">Crafting Seamless Experiences with React & Next.js</h1>
                                <p className="mt-8 max-w-2xl text-pretty text-lg">Focused on turning ideas into functional, high-performing web solutions with clean and maintainable code.</p>

                                <div className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
                                    <Button
                                        asChild
                                        size="lg"
                                        className="px-5 text-base">
                                        <Link href="#">
                                            <span className="text-nowrap">Let&#39;s Work Together</span>
                                        </Link>
                                    </Button>
                                    <Button
                                        key={2}
                                        asChild
                                        size="lg"
                                        variant="ghost"
                                        className="px-5 text-base">
                                        <Link href="#">
                                            <span className="text-nowrap">View My CV</span>
                                        </Link>
                                    </Button>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
                <section className="bg-background pb-16 md:pb-32">
                    <div className="group relative m-auto max-w-6xl px-6">
                        <div className="flex flex-col items-center md:flex-row">
                            <div className="md:max-w-44 md:border-r md:pr-6">
                                <p className="text-end text-sm">Powering the best teams</p>
                            </div>
                            <div className="relative py-6 md:w-[calc(100%-11rem)]">
                                <InfiniteSlider
                                    speedOnHover={20}
                                    speed={40}
                                    gap={112}>
                                    <div className="flex">
                                        <img
                                            className="mx-auto h-5 w-fit dark:invert"
                                            src="https://html.tailus.io/blocks/customers/nvidia.svg"
                                            alt="Nvidia Logo"
                                            height="20"
                                            width="auto"
                                        />
                                    </div>

                                    <div className="flex">
                                        <img
                                            className="mx-auto h-4 w-fit dark:invert"
                                            src="https://html.tailus.io/blocks/customers/column.svg"
                                            alt="Column Logo"
                                            height="16"
                                            width="auto"
                                        />
                                    </div>
                                    <div className="flex">
                                        <img
                                            className="mx-auto h-4 w-fit dark:invert"
                                            src="https://html.tailus.io/blocks/customers/github.svg"
                                            alt="GitHub Logo"
                                            height="16"
                                            width="auto"
                                        />
                                    </div>
                                    <div className="flex">
                                        <img
                                            className="mx-auto h-5 w-fit dark:invert"
                                            src="https://html.tailus.io/blocks/customers/nike.svg"
                                            alt="Nike Logo"
                                            height="20"
                                            width="auto"
                                        />
                                    </div>
                                    <div className="flex">
                                        <img
                                            className="mx-auto h-5 w-fit dark:invert"
                                            src="https://html.tailus.io/blocks/customers/lemonsqueezy.svg"
                                            alt="Lemon Squeezy Logo"
                                            height="20"
                                            width="auto"
                                        />
                                    </div>
                                    <div className="flex">
                                        <img
                                            className="mx-auto h-4 w-fit dark:invert"
                                            src="https://html.tailus.io/blocks/customers/laravel.svg"
                                            alt="Laravel Logo"
                                            height="16"
                                            width="auto"
                                        />
                                    </div>
                                    <div className="flex">
                                        <img
                                            className="mx-auto h-7 w-fit dark:invert"
                                            src="https://html.tailus.io/blocks/customers/lilly.svg"
                                            alt="Lilly Logo"
                                            height="28"
                                            width="auto"
                                        />
                                    </div>

                                    <div className="flex">
                                        <img
                                            className="mx-auto h-6 w-fit dark:invert"
                                            src="https://html.tailus.io/blocks/customers/openai.svg"
                                            alt="OpenAI Logo"
                                            height="24"
                                            width="auto"
                                        />
                                    </div>
                                </InfiniteSlider>

                                <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20"></div>
                                <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20"></div>
                                <ProgressiveBlur
                                    className="pointer-events-none absolute left-0 top-0 h-full w-20"
                                    direction="left"
                                    blurIntensity={1}
                                />
                                <ProgressiveBlur
                                    className="pointer-events-none absolute right-0 top-0 h-full w-20"
                                    direction="right"
                                    blurIntensity={1}
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
