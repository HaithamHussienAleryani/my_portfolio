import React from 'react';
import {cn} from "@/lib/utils";
import ProjectImage from '../../public/project.jpg';
import Image from "next/image";
import Link from "next/link";

const FeaturedProjectCard = () => {
    return (
        <Link href="/">
        <div className={cn("border pt-20 pb-5 hover:bg-white/5 duration-300  border-white/15 bg-black z-10")}>
            <div className={'flex px-20 gap-x-8 text-white items-center'}>
                <p className={'text-xl tracking-tighter'}> <span className={'project-title-brackets'}>{"{"}</span> Project Title One <span className={'project-title-brackets'}>{"}"}</span></p>
                     <span className={'text-muted-foreground pt-0.5 font-semibold'}>25/02/13</span>
            </div>
            <div className={'px-20'}>
                <h2 className={'text-white mt-4 tracking-tighter text-3xl font-light'}>Organization name</h2>
                <p className={'mt-4 text-muted-foreground text-lg tracking-tighter'}>Web Design & Web Development</p>
            </div>

            <div className={'px-5'}>
                <Image src={ProjectImage} alt={"Project Image"} className={"rounded-2xl mt-5 h-[500px] object-cover w-full"} />

            </div>
        </div>
        </Link>
    );
};

export default FeaturedProjectCard;
