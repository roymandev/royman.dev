import CustomButton from '@/components/CustomButton';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import TechIcon from '@/components/TechIcon';
import CustomSeo from '@/components/utils/CustomSeo';
import { getPostBySlug, getPosts } from '@/lib/mdx';
import { BasePostHeader, ProjectPostHeader } from '@/types';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import Image from 'next/image';
import { ParsedUrlQuery } from 'querystring';
import { HiArrowTopRightOnSquare } from 'react-icons/hi2';
import { RiGithubFill } from 'react-icons/ri';

export interface ProjectDetailPageProps {
  header: ProjectPostHeader;
  mdxSource: MDXRemoteSerializeResult;
}

const ProjectDetailPage: NextPage<ProjectDetailPageProps> = ({
  header,
  mdxSource,
}) => (
  <>
    <CustomSeo
      title={header.title}
      description={header.description}
      slug={header.slug}
    />

    <Header />

    <main className="container mx-auto max-w-4xl">
      <section className="px-6 pt-6 sm:pt-16">
        <div className="flex flex-col-reverse gap-4 sm:flex-row sm:gap-6 sm:px-0">
          <div className="flex flex-1 flex-col items-start">
            <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">
              {header.title}
            </h1>
            <p className="mt-4 sm:text-lg">{header.description}</p>

            <div className="mt-6 flex flex-wrap items-center gap-2">
              {header.techs.map((tech) => (
                <TechIcon key={tech} tech={tech} />
              ))}
            </div>

            <div className="mt-6 flex items-center gap-2">
              {header.liveUrl && (
                <CustomButton href={header.liveUrl}>
                  Open App
                  <HiArrowTopRightOnSquare className="ml-3 h-5 w-5" />
                </CustomButton>
              )}

              {header.repoUrl && (
                <CustomButton href={header.repoUrl} type="secondary" icon>
                  <RiGithubFill className="h-6 w-6" />
                </CustomButton>
              )}
            </div>
          </div>

          {header.iconUrl && (
            <div className="w-20 shrink-0 sm:ml-auto sm:w-40">
              <Image
                src={header.iconUrl}
                alt={header.title}
                width="160"
                height="160"
              />
            </div>
          )}
        </div>
      </section>

      <article className="mx-auto mt-10 max-w-4xl sm:px-6">
        {header.imageUrl && (
          <Image
            src={header.imageUrl}
            width="1280"
            height="720"
            alt={header.title}
          />
        )}

        <section className="px-6 sm:px-0">
          <MDXRemote {...mdxSource} />
        </section>
      </article>
    </main>

    <Footer />
  </>
);

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  const projects = await getPosts<BasePostHeader>('/project');

  const paths = projects.map((project) => ({
    params: { slug: project.header.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

interface Params extends ParsedUrlQuery {
  slug: string;
}

export const getStaticProps: GetStaticProps<
  ProjectDetailPageProps,
  Params
> = async (context) => {
  const { slug } = context.params as Params;

  const project = await getPostBySlug<ProjectPostHeader>('/project', slug);

  const mdxSource = await serialize(project.content);

  return { props: { header: project.header, mdxSource } };
};

export default ProjectDetailPage;
