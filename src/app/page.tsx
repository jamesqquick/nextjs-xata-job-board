import { Job, getXataClient } from '@/xata';
import Image from 'next/image';

export default async function Home() {
  const xata = getXataClient();
  const jobs: Job[] = await xata.db.job.getMany();

  return (
    <main className="flex min-h-screen flex-col items-stretch max-w-4xl mx-auto justify-between p-10 md:p-24">
      <div>
        <h1 className="text-6xl font-bold mb-2 text-center">Dev Jobs Board</h1>
        <p className="text-xl mb-20 text-center">
          Powered by Next.js, Xata, and Vercel!
        </p>
        {jobs.map((job) => (
          <div
            key={job.id}
            className="flex flex-col items-start border-2 border-gray-200 rounded-lg p-8 my-8"
          >
            <h2 className="text-2xl font-bold">
              {job.title} -{' '}
              <span className=" text-gray-200 font-normal">{job.company}</span>
            </h2>

            <p className="text-xl text-center">{job.location}</p>
            <a
              href={job.link}
              className="text-lg border-2 rounded-md p-2 border-white hover:bg-white hover:text-black transition-colors"
            >
              Apply Now!!
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}
