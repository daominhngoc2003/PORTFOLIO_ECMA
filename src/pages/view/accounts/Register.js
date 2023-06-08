import axios from "axios";
import Footer from "../../../components/view/Footer";
import Header from "../../../components/view/Header";
import { router, useEffect } from "../../../lib";

const Register = () => {
  useEffect(() => {
    const form = document.querySelector("#form-signup");
    const password = document.querySelector("#password");
    const email = document.querySelector("#email");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const formdata = {
        email: email.value,
        password: password.value,
      };

      axios
        .post("http://localhost:3000/signup", formdata)
        .then(() => {
          alert(" Register successful😎");
          window.location.href = "/signin";
        })
        .catch(() => alert("Lỗi nhập không hợp lệ"));
    });
  });
  return `
    ${Header()}
    <div class="bg-slate-50">
        <!-- Title -->
        <section class="bg-[#e6dace] text-center">
            <h1 class=" font-black text-[32px] pt-20 pb-8">Signup</h1>
            <p class="pb-8">
                <a class="text-[18px]" href="/signin">Signin/</a>
                <a href="/signup">Register</a>
            </p>
        </section>
        <!-- project name 1 -->
        <section class="w-[700px] mx-auto p-14 bg-white mb-[80px] mt-10">
            <form id="form-signup">
                <div>
                    <h1 class="text-center font-bold text-[30px] mb-6">Register Your Account</h1>
                </div>
                <div>
                    <label class="font-bold " for="">Email *</label> <br>
                    <input id="email" class="border w-full rounded-full py-2 mt-3 h-[50px] px-4 outline-none" type="text"
                        placeholder="email">
                </div>
                <div class="mt-6">
                    <label class="font-bold " for="">Password *</label> <br>
                    <input id="password" class="border w-full rounded-full py-2 mt-3 h-[50px] px-4 outline-none" type="text"
                        placeholder="Enter your Password">
                </div>
                <div class="mt-6 flex justify-between">
                    <div class="flex gap-3">
                        <input type="checkbox">
                        <label class="font-bold " for="">I agree to the Terms & Policy</label>
                    </div>
                    <a class="underline" href="">Forgot Password?</a>
                </div>
                <div class="mt-6">
                    <button
                        class="w-full bg-black btn-signup rounded-full text-white font-bold py-4 hover:bg-white hover:text-black hover:border-2 hover:border-black border-2">CREATE
                        AN ACCOUNT</button>
                </div>
                <!-- <div class="mt-6">
                    <h1 class="text-center">OR LOGIN WITH</h1> <br>
                    <div class="flex justify-between gap-6">
                        <a class="bg-blue-900 text-white px-6 w-full rounded-md font-medium py-2" href=""> SIGN UP WHIT
                            FACEBOOK</a>
                        <a class="bg-orange-700 text-white px-6 w-full  rounded-md font-medium py-2" href=""> SIGNUP WHIT
                            GOOGLE</a>
                    </div>
                </div> -->
            </form>
        </section>
    </div>
    ${Footer()}
  `;
};

export default Register;
