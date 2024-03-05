export interface ConfigItem {
  id: number;
  name: string;
  data: {
    title?: string;
    description?: string;
    detail?: string;
    url?: string;
    developer?: string;
    buttontext?: string;
    price?: number;
    IconBlocks?: {
      id: number;
      icon: string;
      title: string;
      descreption: string;
    }[];

    companies?: {
      logo: string;
      name: string;
    }[];
    galleryImages?: string[];

    packages?: {
      name: string;
      description: string;
      price: number;
      featured: boolean;
      features: {
        main: string;
        additional: string[];
      };
    }[];

    features?: {
      main: string;
      additional: string[];
    };

    testimonial?: {
      quote: string;
      author: string;
    };

    sectionHeading?: {
      title: string;
      subtitle: string;
    };

    content?: {
      paragraph1: string;
      paragraph2: string;
    };

    videoConfig?: {
      videoid: string;
      videosite: string;
    };

    dancerImag?: string;

    feedback?: {
      image: string;
      quote: string;
      author: string;
    }[];
    logoBannerSrc?: string;
    logoNavigationSrc?: string;
    socialIcons?: {
      title: string;
      iconClass: string;
      link: string;
      target: string;
    }[];
    navigationLinks?: {
      path: string;
      label: string;
    }[];
    dancerImage?: string;
    buyButtonText?: string;
  };
}
