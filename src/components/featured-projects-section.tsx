import React from 'react';
import PrimaryButton from "@/components/PrimaryButton";
import FeaturedProjectCard from "@/components/featured-proeject-card";
import FeaturedBackgroundImage from "@/components/ui/featured-bg";
import Link from "next/link";
import {ArrowUpRight} from "lucide-react";


const FeaturedProjectsSection = () => {
    return (
        <section className="featured-projects">
            <FeaturedBackgroundImage/>
            <div className={' md:max-w-6xl md:mx-auto'}>
                <div className={'flex justify-start px-6 md:px-0 pt-4 gap-x-2 items-center pb-3 lg:pb-6'}>
                    <div className={'size-3 rounded-full shadow-[0px_2px_13px_0px_rgba(130,255,31,0.5)] bg-primary'}></div>
                    <p className={'text-muted-foreground text-sm md:text-md font-semibold'}> 01 - Featured Projects</p>
                </div>
                <h1 className={' text-4xl md:text-8xl px-6 md:px-0   md:font-thin max-w-4xl text-white'}>I blend
                    creativity with
                    technical
                    expertise</h1>
                <PrimaryButton className={'mt-16 mx-6 md:mx-0 '} title={"Let's work together"}/>
            </div>
            <div className={' mt-10 md:mt-56 grid md:grid-cols-2 '}>
                <FeaturedProjectCard/>
                <FeaturedProjectCard/>


            </div>
            <div className={' grid xl:grid-cols-3 '}>
                <FeaturedProjectCard small/>
                <FeaturedProjectCard small/>
                <Link href={'#'}
                      className={' bg-primary h-[250px]  text-center group/arrow  flex flex-col  justify-center text-black lg:h-auto text-xl md:m-6 md:rounded-2xl hover:rounded-none hover:m-0 hover:bg-primary duration-500'}>
                    <div className={'flex justify-center items-center space-x-5'}>
                        <p>View
                            all
                            projects</p>
                        <div
                            className={'bg-white rounded-full p-2 group-hover/arrow:-translate-x-2 transition-all duration-500 text-black'}>
                            <ArrowUpRight
                                className={'size-6 group-hover/arrow:rotate-45 transition-all ease-in-out duration-300'}/>
                        </div>
                    </div>

                </Link>
            </div>
        </section>
    );
};

export default FeaturedProjectsSection;
