
export interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export type Language = 'ES' | 'EN' | 'HU';

export interface RSVPData {
  fullName: string;
  attending: 'yes' | 'no' | null;
  mealPreference: 'meat' | 'fish' | null;
  allergies: string;
}
