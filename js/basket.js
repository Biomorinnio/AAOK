
const basketPlus = document.querySelectorAll('.basket__info-col img')
const basketCol = document.querySelector('.basket__col-number')

for(let i = 0; i < basketPlus.length; i++){

    basketPlus[i].addEventListener('click', ()=>{
        console.log(i)
        if(i) basketCol.textContent = ++basketCol.textContent;
        else{
            if(basketCol.textContent > 1)            basketCol.textContent = --basketCol.textContent;
        } 
    })
}

const checkBox1 = document.getElementById('for1');
const checkBox2 = document.getElementById('for2');
const checkBox2Nmame = document.getElementById('name2');

checkBox1.addEventListener('click', ()=>{
    checkBox2.checked = false;
    checkBox1.checked = true;
    checkBox2Nmame.classList.remove('active')
})
checkBox2.addEventListener('click', ()=>{
    checkBox2.checked = true;
    checkBox1.checked = false;
    checkBox2Nmame.classList.add('active')
})