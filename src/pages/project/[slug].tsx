import { allProjects, type Project } from 'contentlayer/generated';
import CustomButton from '@/components/CustomButton';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import TechIcon from '@/components/TechIcon';
import CustomSeo from '@/components/utils/CustomSeo';
import {
  GetStaticPaths,
  type GetStaticProps,
  type InferGetStaticPropsType,
  NextPage,
} from 'next';
import { useMDXComponent } from 'next-contentlayer/hooks';
import Image from 'next/image';
import { HiArrowTopRightOnSquare } from 'react-icons/hi2';
import { RiGithubFill } from 'react-icons/ri';
import twclsx from '@/lib/twclsx';

export interface ProjectDetailPageProps {
  project: Project;
}

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  return {
    paths: allProjects.map((project) => ({
      params: { slug: project.slug },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<ProjectDetailPageProps> = async ({
  params,
}) => {
  const project = allProjects.find((project) => project.slug === params?.slug);

  if (!project)
    return {
      notFound: true,
    };

  return {
    props: {
      project,
    },
  };
};

const ProjectDetailPage: NextPage<
  InferGetStaticPropsType<typeof getStaticProps>
> = ({ project }) => {
  const MDXContent = useMDXComponent(project.body.code);

  return (
    <>
      <CustomSeo
        title={project.title}
        description={project.description}
        slug={project.slug}
      />

      <Header />

      <main className="container mx-auto max-w-4xl">
        <section className="px-6 pt-6 sm:pt-16">
          <div className="flex flex-col-reverse gap-4 sm:flex-row sm:gap-6 sm:px-0">
            <div className="flex flex-1 flex-col items-start">
              <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">
                {project.title}
              </h1>
              <p className="mt-4 sm:text-lg">{project.description}</p>

              <div className="mt-6 flex flex-wrap items-center gap-2">
                {project.techs.map((tech) => (
                  <TechIcon key={tech} tech={tech} />
                ))}
              </div>

              <div className="mt-6 flex items-center gap-2">
                {project.liveUrl && (
                  <CustomButton href={project.liveUrl}>
                    Open App
                    <HiArrowTopRightOnSquare className="ml-3 h-5 w-5" />
                  </CustomButton>
                )}

                {project.repoUrl && (
                  <CustomButton href={project.repoUrl} type="secondary" icon>
                    <RiGithubFill className="h-6 w-6" />
                  </CustomButton>
                )}
              </div>
            </div>

            {project.iconUrl && (
              <div className="w-20 shrink-0 sm:ml-auto sm:w-40">
                <Image
                  src={project.iconUrl}
                  alt={project.title}
                  width="160"
                  height="160"
                />
              </div>
            )}
          </div>
        </section>

        <article className="mx-auto mt-10 max-w-4xl sm:px-6">
          {project.imageUrl && (
            <Image
              src={project.imageUrl}
              width="1280"
              height="720"
              alt={project.title}
            />
          )}

          <section
            className={twclsx(
              'prose prose-theme mt-10 px-6 dark:prose-invert sm:px-0 md:prose-lg',
            )}
          >
            <MDXContent />
          </section>
        </article>
      </main>

      <Footer />
    </>
  );
};

export default ProjectDetailPage;
