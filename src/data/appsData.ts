import { AppData } from '@/types';

export const appsData: AppData[] = [
  {
    title: 'My Notes',
    description: 'Just a regular notes app.',
    techs: ['react', 'firebase', 'tailwindcss', 'typescript'],
    iconUrl:
      'https://raw.githubusercontent.com/roymandev/my-notes/main/public/My%20Notes.svg',
    imageUrl:
      'https://ik.imagekit.io/roymandev/Firefox_Screenshot_2022-08-29T20-00-35.385Z_astnavNLA.png?ik-sdk-version=javascript-1.4.3&updatedAt=1661808297336',
    liveUrl: 'https://my-notes.royman.dev/',
    repoUrl: 'https://github.com/roymandev/my-notes',
  },
  {
    title: 'Worship App',
    description: '(WIP) Lyrics presentation web based app for Church',
    techs: ['react', 'typescript', 'firebase', 'tailwindcss'],
    iconUrl:
      'https://raw.githubusercontent.com/roymandev/worship-app/main/public/Worship%20App.svg',
    imageUrl:
      'https://ik.imagekit.io/roymandev/Worship_App_Screenshot_sEYm5226yg.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668975794020',
    liveUrl: 'https://worship-app.royman.dev/',
    repoUrl: 'https://github.com/roymandev/worship-app',
  },
];