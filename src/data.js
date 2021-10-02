import homeFeatureCardIconOne from './assets/icons/locate.svg';
import homeFeatureCardIconTwo from './assets/icons/scooter.svg';
import homeFeatureCardIconThree from './assets/icons/ride.svg';

import { FaFacebookSquare, FaTwitter, FaInstagram } from 'react-icons/fa';

import homeShowcaseOne from './assets/images/telemetry.jpg';
import homeShowcaseTwo from './assets/images/near-you.jpg';
import homeShowcaseThree from './assets/images/payments.jpg';

import aboutShowcaseOne from './assets/images/digital-era.jpg';
import aboutShowcaseTwo from './assets/images/better-living.jpg';

import patternCircle from './assets/patterns/circle.svg';
import patternCircleDark from './assets/patterns/circledark.svg';
import patternArrowOne from './assets/patterns/left-downward-arrow.svg';
import patternArrowTwo from './assets/patterns/right-arrow.svg';

import companyValueImageOne from './assets/images/our-tech.jpg';
import companyValueImageTwo from './assets/images/our-integrity.jpg';
import companyValueImageThree from './assets/images/our-community.jpg';

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

export const aboutFeatureSectionsData = [
  {
    id: 1,
    title: 'Mobility for the digital age',
    description:
      'Getting around should be simple (and even fun!) for everyone. We embrace technology to provide low cost, smart access to scooters at your fingertips.',
    showcase: aboutShowcaseOne,
    alt: 'woman looking at her phone',
    showButton: false,
    patterns: {
      circle: patternCircle,
      circleDark: patternCircleDark,
      arrow: patternArrowOne,
    },
  },
  {
    id: 2,
    title: 'Better urban living',
    description:
      'We’re helping connect cities and bring people closer together. Our scooters are also fully-electric and we offset the minimal carbon footprint for each ride.',
    showcase: aboutShowcaseTwo,
    alt: 'city street',
    showButton: false,
    patterns: {
      circle: patternCircle,
      circleDark: patternCircleDark,
      arrow: patternArrowTwo,
    },
  },
];

export const companyValuesCardsData = [
  {
    id: 1,
    image: companyValueImageOne,
    alt: 'person using phone',
    number: '01',
    value: 'Our tech',
    description:
      'We’re using cutting edge technology to drive accessible urban transportation forward. Our fully electric scooters are a joy to ride!',
  },
  {
    id: 2,
    image: companyValueImageTwo,
    alt: 'person on mopid',
    number: '02',
    value: 'Our integrity',
    description:
      'We are fully committed to deliver a great yet safe, sustainable micro-mobility experience in every city we serve.',
  },
  {
    id: 3,
    image: companyValueImageThree,
    alt: 'people crossing street',
    number: '03',
    value: 'Our community',
    description:
      'We support every community we serve. All workers are paid a living wage based on their location and are Scoot employees.',
  },
];

export const faqsData = [
  [
    {
      id: 1,
      question: 'How do i download the app?',
      answer:
        'To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page.',
    },
    {
      id: 2,
      question: 'Can i find a nearby Scoots?',
      answer:
        "Definitely! Simply open up the app and allow us to find your location while using it. We'll show you all of the closest Scoots and some extra useful information.",
    },
    {
      id: 3,
      question: 'Do i need a license to ride?',
      answer:
        'Yup! We provide information inside the app regarding local laws and the license you need to be able to ride our Scoots.',
    },
  ],
  [
    {
      id: 1,
      question: 'Should i wear a helmet?',
      answer:
        'Yes, please do! All cities have different laws. But we strongly strongly strongly recommend always wearing a helmet regardless of the local laws. We like you and we want you to be as safe as possible while Scooting.',
    },
    {
      id: 2,
      question: 'How about the rules & regulations?',
      answer:
        "Now is not the time to be a rule breaker. Be sure you're complying with all local laws and regulations. Also, just be a good human being. Be sure not to park your Scoot where it can block access to buildings or get in people's way.",
    },
    {
      id: 3,
      question: 'What if I damage my Scoot?',
      answer:
        "Be sure to read our terms and conditions carefully. Not the most fun job we know but we make it as clear as possible. There's an option to add insurance for each trip, or you can sign up for annual insurance if you're a regular Scooter.",
    },
  ],
];
