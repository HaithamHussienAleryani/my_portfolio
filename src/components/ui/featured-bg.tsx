'use client'
import React from 'react';
import Image from "next/image";
import OutlinedLogo from "../../../public/logo-outlined.svg";
import {motion} from "motion/react";

const FeaturedBackgroundImage = () => {

    return (
        <motion.div>
            <Image src={OutlinedLogo} className={'featured-projects-logo'} alt={'featured projects image outlined logo'}/>
        </motion.div>
    );
};

export default FeaturedBackgroundImage;
