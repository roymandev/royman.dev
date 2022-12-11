import { defineDocumentType } from 'contentlayer/source-files';

export const Project = defineDocumentType(() => ({
  name: 'Project',
  contentType: 'mdx',
  filePathPattern: 'project/*.mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the project',
      required: true,
    },
    description: {
      type: 'string',
      description: 'The description of the project',
      required: true,
    },
    projectType: {
      type: 'enum',
      options: ['application', 'submission'],
      description: 'The type of the project',
      required: true,
    },
    techs: {
      type: 'list',
      of: {
        type: 'enum',
        options: [
          'react',
          'typescript',
          'firebase',
          'tailwindcss',
          'vite',
          'jotai',
          'nextjs',
        ],
        description: 'The tech used in the project',
      },
      required: true,
    },
    liveUrl: {
      type: 'string',
      description: 'Live demo of the project',
    },
    repoUrl: {
      type: 'string',
      description: 'Repository url of the project',
    },
    iconUrl: {
      type: 'string',
      description: 'Icon url of the project',
    },
    imageUrl: {
      type: 'string',
      description: 'Image url of the project',
    },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (post) =>
        post._raw.sourceFileName
          // hello-world.mdx => hello-world
          .replace(/\.mdx$/, ''),
    },
  },
}));
