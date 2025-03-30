'use client'
import React from 'react';
import {cn} from "@/lib/utils";
import ProjectImage from '../../public/project.jpg';
import Image from "next/image";
import Link from "next/link";
import {motion, useScroll, useTransform} from 'motion/react';

type props = {
    startPixel: number;
    endPixel: number;
    small?: boolean;
}

const FeaturedProjectCard = ({startPixel,endPixel,small=false}:props) => {
    const { scrollY } = useScroll();


    const scale = useTransform(scrollY,[startPixel,endPixel],[0.7,1]);

    return (
        <Link href="/" className={'z-10'}>
        <div className={cn("border pt-20 pb-5 hover:bg-sidebar-primary duration-300  border-white/15 bg-black ")}>
            <div className={'flex px-20 gap-x-8 text-white items-center'}>
                <p className={'text-xl tracking-tighter'}> <span className={'project-title-brackets'}>{"{"}</span> Project Title One <span className={'project-title-brackets'}>{"}"}</span></p>
                     <span className={'text-muted-foreground pt-0.5 font-semibold'}>25/02/13</span>
            </div>
            <div className={'px-20'}>
                <h2 className={'text-white mt-4 tracking-tighter text-3xl font-light'}>Organization name</h2>
                <p className={'mt-4 text-muted-foreground text-lg tracking-tighter'}>Web Design & Web Development</p>
            </div>

            <motion.div className={'px-5'} style={
                {
                    scale,
                }
            } >
                <Image src={ProjectImage} alt={"Project Image"} className={ cn(!small&&"h-[500px]", small&&"h-[350px]" , "rounded-xl mt-5  object-cover w-full")  } />
            </motion.div>
        </div>
        </Link>
    );
};

export default FeaturedProjectCard;
