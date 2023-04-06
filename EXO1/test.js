import { tabUser } from "./data.js";
const next=document.querySelector('.next');
const tailleTab=tabUser.length;
const numeroK=document.getElementById('numeroK');
console.log(numeroK);
let posCourant=randomPos(tailleTab);
// let posCourant;
// numeroK.addEventListener('input',()=>{
//     console.log(numeroK.value);
// })
console.log(tabUser);
function printUser(user) {
    const img=document.querySelector('img');
    const photoEl=document.querySelector('.photo');
    const tbody=document.querySelector('tbody');
    let photo=new Image();
    photo.src=user.photo;
    console.dir(photo);
    photoEl.innerHTML=photo.outerHTML;
    //charger les spinners
    photo.onload=()=>{
        // desactiver le spinner
        // alert('image chargée')
        //afficher les informations du user
        // afficher les transactions
        tbody.innerHTML="";
        user.transactions.forEach(trans=>{
            tbody.innerHTML+=` <tr>
            <td>${trans.numero}</td>
            <td>${trans.date}</td>
            <td>${trans.sens=='1'?'depot':'retrait'}</td>
            <td>${trans.montant}</td>
        </tr>`
        });
    }
    // img.src=user.photo;

}

function randomPos(max) {
    return Math.floor(Math.random()*max);
}
// printUser(tabUser[posCourant]);

printUser(tabUser[posCourant]);
next.addEventListener('click',()=>{
    posCourant=randomPos(tailleTab);
    console.log(posCourant);
    printUser(tabUser[posCourant]);
    tabUser[posCourant].transactions.push(newElement)
})