import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import {FiDownload} from 'react-icons/fi'

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full ">
        <div className="flex flex-col md:flex-row items-center justify-between md:pt-8 md:p-2 md:pb-24">
          <div className="text-center md:text-left order-2 md:order-none ">
            <span>MERN Stack Developer</span>
            <h1 className="h1 mb-6">Hello I'm <br/> <span className="text-accent">Gaurav Singh</span></h1>
            <p className="max-w-[500px] mb-9 text-white/80">Knowledgeable in building full-stack web applications using modern frameworks and libraries. Gained experience in creating dynamic and responsive user interfaces with React.js and Next.js, and developing backend services with Node.js and Express.js through various projects.
            </p>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <Button variant="outline" size="lg" className="uppercase flex items-center gap-2 ">
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 lg:mb-0 "> 
                  <Social containerStyles='flex flex-row gap-5' iconStyles='w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover-text-primary hover:transition-all duration-500' />
              </div>
            </div>
          </div>
          <div className="order-1 lg:order:none mb-8 lg:mb-0">
            <Photo/>
          </div>
        </div>
      </div>
      <Stats/>
    </section>
  ); 
}
