const SeviceCategory = ({ serviceCatgories }) => {
  return `
  ${serviceCatgories.map((servicecate) => {
    return `
    <li class="mb-3">
  <div class="flex items-center">
      <i class="fa-solid fa-angles-right"></i> 
      <p class="ml-4">${servicecate.content}</p>
  </div>
</li>
    `;
  })}
  

  `;
};
export default SeviceCategory;
