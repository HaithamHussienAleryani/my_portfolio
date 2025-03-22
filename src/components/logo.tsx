import { cn } from '@/lib/utils'
import Image from "next/image";
import LogoImage from "../../public/logo.svg";


export const Logo = ({ className }: { className?: string }) => {
    return (
        <div className={'flex justify-center items-center gap-x-3'}>
            <Image src={LogoImage} alt={"Logo"}/>
            <h3 className={cn(className,'text-lg font-semibold')}>Haitham | Dev</h3>
        </div>
    )
}

