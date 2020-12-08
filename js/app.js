
let navMenu = document.getElementById('navbar__list');
let list_i_l = document.getElementsByClassName("landing__container").length;
let listItem = document.getElementsByTagName("section");


const scrollTop = () => {
    const scrolling = document.documentElement.scrollTop || document.body.scrollTop;
    if (scrolling > 0) {
        window.requestAnimationFrame(scrollTop);
        window.scrollTo(0, scrolling - scrolling / 50);
    }

};

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function append() {
    for (let i of listItem) {
        let li = document.createElement("li");
        li.className = "menu__link";
        //let nav = i.getAttribute('data-nav');
        //li.innerHTML = `<a href="#${i.id}">${i.dataset.nav}</a>`;
        li.innerHTML = `<a href="#${i.id}">${i.dataset.nav}</a>`;
        navMenu.appendChild(li);
        console.log(li);
    };

}

/*function addButton(item) {
    let btnDiv = document.querySelector(`${item}btn`);//div which have button
    let btn = document.createElement("button");     //create button
    btn.textContent = "TOP";
    btn.className = "btn";
    btnDiv.appendChild(btn);
}

function removeButton(){
    let btnDiv = document.querySelector("button");
    btnDiv.innerHTML = "";
}
*/
function addActiveClass(condition,item){
    let itemTarget=document.querySelector(item);
    if(condition){
    itemTarget.className="your-active-class";
    }
    //itemTarget.classList.remove("your-active-class");
}

function removeActiveClass(item) {
    let itemTarget = document.querySelector(item);
    //itemTarget.className="";
    itemTarget.classList.remove("your-active-class");
}

const isInViewport=(item)=>{
    return(Math.floor(document.querySelector(item).getBoundingClientRect().top));
}   

const activeSection = ()=>{
    for (let i = 1; i < list_i_l + 1; i++) {
        const section = `#section${i}`;
        const inViewSection = isInViewport(section);
        condition = ()=> inViewSection < 150 && inViewSection >= -150;
        removeActiveClass(section);
        addActiveClass(condition(),section);
    }
}    
window.addEventListener("scroll", activeSection);

navMenu.addEventListener("click", function (e) {
    console.log(e);
    e.preventDefault();
    //smothscroll(sec, 1000);
    let itemTarget = e.target.hash;   //to get the id(#section1...3) of the section which i clicked
    //console.log(itemTarget);

    document.querySelector(itemTarget).scrollIntoView({
        behavior: 'smooth'
    });

    //addButton(itemTarget);
    let btnDiv = document.querySelector(`${itemTarget}btn`);
    btnDiv.innerHTML = "<button class='btn'>Top</button>"
    document.querySelector('button').onclick = function () {
        scrollTop();
        this.remove();
    };

});
append();
//counter
   
$('.counter').each(function () {
    var $this = $(this),
        countTo = $this.attr('data-count');
    
    $({ countNum: $this.text() }).animate({
        countNum: countTo
    },

        {
            
            duration: 3000, 
            easing: 'linear',
            step: function () {
                $this.text(Math.floor(this.countNum));
            },
            complete: function () {
                $this.text(this.countNum);
                //alert('finished');
            }

        });

    



});

//title
$(function () {
    $("h1").lettering();
});