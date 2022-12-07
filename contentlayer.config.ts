import { Project } from './src/lib/contentlayer/Project';
import { makeSource } from 'contentlayer/source-files';

export default makeSource({
  contentDirPath: 'src/posts',
  documentTypes: [Project],
});
