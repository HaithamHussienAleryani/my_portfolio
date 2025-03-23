import  {ReactNode} from 'react';

const SocialMediaIcon = ({icon}:{icon:ReactNode}) => {
    return (
        <div className={'hover:rotate-[360deg] text-muted-foreground hover:text-black transition-all duration-[600ms] ease-in-out cursor-pointer'}>
            {icon}
        </div>

    );
};

export default SocialMediaIcon;
