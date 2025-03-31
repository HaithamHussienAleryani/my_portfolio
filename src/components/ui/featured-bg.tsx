'use client'
import React, {useRef} from 'react';
import Image from "next/image";
import OutlinedLogo from "../../../public/logo-outlined.svg";
import {motion, useScroll, useTransform} from "motion/react";

const FeaturedBackgroundImage = () => {
    const ref = useRef<HTMLDivElement>(null);
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["0 1", "1 1"],
    });
    const rotate = useTransform(scrollYProgress, [0, 1], [0.7, 13]);

    return (
        <motion.div ref={ref}>
            <Image src={OutlinedLogo} className={'featured-projects-logo'} alt={'featured projects image outlined logo'}/>
        </motion.div>
    );
};

export default FeaturedBackgroundImage;
