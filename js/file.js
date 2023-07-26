var butOpen1 = document.querySelector('.Facebook');
var butOpen2 = document.querySelector('.Youtube');
var iconClose = document.querySelector('.card-header i');
var butClose = document.querySelector('.card-footer button');
var cardinner = document.querySelector('.card-inner');
function open(e){
    cardinner.classList.toggle('hide');
}
butOpen1.addEventListener('click',open);
butOpen2.addEventListener('click',open);
cardinner.addEventListener('click',function(e){
    if(e.target == e.currentTarget){
        open;
    }
})
iconClose.addEventListener('click',open);
butClose.addEventListener('click',open);

