import React from 'react';
import Image from "next/image";
import OutlinedLogo from "../../public/logo-outlined.svg";
import PrimaryButton from "@/components/PrimaryButton";
import FeaturedProjectCard from "@/components/featured-proeject-card";



const FeaturedProjectsSection = () => {
    return (
        <section className="featured-projects">
            <Image src={OutlinedLogo} className={'featured-projects-logo'} alt={'featured projects image outlined logo'} />
            <div className={'max-w-6xl mx-auto'}>
                <div className={'flex justify-start  pt-4 gap-x-2 items-center lg:pb-6'}>
                    <div className={'size-3 rounded-full shadow-[0px_2px_13px_0px_rgba(130,255,31,0.5)] bg-primary'}></div>
                    <p className={'text-muted-foreground font-semibold'}> 01 - Featured Projects</p>

                </div>
                <h1 className={'text-8xl font-thin max-w-4xl text-white'}>I blend creativity with technical expertise</h1>
                <PrimaryButton className={'mt-16 '} title={"Let's work together"}/>
            </div>
            <div className={'mt-56 grid md:grid-cols-2 '}>
                <FeaturedProjectCard startPixel={1150} endPixel={1700}/>
                <FeaturedProjectCard startPixel={1150} endPixel={1700}/>
            </div>
            <div className={' grid md:grid-cols-3 '}>
                <FeaturedProjectCard small startPixel={1800} endPixel={2200}/>
                <FeaturedProjectCard small startPixel={1800} endPixel={2200}/>
            </div>
        </section>
    );
};

export default FeaturedProjectsSection;
