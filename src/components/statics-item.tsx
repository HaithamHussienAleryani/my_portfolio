import React from 'react';

const StaticsItem = ({staticRate,staticDesc}:{staticRate:string,staticDesc:string}) => {
    return (
        <div className="flex flex-col items-center justify-center  text-white text-2xl md:text-4xl font-medium lowercase">
            <h3><span className={'text-primary '}>{staticRate} | </span>{staticDesc}</h3>
        </div>
    );
};

export default StaticsItem;
