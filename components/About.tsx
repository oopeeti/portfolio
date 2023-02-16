"use client"

import { motion } from "framer-motion"

type Props = {}

function About({}: Props) {
  return (
    <div className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">About</h3>

        <motion.img 
        initial={{ x:-200, opacity: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
        src="profile-2.jpg"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover xl:w-[400px] xl:h-[400px]"
        />

        <div className="space-y-10 px-0 md:px-10">
            <h4 className="text-4xl font-semibold">
                Here is a <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}background
            </h4>
            <p className="text-base">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, minus! Repudiandae minus corrupti consequatur quasi quidem rem facilis, libero, natus ratione voluptate eaque maxime, voluptatum cumque atque illo dolorum blanditiis alias ex deleniti magni nobis! Odio ducimus quisquam qui rerum consequatur aut culpa saepe unde modi. Magnam doloremque at pariatur magni quod dolore eum ullam, dolorem odit rem, maxime mollitia vitae recusandae nihil explicabo excepturi similique reprehenderit quisquam esse voluptatibus minus delectus placeat sapiente? Alias, totam omnis? Blanditiis, sapiente asperiores. Facere doloremque quod, ab possimus magnam dolorem reiciendis porro maxime? Eaque quis et vel incidunt quidem commodi voluptas id totam!
            </p>
        </div>
    </div>
  )
}

export default About