import homeFeatureCardIconOne from './assets/icons/locate.svg';
import homeFeatureCardIconTwo from './assets/icons/scooter.svg';
import homeFeatureCardIconThree from './assets/icons/ride.svg';

import { FaFacebookSquare, FaTwitter, FaInstagram } from 'react-icons/fa';

import homeShowcaseOne from './assets/images/telemetry.jpg';
import homeShowcaseTwo from './assets/images/near-you.jpg';
import homeShowcaseThree from './assets/images/payments.jpg';

import patternCircle from './assets/patterns/circle.svg';
import patternCircleDark from './assets/patterns/circledark.svg';
import patternArrowOne from './assets/patterns/left-downward-arrow.svg';
import patternArrowTwo from './assets/patterns/right-arrow.svg';

export const linksData = [
  {
    id: 1,
    path: '/About',
    text: 'About',
  },
  {
    id: 2,
    path: '/Location',
    text: 'Location',
  },
  {
    id: 3,
    path: '/Careers',
    text: 'Careers',
  },
];

export const homeFeatureCardsData = [
  {
    id: 1,
    icon: homeFeatureCardIconOne,
    title: 'Locate with app',
    description:
      'Use the app to find the nearest scooter to you. We are continuously placing scooters in the areas with most demand, so one should never be too far away.',
  },
  {
    id: 2,
    icon: homeFeatureCardIconTwo,
    title: 'Pick your scooter',
    description:
      'We show the most important info for the scooters closest to you. So you know how much charge they have left and can see roughly how much it will cost.',
  },
  {
    id: 3,
    icon: homeFeatureCardIconThree,
    title: 'Enjoy the ride',
    description:
      'Scan the QR code and the bike will unlock. Retract the cable lock, put on a helmet, and you’re off! Always lock bikes away from walkways and accessibility ramps.',
  },
];

export const socialsData = [
  {
    id: 1,
    social: 'Facebook',
    icon: <FaFacebookSquare />,
    path: '#!',
  },
  {
    id: 2,
    social: 'Twitter',
    icon: <FaTwitter />,
    path: '#!',
  },
  {
    id: 3,
    social: 'Instagram',
    icon: <FaInstagram />,
    path: '#!',
  },
];

export const homeFeatureSectionsData = [
  {
    id: 1,
    title: 'Easy to use riding telemetry',
    description:
      "The Scoot app is available with riding telemetry. This means it can show you your average speed, how long you've been using the scooter,your traveling distance, and many more things all in an easy to use app.",
    showcase: homeShowcaseOne,
    alt: 'woman looking at her phone',
    showButton: true,
    buttonText: 'Learn More',
    buttonPath: '/About',
    patterns: {
      circle: patternCircle,
      circleDark: patternCircleDark,
      arrow: patternArrowOne,
    },
  },
  {
    id: 2,
    title: 'Coming to a city near you',
    description:
      'Scoot is available in 4 major cities so far. We’re expanding rapidly, so be sure to let us know if you want to see us in your hometown. We’re aiming to let our scooters loose on 23 cities over the coming year.',
    showcase: homeShowcaseTwo,
    alt: 'city street',
    showButton: true,
    buttonText: 'Learn More',
    buttonPath: '/About',
    patterns: {
      circle: patternCircle,
      circleDark: patternCircleDark,
      arrow: patternArrowTwo,
    },
  },
  {
    id: 3,
    title: 'Zero hassle payments',
    description:
      'Our payment is as easy as one two three. We accept most credit cards and debit cards. You can also link your PayPal account inside the app. Need to pay later? No worries! You can defer payment for up to a month.',
    showcase: homeShowcaseThree,
    alt: 'man pulling money from wallet',
    showButton: true,
    buttonText: 'Learn More',
    buttonPath: '/About',
    patterns: {
      circle: patternCircle,
      circleDark: patternCircleDark,
      arrow: patternArrowOne,
    },
  },
];
