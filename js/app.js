// 1. Add an event to the 'See Details' content that will create an alert box that says 'Not Available in Hawaii.' after clicking on See Details.
let details = document.querySelector('#details');
details.addEventListener('click', nohawaii);
function nohawaii(){
    alert('Not Available in Hawaii');
}

//2. Add an event to the div element with the id of 'name1' that will show/hide the description ('descrip1') after hovering over Air Jordan II.
let nameDiv = document.querySelector('#name1');
nameDiv.addEventListener('mouseover', description1);
function description1(){
    let showthis = this.querySelector('#descrip1');
    if (showthis.style.display === 'none'){
        showthis.style.display = 'block';
    }else{
        showthis.style.display = 'none';
    }
}

//3. Add an event to the div element with the id of 'name2' that will show/hide the following description after clicking on the element.
//'The instantly recognizable Jumpman silhouette made its debut with the Air Jordan 3 during Michael Jordan's 1987-88 NBA season.'
let nameDiv2 = document.querySelector('#name2');

let newdescrip = document.createElement('div');
newdescrip.id = 'descrip2';
newdescrip.innerHTML = "The instantly recognizable Jumpman silhouette made its debut with the Air Jordan 3 during Michael Jordan's 1987-88 NBA season."
nameDiv2.appendChild(newdescrip);

nameDiv2.addEventListener('click', description2);
function description2(){
    let showthis = this.querySelector('#descrip2');
    if (showthis.style.display === 'none'){
        showthis.style.display = 'block';
    }else{
        showthis.style.display = 'none';
    }
}
//You'll need to:
// create a div element with an id of 'descrip2'
//append this element to the div element with the id of 'name2' 

//4. Add events to the all the thumbs up icon that will add a count for each time the icon is clicked on for any shoe.
let thumbsup = document.querySelectorAll('#thumbs')
for (let i=0;i<thumbsup.length;i++){
    thumbsup[i].innerHTML = 0;
    thumbsup[i].addEventListener('click', thumbcount);
}
function thumbcount(event){
    event.target.innerHTML++;
}

//5. Add an event to the plus icon that will increment the price of the Air Jordan V shoe each time the icon is clicked on.
let shoeprice = document.querySelector('#increase');
shoeprice.addEventListener('click', priceraise);
function priceraise(){
    let x = document.getElementById('price4');
    console.log(x);
    console.log(x.childNodes)
    x.childNodes[0].nodeValue++;
}

//6. Add an event to the minus icon that will decrement the price of the Air Jordan VI shoe each time the icon is clicked on.

//7. Add an event to the Air Jordan XI shoe that will show another colorway for that shoe after hovering over the image. 

//8. Add an event to the Air Jordan XII shoe that will increase the image by 50% after clicking on the image.

//9. Add events to both the plus and minus icon that will add or decrease the price each time the respective icon is clicked on.

//10. Add an event to the Air Jordan XXVIII shoe that will show the famous 'crying Michael Jordan' meme after clicking on the image.
