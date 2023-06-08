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
        // console.log(id);
      });
    }
  });
  return `
                <ul class="flex justify-center items-center h-[60px] mt-10">
                    <li><a  class="px-7 rounded-full hover:bg-slate-400 mx-2 py-3 border" href="">all</a></li>
                    ${categories
                      .map((category) => {
                        return `<li><button data-id="${category.id}" class="px-7 btn rounded-full hover:bg-slate-400 mx-2 py-3 border">${category.name}</button></li>`;
                      })
                      .join("")}
                </ul> 
  
  </select>
  `;
};

export default Category;
