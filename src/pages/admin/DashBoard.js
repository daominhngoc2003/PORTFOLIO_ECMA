import Footer from "../../components/admin/Footer";
import Header from "../../components/admin/Header";

const DashBoard = () => {
  return `
  ${Header()}
  <section class="box mx-auto ">
  <div class="title flex align-center ">
  <img src="https://res.cloudinary.com/fashsion-brand/image/upload/v1676793214/portfolio/cz3dbaruoomszgpdcqrz.png">
  </div>
  </section>
  
  ${Footer()}
  `;
};

export default DashBoard;

//muốn lấy resource con thì sử dụng _embed
// https://unicode-json-server-iota.vercel.app/categories/1?_embed=projects

// muốn lấy resource cha thì sử dụng _expand
// https://unicode-json-server-iota.vercel.app/projects/1?_expand=category
