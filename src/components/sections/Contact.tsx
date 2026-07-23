"use client";

import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { useState } from "react";

export default function Contact() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");


  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);
    setStatus("");


    try {

      const res = await fetch("/api/contact", {
        method: "POST",

        headers:{
          "Content-Type":"application/json",
        },

        body: JSON.stringify(form),
      });


      const data = await res.json();


      if(data.success){

        setStatus("Message sent successfully 🚀");

        setForm({
          name:"",
          email:"",
          message:"",
        });

      } else {

        setStatus("Something went wrong.");

      }


    } catch{

      setStatus("Failed to send message.");

    }


    setLoading(false);
  }



  return (

<section
id="contact"
className="mx-auto max-w-7xl px-6 py-24"
>


<motion.div

initial={{
opacity:0,
y:40
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
duration:0.6
}}

viewport={{
once:true
}}

className="
rounded-3xl
border
border-white/10

bg-white/5

p-8
md:p-10

backdrop-blur-xl
"

>


<p className="
text-blue-500
font-semibold
uppercase
">
Contact
</p>


<h2 className="
mt-4
text-3xl
md:text-4xl
font-bold
">

Let&apos;s build something amazing

</h2>



<p className="
mx-auto
mt-5
max-w-xl
text-gray-400
">

I&apos;m open to internships, freelance projects,
collaborations, and opportunities where I can
build impactful software.

</p>



<form
onSubmit={handleSubmit}

className="
mx-auto
mt-10
max-w-xl
space-y-5
"

>


<input

required

type="text"

placeholder="Your name"

value={form.name}

onChange={(e)=>
setForm({
...form,
name:e.target.value
})
}

className="
w-full
rounded-xl
border
border-white/10
bg-black/20
px-5
py-3
outline-none
focus:border-blue-500
"

/>



<input

required

type="email"

placeholder="Your email"

value={form.email}

onChange={(e)=>
setForm({
...form,
email:e.target.value
})
}

className="
w-full
rounded-xl
border
border-white/10
bg-black/20
px-5
py-3
outline-none
focus:border-blue-500
"

/>



<textarea

required

rows={5}

placeholder="Your message"

value={form.message}

onChange={(e)=>
setForm({
...form,
message:e.target.value
})
}

className="
w-full
rounded-xl
border
border-white/10
bg-black/20
px-5
py-3
outline-none
focus:border-blue-500
"

/>



<button

disabled={loading}

className="
flex
w-full
items-center
justify-center
gap-2

rounded-xl

bg-blue-600

px-6
py-3

font-semibold

transition

hover:bg-blue-500

disabled:opacity-50

"

>


{loading ? (
"Sending..."
)
:
(
<>
<Send size={18}/>
Send Message
</>
)}


</button>



</form>



{
status && (

<p
className="
mt-5
text-center
text-sm
text-blue-400
"
>

{status}

</p>

)
}




<div
className="
mt-8
flex
flex-wrap
justify-center
gap-4
"
>


<a

href="mailto:utech0201@gmail.com"

className="
flex
items-center
gap-2
rounded-xl
border
border-white/20
px-5
py-3
hover:bg-white/10
"

>

<Mail size={18}/>
Email

</a>



<a

href="https://github.com/utech0201-debug"

target="_blank"

className="
flex
items-center
gap-2
rounded-xl
border
border-white/20
px-5
py-3
hover:bg-white/10
"

>

<SiGithub size={18}/>
GitHub

</a>




<a

href="https://linkedin.com"

target="_blank"

className="
flex
items-center
gap-2
rounded-xl
border
border-white/20
px-5
py-3
hover:bg-white/10
"

>

<FaLinkedin size={18}/>
LinkedIn

</a>


</div>



</motion.div>


</section>

  );
}