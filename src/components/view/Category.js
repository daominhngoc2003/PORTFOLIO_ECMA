import axios from "axios";
import { useEffect, useState } from "../../lib";

const Category = ({ categories, onClick }) => {
  useEffect(() => {
    const btns = document.querySelectorAll(".btn");
    for (let btn of btns) {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        const id = this.dataset.id;
        onClick(id);
        console.log("id cate", id);
      });
    }
  });
  return `
                <ul class="flex justify-center items-center h-[60px] mt-10">
                    <li><button data-id="0"  class="px-7 rounded-full btn  hover:bg-slate-800 hover:text-white font-bold  text-[22px]  mx-2 py-3 border">All</button></li>
                    ${categories
                      .map((category) => {
                        return `<li><button data-id="${category.id}" class="px-7 font-bold btn rounded-full hover:bg-slate-800 text-[22px] hover:text-white mx-2 py-3 border">${category.name}</button></li>`;
                      })
                      .join("")}
                </ul> 
  </select>
  `;
};

export default Category;
