import Footer from "../../components/view/Footer";
import Header from "../../components/view/Header";
import { useEffect, useState } from "../../lib";

const SkillPage = () => {
  const [skills, setSkill] = useState([]);
  console.log(skills);
  useEffect(() => {
    fetch("http://localhost:3000/skills")
      .then((response) => response.json())
      .then((data) => setSkill(data));
  }, []);
  return `
    ${Header()}
    <!----------------------------------------------------------------- content -->
    <div class="bg-slate-50 ">
        <!-- Title -->
        <section class=" text-center bg-[#e6dace]">
            <h1 class=" font-black text-[32px] pt-20 pb-8">Skills</h1>
            <p class="pb-8">My technical level</p>
        </section>
        <!-- project name 1 -->
        <section class="w-[850px] mx-auto pb-[80px] mt-20">
            <div class="rows grid grid-cols-2 gap-20">
                ${skills
                  .map((skill) => {
                    return `
                        <div class="col bg-white px-6 py-8 hover:shadow-xl border rounded-xl text-center transition-all">
                            <div class="font-bold text-[25px]"><i class="${skill.icon}"></i> <br> <h1>${skill.title}</h1>
                            </div> <p>More than 4 years</p>
                        </div>
                        
                    `;
                  })
                  .join("")}
                
            </div>
        </section>
        <section class="w-[850px] mx-auto pb-[80px] ">
            <h1 class="font-bold text-[24px] mb-5">GENERAL SKILLS</h1>
            <div class="grid grid-cols-2 gap-8">
            <div>
                <div class="rows">
                    <div class="flex justify-between"><p>HTML5</p> <p>90%</p></div>
                    <div class="box-skill">
                    <div class="skills html5 mb-2"></div>
                    </div>
                    
                    <div class="flex justify-between"><p>CSS3</p> <p>90%</p></div>
                    <div class="box-skill">
                    <div class="skills css3 mb-2"></div>
                    </div>
                    
                    <div class="flex justify-between"><p>JAVA SCRIPT</p> <p>80%</p></div>
                    <div class="box-skill">
                    <div class="skills js mb-2"></div>
                    </div>
                    
                    <div class="flex justify-between"><p>JQUERY</p> <p>80%</p></div>
                    <div class="box-skill">
                    <div class="skills jquery mb-2"></div>
                    </div>
                </div>
            </div>
            <div>
                <div class="rows">
                <div class="flex justify-between"><p>BOOTSTRAP 3</p> <p>70%</p></div>
                <div class="box-skill">
                <div class="skills bootstrap3 mb-2"></div>
                </div>
                
                <div class="flex justify-between"><p>GRUNT</p> <p>60%</p></div>
                <div class="box-skill">
                <div class="skills grunt mb-2"></div>
                </div>
                
                <div class="flex justify-between"><p>GIT</p> <p>70%</p></div>
                <div class="box-skill">
                <div class="skills git mb-2"></div>
                </div>
                
                <div class="flex justify-between"><p>ADOBE PHOTOSHOP</p> <p>60%</p></div>
                <div class="box-skill">
                <div class="skills adobe-photoshop"></div>
                </div>
                </div>
            </div>
        </section>

    </div>
    ${Footer()}
  `;
};

export default SkillPage;
