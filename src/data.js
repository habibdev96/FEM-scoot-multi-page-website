import homeFeatureCardIconOne from './assets/icons/locate.svg';
import homeFeatureCardIconTwo from './assets/icons/scooter.svg';
import homeFeatureCardIconThree from './assets/icons/ride.svg';

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
