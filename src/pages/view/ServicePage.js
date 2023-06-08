import Footer from "../../components/view/Footer";
import Header from "../../components/view/Header";

const ServicePage = () => {
  return /*html*/ `
    ${Header()}
    <!----------------------------------------------------------------- content -->
    <div class="  bg-slate-50">
        <!-- Title -->
        <section class=" text-center bg-[#e6dace]">
            <h1 class=" font-black text-[32px] pt-20 pb-8">Services</h1>
            <p class="pb-8">What i offer</p>
        </section>
        <!-- project name 1 -->
        <section class="w-[1200px] mx-auto pb-[80px] mt-20">
            <div class="rows grid grid-cols-3 gap-6">
                <div class="col  shadow  bg-white border p-14  hover:shadow-xl">
                    <h1 class=" mb-10"><i class="fa-solid fa-box text-[60px]"></i> <br> <h1 class="text-[35px] font-bold">Ui/Ux Design</h1> <br>
                    </h1>
                    <ul>
                        <li class="mb-3">
                            <div class="flex items-center">
                                <i class="fa-solid fa-angles-right"></i> 
                                <p class="ml-4">Landing Pages</p>
                            </div>
                        </li>
                        <li class="mb-3">
                            <div class="flex items-center">
                                <i class="fa-solid fa-angles-right"></i>
                                <p class="ml-4">User Flow</p>
                            </div>
                        </li>
                        <li class="mb-3">
                            <div class="flex items-center">
                                <i class="fa-solid fa-angles-right"></i> 
                                <p class="ml-4">Wireframing</p>
                            </div>
                        </li>
                        <li class="mb-3">
                            <div class="flex items-center">
                                <i class="fa-solid fa-angles-right"></i> 
                                <p class="ml-4">Prototyping</p>
                            </div>
                        </li class="mb-3">
                        <li class="">
                            <div class="flex items-center">
                                <i class="fa-solid fa-angles-right"></i> 
                                <p class="ml-4">Mobile App Design</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <!--2  -->
                <div class="col  shadow  bg-white border p-14  hover:shadow-xl">
                    <h1 class=" mb-10"><i class="fa-solid fa-code text-[60px]"></i> <br> <h1 class="text-[35px] font-bold">Development</h1> <br>
                    </h1>
                    <ul>
                        <li class="mb-3">
                            <div class="flex items-center">
                                <i class="fa-solid fa-angles-right"></i> 
                                <p class="ml-4">HTML/CSS</p>
                            </div>
                        </li>
                        <li class="mb-3">
                            <div class="flex items-center">
                                <i class="fa-solid fa-angles-right"></i>
                                <p class="ml-4">JavaScript</p>
                            </div>
                        </li>
                        <li class="mb-3">
                            <div class="flex items-center">
                                <i class="fa-solid fa-angles-right"></i> 
                                <p class="ml-4">Animation</p>
                            </div>
                        </li>
                        <li class="mb-3">
                            <div class="flex items-center">
                                <i class="fa-solid fa-angles-right"></i> 
                                <p class="ml-4">WordPress</p>
                            </div>
                        </li class="mb-3">
                        <li class="mb-3">
                            <div class="flex items-center">
                                <i class="fa-solid fa-angles-right"></i> 
                                <p class="ml-4">React</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <!-- 3 -->
                <div class="col  shadow  bg-white border p-14  hover:shadow-xl">
                    <h1 class=" mb-10"><i class="fa-solid fa-bezier-curve text-[60px]"></i> <br> <h1 class="text-[35px] font-bold">Illustration</h1> <br>
                    </h1>
                    <ul>
                        <li class="mb-3">
                            <div class="flex items-center">
                                <i class="fa-solid fa-angles-right"></i> 
                                <p class="ml-4">Character Design</p>
                            </div>
                        </li>
                        <li class="mb-3">
                            <div class="flex items-center">
                                <i class="fa-solid fa-angles-right"></i>
                                <p class="ml-4">Icon Set</p>
                            </div>
                        </li>
                        <li class="mb-3">
                            <div class="flex items-center">
                                <i class="fa-solid fa-angles-right"></i> 
                                <p class="ml-4">Illustration Guide</p>
                            </div>
                        </li>
                        <li class="mb-3">
                            <div class="flex items-center">
                                <i class="fa-solid fa-angles-right"></i> 
                                <p class="ml-4">Illustration Set</p>
                            </div>
                        </li class="mb-3">
                        <li class="">
                            <div class="flex items-center">
                                <i class="fa-solid fa-angles-right"></i> 
                                <p class="ml-4">Motion Graphic</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <!-- 4 -->
                <div class="col  shadow  bg-white border p-14  hover:shadow-xl">
                    <h1 class=" mb-10"><i class="fa-solid fa-magnifying-glass text-[60px]"></i> <br> <h1 class="text-[35px] font-bold">SEO Marketing</h1> <br>
                    </h1>
                    <ul>
                        <li class="mb-3">
                            <div class="flex items-center">
                                <i class="fa-solid fa-angles-right"></i> 
                                <p class="ml-4">White Hat SEO</p>
                            </div>
                        </li>
                        <li class="mb-3">
                            <div class="flex items-center">
                                <i class="fa-solid fa-angles-right"></i>
                                <p class="ml-4">Black Hat SEO</p>
                            </div>
                        </li>
                        <li class="mb-3">
                            <div class="flex items-center">
                                <i class="fa-solid fa-angles-right"></i> 
                                <p class="ml-4">Grey Hat SEO</p>
                            </div>
                        </li>
                        <li class="mb-3">
                            <div class="flex items-center">
                                <i class="fa-solid fa-angles-right"></i> 
                                <p class="ml-4">Negative SEO</p>
                            </div>
                        </li class="mb-3">
                        <li class="">
                            <div class="flex items-center">
                                <i class="fa-solid fa-angles-right"></i> 
                                <p class="ml-4">On-Page SEO</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <!-- 5 -->
                <div class="col  shadow  bg-white border p-14  hover:shadow-xl">
                    <h1 class=" mb-10"><i class="fa-solid fa-magnifying-glass-chart text-[60px]"></i><br> <h1 class="text-[35px] font-bold">Data Analysis</h1> <br>
                    </h1>
                    <ul>
                        <li class="mb-3">
                            <div class="flex items-center">
                                <i class="fa-solid fa-angles-right"></i> 
                                <p class="ml-4">Diagnostic Analysis</p>
                            </div>
                        </li>
                        <li class="mb-3">
                            <div class="flex items-center">
                                <i class="fa-solid fa-angles-right"></i>
                                <p class="ml-4">Predictive Analysis</p>
                            </div>
                        </li>
                        <li class="mb-3">
                            <div class="flex items-center">
                                <i class="fa-solid fa-angles-right"></i> 
                                <p class="ml-4">Prescriptive Analysis</p>
                            </div>
                        </li>
                        <li class="mb-3">
                            <div class="flex items-center">
                                <i class="fa-solid fa-angles-right"></i> 
                                <p class="ml-4">Risk Assessment</p>
                            </div>
                        </li class="mb-3">
                        <li class="">
                            <div class="flex items-center">
                                <i class="fa-solid fa-angles-right"></i> 
                                <p class="ml-4">Sales Forecasting</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="col  shadow  bg-white border p-14  hover:shadow-xl">
                    <h1 class=" mb-10"><i class="fa-solid fa-bandage text-[60px]"></i> <br> <h1 class="text-[35px] font-bold">Brand Identity</h1> <br>
                    </h1>
                    <ul>
                        <li class="mb-3">
                            <div class="flex items-center">
                                <i class="fa-solid fa-angles-right"></i> 
                                <p class="ml-4">Brand Architecture</p>
                            </div>
                        </li>
                        <li class="mb-3">
                            <div class="flex items-center">
                                <i class="fa-solid fa-angles-right"></i>
                                <p class="ml-4">Brand Authenticity</p>
                            </div>
                        </li>
                        <li class="mb-3">
                            <div class="flex items-center">
                                <i class="fa-solid fa-angles-right"></i> 
                                <p class="ml-4">Brand Awareness</p>
                            </div>
                        </li>
                        <li class="mb-3">
                            <div class="flex items-center">
                                <i class="fa-solid fa-angles-right"></i> 
                                <p class="ml-4">Brand Management</p>
                            </div>
                        </li class="mb-3">
                        <li class="">
                            <div class="flex items-center">
                                <i class="fa-solid fa-angles-right"></i> 
                                <p class="ml-4">Brand Metrics</p>
                            </div>
                        </li>
                    </ul>
                </div>

            </div>
        </section>

    </div>

    ${Footer()}
  `;
};

export default ServicePage;
