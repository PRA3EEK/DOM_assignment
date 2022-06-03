// write code here, dont change anything in HTML and css files 
// refer to id's mentioned in html files carefully
// Follow the exact column order for tables,for eg: name should be filled under "name" column 
// we are using form here, make sure you are using "submit" eventListener , or else you will get 0 marks

document.querySelector("form").addEventListener("submit",myfunction);
let frm = document.querySelector("form");
function myfunction(event){
    event.preventDefault();
   let x=frm.image.value;
   let y=frm.name.value;
   let z=frm.batch.value;
   let a=frm.dsa.value;
   let b=frm.cs.value;
   let c=frm.coding.value;
   let tr = document.createElement("tr");
   let td1 = document.createElement("td");
   let pic = document.createElement("img");
   pic.setAttribute("src", x ) ;
   td1.append(pic);
   let td2 = document.createElement("td");
   td2.innerText=y;
   let td3 = document.createElement("td");
   td3.innerText=z;
   let td4 = document.createElement("td");
   td4.innerText=a;
   let td5 = document.createElement("td");
   td5.innerText=b;
   let td6 = document.createElement("td");
   td6.innerText=c;
   let td7 = document.createElement("td");
   let total=Number(a)+Number(b)+Number(c);
   let perc=total/30*100;
   td7.innerText=perc;
   let td8 = document.createElement("td");
   if(perc<50){
       td8.innerText="ASync"
       td8.style.backgroundColor="Red";
       td8.style.color="white";
   }else{
       td8.innerText="Regular";
       td8.style.backgroundColor="green";
       td8.style.color="white";
   }
   let td9 = document.createElement("td");
   td9.innerText="Delete";
   td9.style.backgroundColor="red";
   td9.style.color="white";
   td9.style.cursor="pointer";
   td9.addEventListener('click',func);
   tr.append(td1,td2,td3,td4,td5,td6,td7,td8,td9);
   document.querySelector("tbody").append(tr);
};
function func(event){
    event.target.parentNode.remove();
}