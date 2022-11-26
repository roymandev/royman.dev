import { readdir, readFile } from 'fs/promises';
import path, { join } from 'path';
import matter from 'gray-matter';
import { BasePost, PostType } from '@/types';

export const POSTS_PATH = path.join(process.cwd(), 'src/posts');

export type Path = `/${PostType}`;

export const getPostBySlug = async <T>(
  path: Path,
  slug: string,
): Promise<BasePost<T>> => {
  const filepath = join(POSTS_PATH, path, slug + '.mdx');

  const file = await readFile(filepath, 'utf-8');

  const { content, data } = matter(file);

  return {
    header: { ...(data as T), slug },
    content,
  };
};

export const getPosts = async <T>(path: Path): Promise<BasePost<T>[]> => {
  const files = (await readdir(join(POSTS_PATH, path))).filter((p) =>
    /\.mdx?$/.test(p),
  );

  const posts = files.map(async (filename) => {
    const slug = filename.replace(/\.mdx?$/, '');

    return await getPostBySlug<T>(path, slug);
  });

  return await Promise.all(posts);
};
