
//Promise Created
/*  const promiseOne = new Promise((resolve, reject)=>{
        setTimeout(()=>{
          let error = false;
          if (!error) {
            resolve({id:'badshah__sourav' , name: 'Sourav Kumar' , social: 'Instagram'});
          } else {
            reject('Error! Js error Promise Rejected')
          }
        },3000)
})
*/

// Using .then() & .catch()

    // promiseOne
    //   .then((result)=>{
    //       console.log(result)
    //   })

    //   .catch((error)=>{
    //     console.log(error)
    //   })


//  async function byAsync(){
//    try {
//     const response = await promiseOne
//     console.log(response);
//    } catch (error) {
//     console.log(error);
//    }
//  }


//  byAsync()



//fetching Api response with then catch

// fetch('https://api.github.com/users/er-souravkmr')
//     .then((response)=>{
//         return response.json()
//     })
//     .then((data)=>{
//        console.log(data)
//     })
//     .catch((error)=>{
//       console.log(error)
//     })

// fetching same with Async await

  // async function apiCall(){
  //   try {
  //     const response = await fetch('https://api.github.com/users/er-souravkmr')

      
  //     console.log( await response.json())
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // apiCall()
































// const week = document.querySelector('#days');
// console.log(week.innerHTML)
// console.log(week.parentElement.children);

// const days = week.parentElement.children;

// for (let i = 0; i < days.length; i++) {
//     console.log(days[i].innerHTML);
// }

// const el = document.createElement('h2');
// el.setAttribute('id','newel')
// el.setAttribute('class','new')
// el.innerHTML = 'New Element'

// document.body.querySelector('#main').appendChild(el);

// // Create element (li) in #main .language which has more languages

// function create_li ( lang ){
//     const li = document.createElement('li');
//     li.appendChild(document.createTextNode(lang));
//     document.body.querySelector('#language').appendChild(li);
// }

// create_li('Java')
// create_li('Python')
// create_li('Go')
// create_li('C')

// function delete_li (){
//     const ul = document.querySelector('#language');
//     const li = ul.querySelector('li:last-child')
//     li.remove()
// }
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Digital Clock >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// const clock = document.getElementById('clock');

// setInterval(()=>{

//     let date = new Date();
//     clock.innerHTML = date.toLocaleTimeString()

// },1000)

//................................>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>..............................>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//................................................. Background changer JS Code...................................................................

// const button = document.querySelectorAll(".button");
// const body = document.body;

// button.forEach((el) => {
//   el.addEventListener("click", (e) => {
//     if (e.target.id === "red") {
//       body.style.backgroundColor = "red";
//       body.style.color = "white";
//     }
//     if (e.target.id === "blue") {
//       body.style.backgroundColor = "blue";
//       body.style.color = "white";
//     }
//     if (e.target.id === "yellow") {
//       body.style.backgroundColor = "yellow";
//       body.style.color = "black";
//     }
//     if (e.target.id === "green") {
//       body.style.backgroundColor = "green";
//       body.style.color = "white";
//     }
//   });
// });

//optimized way

//  const button = document.querySelectorAll('.button');
//  const body = document.body;

//  button.forEach(el => {
//     el.addEventListener('click',(e)=>{
//         color(e.target.id);
//      })
//  });

//  function color(id){

//         body.style.backgroundColor =id
//         id=='yellow'?body.style.color = 'black':body.style.color = 'white'

//  }

//...........................................................................................................................................

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<        BMI calculator JS Code             >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// const formdata = document.getElementById('bmiForm');

// if(formdata){
//  formdata.addEventListener('submit' , function(e){
//      e.preventDefault()

//      const height = parseInt(document.querySelector('#height').value)
//      const weight = parseInt(document.querySelector('#weight').value)
//      const result =  document.querySelector('#result')

//      if(height < 0 || height == '' || isNaN(height)){
//          result.classList.add("bg-warning" ,"text-dark")
//          result.innerHTML = 'Please Give A Valid Height'

//      }else if(weight < 0 || weight == '' || isNaN(weight)){
//          result.classList.add("bg-warning" ,"text-dark")
//          result.innerHTML = 'Please Give A Valid Weight'
//      }else{

//        const  bmi = weight/((height*height)/10000).toFixed(2)

//          result.classList.add("bg-warning" ,"text-dark")
//          result.innerHTML = `Your BMI is ${bmi}`

//      }
//   })
// }

//<,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,..............................................................................>


