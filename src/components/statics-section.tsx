import React from 'react';
import {ProgressiveBlur} from "@/components/motion-primitives/progressive-blur";
import {InfiniteSlider} from "@/components/motion-primitives/infinite-slider";
import StaticsItem from "@/components/statics-item";
import StaticInfoSeparator from "@/components/static-info-separator";



const StaticsSection = () => {
    return (
        <section className="bg-OffBlack">

            <div className="flex flex-col justify-center   items-center md:flex-row">

                <div className="relative h-20 group/static-hover md:h-24 flex flex-col justify-center   w-full">
                    <InfiniteSlider
                        speedOnHover={20}
                        speed={80}
                        gap={140} className={'hidden md:block justify-center items-center'}>
                        <StaticsItem staticRate={"4+"} staticDesc={"Years of Experience"}/>
                        <StaticInfoSeparator/>
                        <StaticsItem staticRate={"5+"} staticDesc={"Projects Finished"}/>
                        <StaticInfoSeparator/>
                        <StaticsItem staticRate={"93%"} staticDesc={"client retention rate"}/>
                        <StaticInfoSeparator/>
                        <StaticsItem staticRate={"6+"} staticDesc={"Satisfied Clients"}/>
                        <StaticInfoSeparator/>

                    </InfiniteSlider>

                    <InfiniteSlider
                        speedOnHover={20}
                        speed={80}
                        gap={80} className={'block md:hidden'}>
                        <StaticsItem staticRate={"4+"} staticDesc={"Years of Experience"}/>
                        <StaticInfoSeparator/>
                        <StaticsItem staticRate={"5+"} staticDesc={"Projects Finished"}/>
                        <StaticInfoSeparator/>
                        <StaticsItem staticRate={"93%"} staticDesc={"client retention rate"}/>
                        <StaticInfoSeparator/>
                        <StaticsItem staticRate={"6+"} staticDesc={"Satisfied Clients"}/>
                        <StaticInfoSeparator/>

                    </InfiniteSlider>

                    <div className="bg-linear-to-r   from-OffBlack absolute inset-y-0 left-0 w-20"></div>
                    <div className="bg-linear-to-l from-OffBlack absolute inset-y-0 right-0 w-20"></div>
                    <ProgressiveBlur
                        className="pointer-events-none absolute left-0 top-0 h-full w-20"
                        direction="left"
                        blurIntensity={1}
                    />
                    <ProgressiveBlur
                        className="pointer-events-none absolute right-0 top-0 h-full w-20"
                        direction="right"

                        blurIntensity={1}
                    />
                </div>
            </div>

        </section>
    );
};

export  default StaticsSection;