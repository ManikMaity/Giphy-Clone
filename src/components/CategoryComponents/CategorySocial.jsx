import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa"

function CategorySocial() {
  return (
    <div className="w-full flex flex-col gap-4">
        <p className="font-bold">Follow on:</p>
        <div className="flex gap-3 items-center justify-start w-full">
          <a target="_blank" href="https://www.linkedin.com/in/manikmaity/"><FaLinkedin /></a>
          <a href="_blank" target="https://github.com/ManikMaity"><FaGithub /></a>
          <a href=""><FaFacebook  /></a>
        </div>
      
    </div>
  )
}

export default CategorySocial
