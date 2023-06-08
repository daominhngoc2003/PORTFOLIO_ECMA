import Footer from "../../components/view/Footer";
import Header from "../../components/view/Header";

const AboutPage = () => {
  return `
    ${Header()}
    <!----------------------------------------------------------------- content -->
    <div class=" bg-slate-50">
        <!-- Title -->
        <section class=" text-center bg-[#e6dace]">
            <h1 class=" font-black text-[32px] pt-20 pb-8">About Me</h1>
            <p class="pb-8">My introduction</p>
        </section>
        <!-- project name 1 -->
        <section class="w-[950px] mx-auto pb-[80px] mt-20">
            <div class="rows grid grid-cols-[400px,auto] gap-20">
                <div class="col image overflow-hidden rounded-xl transition-all">
                    <img class="rounded-xl hover:scale-110 transition-all" src="https://res.cloudinary.com/fashsion-brand/image/upload/v1676753106/portfolio/hlo77lqxgbkxofktnoof.jpg" alt="">
                </div>
                <div class="col bg-white p-8">

                    <p class="text-[18px]">Web developer, with extensive knowledge and years of experience, working
                        in web technologies
                        and UI / UX design, delivering quality work</p>
                    <div class="grid grid-cols-3 gap-7 text-center mt-10">
                        <div class="col"><span class=" text-[20px]  font-black ">08+</span> <br>
                            <p>Years experience</p>
                        </div>
                        <div class="col"><span class=" text-[20px]  font-black ">20+</span> <br>
                            <p>Complete projects</p>
                        </div>
                        <div class="col"><span class=" text-[20px]  font-black ">05+ </span><br>
                            <p>Companies worked</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>

    </div>

    ${Footer()}
  `;
};

export default AboutPage;
