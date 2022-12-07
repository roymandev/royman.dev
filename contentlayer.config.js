import { defineDocumentType, makeSource } from 'contentlayer/source-files';

export const Project = defineDocumentType(() => ({
  name: 'Project',
  contentType: 'mdx',
  filePathPattern: 'project/*.mdx',
  fields: {},
}));

export default makeSource({
  contentDirPath: 'src/posts',
  documentTypes: [Project],
});
