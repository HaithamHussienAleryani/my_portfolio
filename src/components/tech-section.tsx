import React from 'react';
import {ProgressiveBlur} from "@/components/motion-primitives/progressive-blur";
import {InfiniteSlider} from "@/components/motion-primitives/infinite-slider";
import Image from "next/image";

const TechSection = () => {
    return (
        <section className="bg-OffBlack py-9">
            <div className="group relative  m-auto  px-6">
                <div className="flex flex-col  items-center md:flex-row">
                    <div className="md:max-w-44 md:border-r border-white md:pr-6">
                        <p className="text-end text-white text-sm">Mastering the best Technologies</p>
                    </div>
                    <div className="relative py-6 md:w-[calc(100%-11rem)] w-full">
                        <InfiniteSlider
                            speedOnHover={20}
                            speed={80}
                            gap={112}>
                            <div className="flex">
                                <Image
                                    className="mx-auto h-5 w-fit invert"
                                    src="https://html.tailus.io/blocks/customers/nvidia.svg"
                                    alt="Nvidia Logo"
                                    height="40"
                                    width="40"
                                />
                            </div>
                        </InfiniteSlider>

                        <div className="bg-linear-to-r from-OffBlack absolute inset-y-0 left-0 w-20"></div>
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
            </div>
        </section>
    );
};

export default TechSection;