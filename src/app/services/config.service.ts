import { Injectable } from '@angular/core';
import { Observable, of, filter } from 'rxjs';
import { ConfigItem } from './config-item';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

const HttpOptions = {
  headers: new HttpHeaders({ 'Content-type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  apiUrl = 'http://localhost:3000/configuration';

  configuration: ConfigItem[] = [
    {
      id: 1,
      name: 'about',
      data: {
        title: 'Ultimate IPTV Experience',
        description: 'Revolutionizing Your Entertainment Business',
        detail:
          'Discover the best iptv services in the world by our website . we offer the best IPTV solutions to your customers!',
        IconBlocks: [
          {
            id: 1,
            icon: 'fa-globe',
            title: 'Wide Channel Selection',
            descreption:
              ' Exploe a vast array of channels and content, ensuring your customers have the ultimate viewing experience. Our IPTV services cater to all preferences.',
          },
          {
            id: 2,
            icon: 'fa-globe',
            title: 'Global Access',
            descreption:
              ' Easy access to international content with our IPTV solutions. Connect your customers to a world of entertainment from the comfort of their homes.',
          },
          {
            id: 3,
            icon: 'fa-users',
            title: 'User-Friendly Interface',
            descreption:
              ' Our IPTV platform is designed for simplicity, making it easy for your customers to navigate and enjoy their favorite shows without any hassle.',
          },
          {
            id: 4,
            icon: 'fa-cogs',
            title: 'Seamless Integration',
            descreption:
              ' Integrate our cutting-edge IPTV technology effortlessly into your business model. Stay ahead of the competition with our user-friendly and efficient solutions.',
          },
        ],
      },
    },
    {
      id: 2,
      name: 'clients',
      data: {
        title: 'ENTERTAIN WITH CONFIDENCE',
        description: 'Trusted by Entertainment Enthusiasts Worldwide',
        detail:
          'Experience top-notch entertainment with the confidence that our IPTV services bring. Join the community of satisfied users who have embraced a new era of immersive and reliable streaming.',

        companies: [
          {
            logo: 'assets/images/iptv-logos/logo1.png',
            name: 'StreamMasters',
          },
          {
            logo: 'assets/images/iptv-logos/logo2.png',
            name: 'MediaWave',
          },
          {
            logo: 'assets/images/iptv-logos/logo3.png',
            name: 'VisionTV',
          },
          {
            logo: 'assets/images/iptv-logos/logo4.png',
            name: 'ViewHub',
          },
          {
            logo: 'assets/images/iptv-logos/logo5.png',
            name: 'WatchSphere',
          },
          {
            logo: 'assets/images/iptv-logos/logo6.png',
            name: 'PureStream',
          },
          {
            logo: 'assets/images/iptv-logos/logo7.png',
            name: 'CineWave',
          },
          {
            logo: 'assets/images/iptv-logos/logo8.png',
            name: 'UltraVision',
          },
          {
            logo: 'assets/images/iptv-logos/logo9.png',
            name: 'EpicStream',
          },
        ],
      },
    },

    {
      id: 3,
      name: 'gallery',
      data: {
        galleryImages: [
          'assets/images/gallery-images/gallery-image-1.jpg',
          'assets/images/gallery-images/gallery-image-2.jpg',
          'assets/images/gallery-images/gallery-image-3.jpg',
          'assets/images/gallery-images/gallery-image-4.jpg',
          'assets/images/gallery-images/gallery-image-5.jpg',
          'assets/images/gallery-images/gallery-image-6.jpg',
        ],
      },
    },
    {
      id: 4,
      name: 'header',
      data: {
        title: 'THE BEST IPTV SERVICES IN UNIVERSE',
        description:
          'Experience the ultimate in entertainment with our premium IPTV services designed exclusively for customers. Elevate your viewing with a vast selection of channels and seamless streaming. Join us for a cutting-edge TV experience tailored just for you ',
        url: 'Pricing',
        buttontext: 'SUBSCRIBE TODAY',
      },
    },
    {
      id: 5,
      name: 'pricing',
      data: {
        title: 'YOUR CHOICE',
        description:
          'Discover the Perfect Plan for Your Ultimate Entertainment',
        buyButtonText: 'SUBSCRIBE TODAY',

        packages: [
          {
            name: 'Starter',
            description: 'Get started with essential channels',
            price: 19.99,
            featured: false,
            features: {
              main: 'Access to a curated selection of popular channels',
              additional: [
                'SD Quality Streaming',
                'Up to 2 Devices',
                '24/7 Customer Support',
                '2 Month Subscription',
              ],
            },
          },
          {
            name: 'Premium',
            description: 'Elevate your entertainment experience',
            price: 39.99,
            featured: true,
            features: {
              main: 'HD Quality Streaming with an extended channel lineup',
              additional: [
                'Up to 4 Devices',
                'Exclusive Content and Live Events',
                'Personalized Recommendations',
                '6 Months Subscription',
              ],
            },
          },
          {
            name: 'Ultimate',
            description: 'For the ultimate viewing pleasure',
            price: 59.99,
            featured: false,
            features: {
              main: '4K Ultra HD Streaming and access to premium content',
              additional: [
                'Unlimited Devices',
                'DVR Functionality',
                'VIP Customer Support',
                '12 Months Subscription',
              ],
            },
          },
        ],
      },
    },
    {
      id: 6,
      name: 'services',
      data: {
        testimonial: {
          quote:
            'Trying out these IPTV services was a game-changer for me! The sheer variety of entertainment, seamless streaming, and user-friendly interface exceeded all my expectations',
          author: 'Sarah smith, Happy Customer',
        },

        sectionHeading: {
          title: 'Discover the Future with Our IPTV Services',
          subtitle:
            'Immerse Yourself in a World of Unparalleled Entertainment Choices',
        },

        content: {
          paragraph1:
            'Elevate your viewing experience as you unlock a treasure trove of diverse content, spanning live TV channels, on-demand shows, and exclusive movies.',
          paragraph2:
            'Join us on the forefront of entertainment evolution and redefine your viewing habits with a world of content at your fingertips',
        },

        videoConfig: {
          videoid: 'ByAn8DF8Ykk',
          videosite: 'https://www.youtube.com',
        },

        dancerImage: 'assets/images/dancer.jpg',
      },
    },
    {
      id: 7,
      name: 'footer',
      data: {
        title: 'Made with love by',
        url: 'https://www.instagram.com/yasuuun.x7/',
        developer: 'yassine',
      },
    },
    {
      id: 8,
      name: 'testimonials',
      data: {
        title: 'FEEDBACK',
        description: 'What our customers are saying',

        feedback: [
          {
            image: 'assets/images/user-images/user-1.jpg',
            quote:
              'Ive tried many IPTV services, but none compare to this! The range of channels, the HD quality, and the intuitive interface make it a joy to use. The vast content library ensures theres always something for everyone. Kudos to the team for delivering an exceptional entertainment experience!',
            author: 'John Doe - Happy Customer',
          },
          {
            image: 'assets/images/user-images/user-2.jpg',
            quote:
              'No more buffering woes or laggy streams – this IPTV service has truly mastered the art of seamless streaming. I can now enjoy my favorite shows and sports events without any interruptions. The reliability and quality make it my go-to choice for entertainment. Its a game-changer',
            author: 'Roslyn Doe - Happy Customer',
          },
          {
            image: 'assets/images/user-images/user-3.jpg',
            quote:
              'What sets this IPTV service apart is not just the incredible content but also the exceptional customer service. Any query or issue I had was swiftly addressed by their support team. Its reassuring to know that they prioritize customer satisfaction. A fantastic service with even better support – Im a happy, loyal customer!',
            author: 'Thomas Doe - Happy Customer',
          },
        ],
      },
    },
    {
      id: 9,
      name: 'nav',
      data: {
        logoBannerSrc: 'assets/images/logo.png',
        logoNavigationSrc: 'assets/images/logo-2.png',

        socialIcons: [
          {
            title: 'Facebook',
            iconClass: 'fa fa-facebook fa-1x',
            link: 'https://www.facebook.com/username',
            target: '_blank',
          },
          {
            title: 'Google+',
            iconClass: 'fa fa-google-plus fa-1x',
            link: 'http://google.com/+username',
            target: '_blank',
          },
          {
            title: 'Twitter',
            iconClass: 'fa fa-twitter fa-1x',
            link: 'http://www.twitter.com/username',
            target: '_blank',
          },
          {
            title: 'Instagram',
            iconClass: 'fa fa-instagram fa-1x',
            link: 'http://www.instagram.com/yasuuun.x7',
            target: '_blank',
          },
          {
            title: 'Behance',
            iconClass: 'fa fa-behance fa-1x',
            link: 'http://www.behance.net',
            target: '_blank',
          },
        ],

        navigationLinks: [
          { path: '/Home', label: 'Home' },
          { path: '/About', label: 'About' },
          { path: '/Gallery', label: 'Gallery' },
          { path: '/Services', label: 'Services' },
          { path: '/Testimonials', label: 'Testimonials' },
          { path: '/Clients', label: 'Clients' },
          { path: '/Pricing', label: 'Pricing' },
        ],
      },
    },
  ];

  constructor(private http: HttpClient) {}

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getAllPages(): Observable<ConfigItem[]> {
    // return this.configuration;
    return this.http.get<ConfigItem[]>(this.apiUrl) ?? {};
  }

  getPageById(id: number): Observable<ConfigItem> {
    // return this.configuration;
    return this.http.get<ConfigItem>(`${this.apiUrl}/${id}`) ?? {};
  }

  getPageByName(pageName: string): Observable<ConfigItem> {
    // return this.configuration.find((configItem) => configItem.name === pageName);
    return this.http
      .get<ConfigItem>(this.apiUrl)
      .pipe(filter((configItem) => configItem.name === pageName));
  }
}
