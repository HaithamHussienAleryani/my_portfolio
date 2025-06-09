export interface PortfolioContent {
    hero_greating: string;
    hero_header: string;
    hero_sub_header: string;
    hero_image: SanityImageAsset;
    hero_cv: SanityFileAsset;
    hero_clients: SanityImageAsset[];
    about_title: string;
    about_subtitle: string;
    about_button: string;
    services_title: string;
    services_subtitle: string;
    services: ServiceReference[];
    projects: ProjectReference[];
    choose_me_title: string;
    choose_me_subtitle: string;
    choose_me_image: SanityImageAsset;
    choose_me_services: ServiceReference[];
    testimonial_title: string;
    testimonials: TestimonialReference[];
    contact_title: string;
    contact_subtitle: string;
    contact_email: string;
    contact_phone: string;
    contact_address: string;
    footer_description: string;
    social_edia: SocialReference[];
}

interface SanityImageAsset {
    _type: 'image';
    asset: {
        _ref: string;
        _type: 'reference';
    };
}

interface SanityFileAsset {
    _type: 'file';
    asset: {
        _ref: string;
        _type: 'reference';
    };
}

interface ServiceReference {
    _type: 'reference';
    _ref: string;
}

interface ProjectReference {
    _type: 'reference';
    _ref: string;
}

interface TestimonialReference {
    _type: 'reference';
    _ref: string;
}

export interface SocialReference {
    _type: 'reference';
    _ref: string;
}
