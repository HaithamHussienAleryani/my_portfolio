import React from 'react';
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {ArrowUpRight} from "lucide-react";

function PrimaryButton({title}: {title: string}) {
    return (
        <Button
            asChild
            className="h-14 group/arrow    px-3 hover:px-5 transition-all duration-500 rounded-full text-base">
            <Link href="#">
                <span className="text-nowrap text-black mx-3">{title}</span>
                <div className={'bg-white rounded-full p-2 group-hover/arrow:translate-x-2 transition-all duration-500 text-black'}>
                    <ArrowUpRight className={'size-6 group-hover/arrow:rotate-90 transition-all ease-in-out duration-300' } />
                </div>
            </Link>
        </Button>
    );
}

export default PrimaryButton;