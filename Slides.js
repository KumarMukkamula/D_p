let item = document.querySelector('.slider .item');
let next = document.getElementById('next');
let previous = document.getElementById('previous');
let thumbnail = document.querySelectorAll('.thumbnail .item');

//  config param 
let countitem = item.length;
let itemActive = 0;

// event next click

next.onlick = function(){
    itemActive = itemActive +1;
    if(itemActive >= countItem){
        itemActive = 0;
    }
    showSlider();
}
function showSlider(){
    //  remove item active old
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    itemActiveOld.classList.remove('active'); 
    thumbnailActiveOld.classList.remove('active');

    // Active new item 
    item[itemActive].classList.add('active');
    thumbnail[itemActive].classList.add('active');
}
