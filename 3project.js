const reviews = [
  {
      id: 1,
      name: "Bill Anderson",
      job: "Web Developer",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs49RL3jXvEyp62oG8Ww9gCdWzuyW1Ldk73g&s",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, rerum beatae, aliquam corrupti cumque recusandae facilis quas quaerat quis blanditiis",
  },
  {
      id: 2,
      name: "Bill Anderson",
      job: "Web Developer",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt-VapQGtztfXZhmzYuiXpOj3mvsat4uj1cw&s",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, rerum beatae, aliquam provident optio cumque recusandae facilis quas quaerat quis blanditiis",
  },
  {
      id: 3,
      name: "Bill Anderson",
      job: "Web Developer",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtzBu44ezRRuTPHA3N660O96PxeknkwMlkVA&s",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, rerum beatae, veritatis provident optio cumque recusandae facilis quas quaerat quis blanditiis",
  },
  {
      id: 4,
      name: "Bill Anderson",
      job: "Web Developer",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt-VapQGtztfXZhmzYuiXpOj3mvsat4uj1cw&s",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, rerum beatae, aliquam provident optio cumque recusandae facilis quas quaerat quis blanditiis",
  },
  {
      id: 5,
      name: "Bill Anderson",
      job: "Web Developer",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW8gj6ylgnwuDmoH2CmN4UEN7ec2R6M7gH-iCM-03UsA&s",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, rerum beatae, aliquam provident optio cumque recusandae facilis quas quaerat quis blanditiis",
  },
]
//select items
const img = document.getElementById("person-img");
const author = document .getElementById("author");
const job = document .getElementById("job");
const info = document .getElementById("info");
const preBtn = document .querySelector(".prev-btn");
const nextBtn = document .querySelector(".next-btn");
const randomBtn = document .querySelector(".random-btn");
//set starting item
let currentItem = 0;
//load intial item
window.addEventListener("DOMContentLoaded",function() {
showPerson(currentItem);
});
//show person based on item
function showPerson(){
const item = reviews[currentItem];
img.src = item.img;
author.textContent =item.name;
job.textContent = item.job;
info.textContent =item.text;
}
//show next person
nextBtn.addEventListener("click",function(){
  currentItem++;
  if(currentItem>reviews.length-1){
      currentItem=0;
  }
  showPerson(currentItem);
});
//show prev person
preBtn.addEventListener("click",function(){
  currentItem--;
  if(currentItem < 0){
    currentItem = reviews.length-1;
  }
  showPerson(currentItem);
});
randomBtn.addEventListener("click", function(){
  currentItem = Math.floor(Math.random()* reviews.length);
  console.logshowPerso(); void
  showPerson ();
});