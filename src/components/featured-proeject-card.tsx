'use client'
import React, {useRef} from 'react';
import {cn} from "@/lib/utils";
import ProjectImage from '../../public/project.jpg';
import Image from "next/image";
import Link from "next/link";
import {motion, useScroll, useTransform} from 'motion/react';

type props = {
    small?: boolean;
}

const FeaturedProjectCard = ({small = false}: props) => {
    const ref = useRef<HTMLDivElement>(null);
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["0 1", "1 1"],
        }
    );


    const scale = useTransform(scrollYProgress, [0, 0.9], [0.7, 1]);

    return (
        <Link href="/" className={'z-10 bg-black'}>
            <div className={cn("border pt-8 md:pt-20 pb-5 hover:bg-sidebar-primary duration-300  border-white/15  ")}>


                <div className={'flex px-8 md:px-20 gap-x-8 text-white items-center'}>
                    <p className={'text-xl tracking-tighter'}><span className={'project-title-brackets'}>{"{"}</span> Project
                        Title
                        One <span className={'project-title-brackets'}>{"}"}</span></p>
                    <span className={'text-muted-foreground pt-0.5 font-semibold'}>25/02/13</span>
                </div>
                <div className={'px-8 md:px-20'}>
                    <h2 className={'text-white mt-4 tracking-tighter text-3xl font-light'}>Organization name</h2>
                    <p className={'mt-4 text-muted-foreground text-lg tracking-tighter'}>Web Design & Web Development</p>
                </div>


                <motion.div ref={ref} className={'px-5'} style={
                    {
                        scale,
                    }
                }>
                    <Image src={ProjectImage} alt={"Project Image"}
                           className={cn(!small && " h-[300px] md:h-[500px]", small && " h-[300px] md:h-[350px]", "rounded-xl mt-5  object-cover w-full")}/>
                </motion.div>


            </div>
        </Link>
    );
};

export default FeaturedProjectCard;
