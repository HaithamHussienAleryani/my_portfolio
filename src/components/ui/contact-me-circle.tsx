import React, {Component} from 'react';
import {ArrowUpRight} from "lucide-react";
import CircularText from "@/components/motion-primitives/circle-text";

class ContactMeCircle extends Component {
    render() {
        return (
            <div className={'mt-12 group/arrow-move  relative   w-fit'}>
                <ArrowUpRight className={' absolute scale-50 size-full group-hover/arrow-move:rotate-[100deg] duration-500 ease-in-out ease-initial transition-all p-8 bg-muted rounded-full  '}/>
                <CircularText
                    text="LETS*WORK*TOGETHER*"
                    onHover="speedUp"
                    spinDuration={30}
                    className=""
                />
            </div>

        );
    }
}

export default ContactMeCircle;