import Footer from "../../components/view/Footer";
import Header from "../../components/view/Header";

const ContactPage = () => {
  window.onload = function () {
    document
      .getElementById("contact-form")
      .addEventListener("submit", function (event) {
        event.preventDefault();

        // generate a five digit number for the contact_number variable
        this.contact_number.value = (Math.random() * 100000) | 0;
        // these IDs from the previous steps
        emailjs.sendForm("contact_service", "contact_form", this).then(
          function () {
            console.log("SUCCESS!");
          },
          function (error) {
            console.log("FAILED...", error);
          }
        );
      });
  };
  //       function sendMail() {
  //     var params = {
  //       name: document.getElementById("name").value,
  //       email: document.getElementById("email").value,
  //       message: document.getElementById("message").value,
  //     };
  //     const serviceId = "service_7cs10wp";
  //     const templateId = "template_xcpes5y";
  //     emailjs
  //       .send(serviceId, templateId, params)
  //       .then((res) => {
  //         document.getElementById("name").value = "";
  //         document.getElementById("email").value = "";
  //         document.getElementById("message").value = "";
  //         console.log(res);
  //         alert("Your message sent successfully");
  //       })
  //       .catch((err) => console.log(err));
  //   }
  return `
    ${Header()}
    <!----------------------------------------------------------------- content -->
    <div class="bg-slate-50">
        <!-- Title -->
        <section class="bg-[#e6dace] text-center">
            <h1 class=" font-black text-[32px] pt-20 pb-8">Contact Me</h1>
            <p class="pb-8">Get in touch</p>

        </section>
        <!-- project name 1 -->
        <section class="w-[900px] mx-auto pb-5 mt-10">
            <div class="rows grid grid-cols-[300px,auto] ">
                <div class="col">
                    <div>
                        <h1 class="font-bold text-[22px]"><i class="fa-solid fa-phone mr-2"></i>Call Me</h1>
                        <p class=" mb-7">0869827432</p>
                    </div>
                    <div>
                        <h1 class="font-bold text-[22px] "><i class="fa-solid fa-envelope mr-2"></i>Email</h1>
                        <p class=" mb-7"> ngocdmph20534@fpt.edu.vn</p>
                    </div>
                    <div>
                        <h1 class="font-bold text-[22px] "><i class="fa-solid fa-location-dot mr-2"></i>Location
                        </h1>
                        <p class=" mb-7">Trường Cao Đẳng FPT</p>
                    </div>
                </div>
                <div class="col">
                    <form  id="contact-form">
                        <div class="grid grid-cols-2 gap-6">
                            <input type="hidden" name="contact_number">
                            <div class="block mb-6">
                                <input type="text" id="name" class="rounded-md outline-none w-full px-4 pb-7 h-[90px] bg-indigo-100"
                                    placeholder="Name">
                            </div>
                            <input type="text" id="email" class="rounded-md w-full outline-none  px-4 pb-7 h-[90px] bg-indigo-100 "
                                placeholder="Email">
                        </div>
                        <div>
                            <input type="text" id="project" class="w-full px-4 pb-7 outline-none  mb-6 rounded-md h-[90px] bg-indigo-100"
                                placeholder="Project">
                        </div>
                        <textarea class="bg-indigo-100 px-4 py-4 w-full outline-none " placeholder="Message" name="" id="message"
                            cols="50" rows="10"></textarea>
                        <button class="bg-indigo-400 text-white rounded-lg hover:transition-all hover:bg-blue-700 px-4 py-3" id="btn-submit" onclick="return sendMail()">Submit Message</button>
                    </form>
                </div>
            </div>
            <iframe class="w-full mt-6" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d33998.99630244095!2d105.74494660698436!3d21.029726390019547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454b991d80fd5%3A0x53cefc99d6b0bf6f!2zVHLGsOG7nW5nIENhbyDEkeG6s25nIEZQVCBQb2x5dGVjaG5pYw!5e0!3m2!1svi!2s!4v1677085072372!5m2!1svi!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </section>
    </div>
    ${Footer()}
  `;
};

export default ContactPage;
