import React from 'react';
import Image from "next/image";
import OutlinedLogo from "../../public/logo-outlined.svg";
import PrimaryButton from "@/components/PrimaryButton";
import FeaturedProjectCard from "@/components/featured-proeject-card";
import FeaturedBackgroundImage from "@/components/ui/featured-bg";


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
            <div className={' grid md:grid-cols-3 '}>
                <FeaturedProjectCard small/>
                <FeaturedProjectCard small/>
            </div>
        </section>
    );
};

export default FeaturedProjectsSection;
