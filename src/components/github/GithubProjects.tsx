import { getGithubProjects } from "@/lib/github";
import GithubCard from "@/components/projects/GithubCard";


export default async function GithubProjects() {


  const projects = await getGithubProjects();



  return (

    <section
      id="github"
      className="
      mx-auto
      max-w-7xl
      px-6
      py-24
      "
    >


      <div
        className="
        text-center
        "
      >

        <p
          className="
          font-semibold
          uppercase
          text-blue-500
          "
        >
          GitHub
        </p>


        <h2
          className="
          mt-3
          text-4xl
          font-black
          "
        >
          Latest Open Source Work
        </h2>


        <p
          className="
          mx-auto
          mt-4
          max-w-xl
          text-gray-400
          "
        >
          Live repositories fetched directly from my GitHub profile.
        </p>


      </div>




      <div
        className="
        mt-12

        grid

        gap-8

        md:grid-cols-2

        lg:grid-cols-3
        "
      >


        {
          projects.length > 0 ? (

            projects.map((project)=>(

              <GithubCard

                key={project.id}

                project={project}

              />

            ))

          ) : (

            <div
              className="
              col-span-full

              rounded-3xl

              border

              border-white/10

              bg-white/5

              p-10

              text-center

              "
            >

              <h3
                className="
                text-xl
                font-bold
                "
              >
                No repositories found
              </h3>


              <p
                className="
                mt-2
                text-gray-400
                "
              >
                GitHub repositories will appear here.
              </p>


            </div>

          )
        }


      </div>


    </section>

  );

}