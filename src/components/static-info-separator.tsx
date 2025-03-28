import React from 'react';
import {Asterisk} from "lucide-react";

const StaticInfoSeparator = () => {
    return (
        <Asterisk className={'text-primary size-10 group-hover/static-hover:rotate-180 transition-all delay-100 duration-1000 ease-in-out  md:size-16'}/>
    );
};

export default StaticInfoSeparator;
