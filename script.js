let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let productList=document.querySelector('.box-container');

const searchbox=document.getElementById("search-data")





menu.onclick = () =>{

  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');

}

window.onscroll = () =>{

  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  if(window.scrollY > 0){
    document.querySelector('#scroll-top').classList.add('active');
  }else{
    document.querySelector('#scroll-top').classList.remove('active');
  }

}

let filterInput=document.getElementById("search-data");
filterInput.addEventListener('click',filterName)

function filterName(){
  const cl=document.getElementById("sales");
  cl.scrollIntoView({behavior:"smooth"})
}
filterInput.addEventListener('keyup',filterNames)

function filterNames(){
  const searchbox=document.getElementById("search-data").value.toUpperCase();
    const storeitems=document.getElementById("box-container")
  const product=document.querySelectorAll(".box")
  const pname=document.getElementsByTagName("h3")


    for(var i=0;i<pname.length;i++){
      let match=product[i].getElementsByTagName('h3')[0];

      if(match){
        let textvalue=match.textContent || match.innerHTML;

        if(textvalue.toUpperCase().indexOf(searchbox)>-1){
          product[i].style.display="";
        }else{
          product[i].style.display="none";
        }
      }
  }

}

// }
// const search=()=>{
//   const searchbox=document.getElementById("search-data").value.toUpperCase();
//   const storeitems=document.getElementById("box-container")
//   const product=document.querySelectorAll(".box")
//   const pname=document.getElementsByTagName("h3")
  

 


//   for(var i=0;i<pname.length;i++){
//       let match=product[i].getElementsByTagName('h3')[0];

//       if(match){
//         let textvalue=match.textContent || match.innerHTML;

//         if(textvalue.toUpperCase().indexOf(searchbox)>-1){
//           product[i].style.display="";
//         }else{
//           product[i].style.display="none";
//         }
//       }
//   }


 
// }

// load product items content  JSON file
// function loadJSON(){
//   fetch('view.json')
//   .then(response => response.json())
//   .then(data =>{
//       let html = '';
//       data.forEach(product => {
//           html += `
  
//             <div class="box" data-name="${product.dataName}">
//               <span class="price"> ${product.price} </span>
//               <img src="${product.img}" alt="">
//               <h3>${product.name}</h3>
//               <div class="stars">
//                   <i class="fas fa-star"></i>
//                   <i class="fas fa-star"></i>
//                   <i class="fas fa-star"></i>
//                   <i class="fas fa-star"></i>
//                   <i class="fas fa-star"></i>
//               </div>
//               <a href="#" class="btn">${product.buy}</a>
//               <a href="${product.href}?id" class="btn">View</a>
//           </div>
//           `;
//       });
//       productList.innerHTML = html;
//   })
//   // .catch(error => {
//   //     alert(`User live server or local server`);
//   //     //URL scheme must be "http" or "https" for CORS request. You need to be serving your index.html locally or have your site hosted on a live server somewhere for the Fetch API to work properly.
//   // })
// }

    $(document).ready(()=>{
        $.getJSON('view.json', (data)=>{
            data.forEach((course)=>{
                var courseEl = '<div class="box">'+
                    '<span class="price">'+ course.price + '</span>'+
                    '<img src="' + course.img + '">'+
                    '<h3>' + course.name + '</h3>'+
                     '<a href="./productView.html?id='+course.id+'" class="btn">'+course.view+ '</a>'+
                     ' <a href="./productView.html?id='+course.id+'" class="btn">'+course.buy+ '</a>'
          
                '</div>';
                $('.box-container').append(courseEl);
            });
        });
    });