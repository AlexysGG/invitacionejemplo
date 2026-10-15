export interface Venue {
  id: 'church' | 'reception';
  title: string;
  subtitle: string;
  time: string;
  name: string;
  address: string;
  city: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  googleMapsUrl: string;
  wazeUrl: string;
  recommendations: string[];
  bannerGradient: string;
}

export interface TimelineItem {
  time: string;
  title: string;
  description: string;
  iconName: string;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  tag: string;
  caption: string;
  aspect: string;
  bgGradient: string;
  svgIcon: 'dress' | 'roses' | 'crown' | 'sparkle' | 'camera' | 'music';
}

export interface GuestbookEntry {
  id: string;
  name: string;
  relation: string;
  message: string;
  date: string;
  likes: number;
}

export interface RSVPFormData {
  fullName: string;
  phone: string;
  guestsCount: number;
  attending: boolean;
  dietaryRestrictions: string;
  songRequest: string;
  message: string;
}
