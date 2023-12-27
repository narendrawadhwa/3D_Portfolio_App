import { arrow } from "../assets/icons";
import { projects } from "../constants";
import { Link } from "react-router-dom";
import CTA from "../components/CTA";

const Projects = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        My        <span className='blue-gradient_text font-semibold drop-shadow'>
          Projects
        </span>
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
          In my journey, I've engineered five distinctive projects, a trio born during the immersive Full Stack Development program, showcasing my mastery in various technologies. Elevating the experience, my internship yielded two impactful creations. These endeavors encapsulate my commitment to delivering excellence in every venture.
        </p>
      </div>

      <div className="flex flex-wrap my-20 gap-16 ">
        {projects.map((project) => (
          <div className="lg:w-[400px] w-full" key={project.name}>
            <div className="block-container w-12 h-12">
              <div className={`btn-back rounded-xl  ${project.theme}`} />
              <div className="btn-front rounded-xl cursor-pointer flex justify-center items-center">
                <img
                  src={project.iconUrl}
                  alt="Project Icon"
                  className="w-1/2 h-1/2 object-contain" />
              </div>
            </div>
            <div className="mt-5 flex flex-col">
              <h4 className="text-2xl font-poppins font-semibold">
                {project.name}
              </h4>
              <p className="mt-2 text-slate-500">
                {project.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
          {project.skills.map((skill, index) => (
            <div
            key={index}
            className={`text-white sm:text-[16px] text-[13px] rounded-full py-[0.5rem] px-3 ${project.theme}`}
            >
            {skill}
            </div>
          ))}
        </div>
              <div className="mt-5 flex items-center gap-2 font-poppins link">
                <Link
                  to={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-600">
                  Live link
                </Link>
                <img
                  src={arrow}
                  alt="arrow"
                  className="w-4 h-4 object-contain link-img" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <hr className="border-slate-200" />
      <CTA />
    </section>
  )
}

export default Projects