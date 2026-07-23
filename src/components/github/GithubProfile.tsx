import Image from "next/image";
import { SiGithub } from "react-icons/si";
import { getGithubProfile } from "@/lib/github-profile";


export default async function GithubProfile() {

  const profile = await getGithubProfile();


  return (

    <section
      className="
      mx-auto
      max-w-7xl
      px-6
      py-24
      "
    >


      <div
        className="
        rounded-3xl
        border
        border-white/10

        bg-white/5

        p-6
        md:p-10

        backdrop-blur-xl
        "
      >


        {/* Profile Header */}

        <div
          className="
          flex
          flex-col
          items-center
          gap-6

          md:flex-row
          md:items-start
          "
        >


          <Image

            src={profile.avatar}

            alt={
              profile.name ??
              "GitHub Profile"
            }

            width={120}

            height={120}

            className="
            rounded-full

            border
            border-white/20

            shadow-xl
            "

          />



          <div
            className="
            text-center
            md:text-left
            "
          >


            <h2
              className="
              text-3xl
              font-black
              "
            >

              {profile.name}

            </h2>



            <p
              className="
              mt-1
              text-blue-500
              "
            >

              @{profile.username}

            </p>



            <p
              className="
              mt-3

              max-w-xl

              text-gray-400
              "
            >

              {profile.bio}

            </p>


          </div>


        </div>





        {/* Stats */}

        <div
          className="
          mt-10

          grid

          gap-5

          sm:grid-cols-3
          "
        >


          <StatCard
            value={profile.repositories}
            label="Repositories"
          />


          <StatCard
            value={profile.followers}
            label="Followers"
          />


          <StatCard
            value={profile.following}
            label="Following"
          />


        </div>





        {/* GitHub Button */}

        <a

          href={profile.profileUrl}

          target="_blank"

          rel="noopener noreferrer"

          className="
          mt-8

          inline-flex

          items-center

          gap-2

          rounded-xl

          bg-blue-600

          px-6

          py-3

          font-semibold

          transition

          hover:bg-blue-500
          "

        >

          <SiGithub size={18}/>

          View GitHub Profile


        </a>



      </div>


    </section>

  );

}





function StatCard({
  value,
  label,
}:{
  value:number;
  label:string;
}){


return (

<div

className="
rounded-2xl

bg-white/5

p-5

text-center

"

>


<h3

className="
text-3xl

font-black
"

>

{value}

</h3>



<p

className="
mt-1

text-gray-400
"

>

{label}

</p>


</div>

);


}