USERS=[
    { id: 1, nom: 'BA', prenom:'Kadiata', telephone: '70 843 11 22', email:'kadia@exemple.com',src:'https://images.unsplash.com/photo-1673865641132-d4302e15f8d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGltYWdlJTIwZmlsbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',transactions: [[0,2,3,4], ['10-01-2023','27-02-2023','01-02-2023','09-03-2023'], [1,-1,-1,1], [12000,12000,12000,120000]] },
    { id: 2, nom: 'DIOP', prenom:'Oumar', telephone: '77 198 34 63', email:'oumar@exemple.com',src:'https://images.unsplash.com/photo-1618937995753-94fe3bd8375c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGltYWdlJTIwZ2FyJUMzJUE3b24qfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',transactions: [[5,6], ['10-01-2023','01-02-2023'], [-1,1], [12000,52000]] },
    { id: 3, nom: 'SALL', prenom:'Fatou', telephone: '77 876 34 22', email:'fatou@exemple.com',src:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGltYWdlJTIwZmlsbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',transactions: [[7,8,9], ['10-01-2023','01-02-2023','09-03-2023'], [1,-1,1], [12000,12000,12000]] },
    { id: 4, nom: 'NIANG', prenom:'Sidi', telephone: '70 843 44 22', email:'sidi@exemple.com',src:'https://images.unsplash.com/photo-1615531068122-80040baba3bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGltYWdlJTIwZ2FyJUMzJUE3b24qfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',transactions: [[10,11,12,13,14], ['10-01-2023','01-02-2023','27-02-2023','09-01-2023','12-03-2023'], [-1,-1,1,-1,1], [12000,12000,12000,12000,102000]] },
]

/*___________________________________________________________________________________________________________*/

let nom=document.querySelector('#lastname');
let prenom=document.querySelector('#firstname');
let phone=document.querySelector('#phone');
let Email=document.querySelector('#email');
let code=document.getElementsByTagName('code');
let image=document.getElementsByTagName('img');
let colonne=document.getElementsByTagName('td');
let entete=document.getElementsByTagName('tbody');
let suivant=document.querySelector('.next');
let ajout=document.querySelector('.btn-detail');
let montant=document.querySelector('#mnt');
let selection=document.querySelector('#trans');
let enregistre=document.querySelector('.btnEnregistrer');
let s=document.querySelector('#solde');
let title=document.querySelector('.title');
let form=document.querySelector('.form')
let d=document.createElement('div');



let numTrans=15
let identifiant;
let z;
let valeur=0;





/*___________________________________________________________________________________________________________*/
nom.innerHTML=USERS[0].nom
prenom.innerHTML=USERS[0].prenom
phone.innerHTML=USERS[0].telephone
Email.innerHTML=USERS[0].email
code[0].innerHTML=USERS[0].transactions[0].length
image[0].src=USERS[0].src
for (let index1 = 0; index1 < USERS[0].transactions[0].length; index1++) {
    let tr=document.createElement('tr');
    for (let index = 0; index < 4; index++) {
        td=document.createElement('td');
        if (USERS[0].transactions[index][index1]==-1) {
            td.innerHTML='retrait'
        }
        else if (USERS[0].transactions[index][index1]==1) {
            td.innerHTML='dépot'
        } 
        else {
            td.innerHTML=USERS[0].transactions[index][index1]
        }
        // let objet=colonne[index]
        // objet.innerHTML=USERS[0].transactions[index][index1]
        // tr=objet;
        tr.appendChild(td)
    }
    entete[0].appendChild(tr);
}
let SS=Solde(0);
s.textContent=SS
// identifiant=USERS[0].id







i=0;
suivant.addEventListener('click',()=>{
    i++;
    // console.log(i);
    entete[0].innerHTML=''
    if (i==USERS.length) {
        i=0;
    }
    nom.innerHTML=USERS[i].nom
    prenom.innerHTML=USERS[i].prenom
    phone.innerHTML=USERS[i].telephone
    Email.innerHTML=USERS[i].email
    code[0].innerHTML=USERS[i].transactions[0].length
    image[0].src=USERS[i].src
    for (let index1 = 0; index1 < USERS[i].transactions[0].length; index1++) {
        let tr=document.createElement('tr');
        for (let index = 0; index < 4; index++) {
            td=document.createElement('td');
            // td.innerHTML=USERS[i].transactions[index][index1]
            if (USERS[i].transactions[index][index1]==-1) {
                td.innerHTML='retrait'
            }
            else if (USERS[i].transactions[index][index1]==1) {
                td.innerHTML='dépot'
            }
            else if (USERS[i].transactions[index][index1]==-12) {
                td.innerHTML='recu'
            } 
            else if (USERS[i].transactions[index][index1]==-11) {
                td.innerHTML='envoi'
            }
            else {
                td.innerHTML=USERS[i].transactions[index][index1]
            }
            tr.appendChild(td)
        }
        entete[0].appendChild(tr);
    }
    let ss=Solde(i);
    s.textContent=ss
    let b=USERS[i].transactions[0].length
    identifiant=USERS[i].id
    selection.addEventListener('change',()=>{
        valeur=selection.value;
        if (valeur==='e') {
            d.innerHTML=`<div class="form-group">
            <label for="tel">Téléphone</label>
            <input type="tel" id="tel" placeholder="Téléphone..."
                class="from-control" value="">
        </div>`
            form.appendChild(d);
        }
        else{
            d.innerHTML=''
            form.appendChild(d);
        }
    })
    enregistre.addEventListener('click',()=>{
        let xaliss;
        xaliss=montant.value;
        if (valeur==='d') {
            numTrans=numTrans+1;
            USERS[i].transactions[0].push(numTrans);
            let date1=new Date();
            let jourMois = date1.getDate();
            let mois = date1.getMonth();
            mois=mois+1;
            let annee = date1.getFullYear();
            let date2=`${jourMois}-${mois}-${annee}`;
            USERS[i].transactions[1].push(date2);
            USERS[i].transactions[2].push(1)
            USERS[i].transactions[3].push(+xaliss)
            console.log(USERS[i].transactions);
            let tr1=document.createElement('tr');
            for (let index = 0; index <= b+1; index++) {
                td=document.createElement('td');
                // td.innerHTML=USERS[i].transactions[index][b]
                if (USERS[i].transactions[index][b]==-1) {
                    td.innerHTML='retrait'
                }
                else if (USERS[i].transactions[index][b]==1) {
                    td.innerHTML='dépot'
                } 
                else {
                    td.innerHTML=USERS[i].transactions[index][b]
                }
                tr1.appendChild(td)
            }
            entete[0].appendChild(tr1);
            let ss=Solde(i);
            s.textContent=ss
        }
        else{
            if (xaliss > ss) {
                alert('impossible:votre solde est inferieur')
            }
            else{
                if (valeur==='r') {
                    numTrans=numTrans+1;
                    USERS[i].transactions[0].push(numTrans);
                    let date1=new Date();
                    let jourMois = date1.getDate();
                    let mois = date1.getMonth();
                    mois=mois+1;
                    let annee = date1.getFullYear();
                    let date2=`${jourMois}-${mois}-${annee}`;
                    USERS[i].transactions[1].push(date2);
                    USERS[i].transactions[2].push(-1)
                    USERS[i].transactions[3].push(+xaliss)
                    console.log(USERS[i].transactions);
                    let tr1=document.createElement('tr');
                    for (let index = 0; index <= b+1; index++) {
                        td=document.createElement('td');
                        // td.innerHTML=USERS[i].transactions[index][b]
                        if (USERS[i].transactions[index][b]==-1) {
                            td.innerHTML='retrait'
                        }
                        else if (USERS[i].transactions[index][b]==1) {
                            td.innerHTML='dépot'
                        } 
                        else {
                            td.innerHTML=USERS[i].transactions[index][b]
                        }
                        tr1.appendChild(td)
                    }
                    entete[0].appendChild(tr1);
                    let ss=Solde(i);
                    s.textContent=ss
                }
                else{
                    let aa;
                    aa=tel.value;
                    let a=rechercheNum(aa);
                    if (a==false) {
                        alert(`Ce numéro n'existe pas`);
                    }
                    else{
                        numTrans=numTrans+1;
                        USERS[i].transactions[0].push(numTrans);
                        let date1=new Date();
                        let jourMois = date1.getDate();
                        let mois = date1.getMonth();
                        mois=mois+1;
                        let annee = date1.getFullYear();
                        let date2=`${jourMois}-${mois}-${annee}`;
                        USERS[i].transactions[1].push(date2);
                        USERS[i].transactions[2].push(-11)
                        USERS[i].transactions[3].push(+xaliss)
                        console.log(USERS[i].transactions);
                        let tr1=document.createElement('tr');
                        for (let index = 0; index <= b+1; index++) {
                            td=document.createElement('td');
                            // td.innerHTML=USERS[i].transactions[index][b]
                            if (USERS[i].transactions[index][b]==-11) {
                                td.innerHTML='envoi'
                            }
                            else if (USERS[i].transactions[index][b]==1) {
                                td.innerHTML='dépot'
                            } 
                            else {
                                td.innerHTML=USERS[i].transactions[index][b]
                            }
                            tr1.appendChild(td)
                        }
                        entete[0].appendChild(tr1);
                        let ss=Solde(i);
                        s.textContent=ss
                        let zz=rechercheNumId(aa);
                        numTrans=numTrans+1;
                        USERS[zz].transactions[0].push(numTrans);
                        let dater=new Date();
                        let JM = dater.getDate();
                        let M = dater.getMonth();
                        M=M+1;
                        let A = dater.getFullYear();
                        let DR=`${JM}-${M}-${A}`;
                        USERS[zz].transactions[1].push(DR);
                        USERS[zz].transactions[2].push(-12)
                        USERS[zz].transactions[3].push(+xaliss)
                        console.log(USERS[zz].transactions);
                        let tr3=document.createElement('tr');
                        for (let index = 0; index <= b+1; index++) {
                            td=document.createElement('td');
                            // td.innerHTML=USERS[i].transactions[index][b]
                            if (USERS[zz].transactions[index][b]==-1) {
                                td.innerHTML='envoi'
                            }
                            else if (USERS[zz].transactions[index][b]==11) {
                                td.innerHTML='reçu'
                            } 
                            else {
                                td.innerHTML=USERS[zz].transactions[index][b]
                            }
                            tr3.appendChild(td)
                        }
                        entete[0].appendChild(tr1);
                        let sss=Solde(zz);
                        s.textContent=sss
                    }
                }
            }
        }
        // if (xaliss > ss) {
        //     alert('impossible:votre solde est inferieur')
        // }
        // else{
        //     numTrans=numTrans+1;
        //     USERS[i].transactions[0].push(numTrans);
        //     let date1=new Date();
        //     let jourMois = date1.getDate();
        //     let mois = date1.getMonth();
        //     mois=mois+1;
        //     let annee = date1.getFullYear();
        //     let date2=`${jourMois}-${mois}-${annee}`;
        //     USERS[i].transactions[1].push(date2);
        //     if (valeur==='d') {
        //         USERS[i].transactions[2].push(1)
        //     }
        //     if(valeur==='r'){
        //         USERS[i].transactions[2].push(-1)
        //     }
        //     USERS[i].transactions[3].push(+xaliss)
        //     console.log(USERS[i].transactions);
        //     let tr1=document.createElement('tr');
        //     for (let index = 0; index <= b; index++) {
        //         td=document.createElement('td');
        //         td.innerHTML=USERS[i].transactions[index][b]
        //         tr1.appendChild(td)
        //     }
        //     entete[0].appendChild(tr1);
        //     let ss=Solde(i);
        //     s.textContent=ss
        // }
    })
})

function Solde(IDEN) {
    let solde=0;
    for (let index = 0; index < USERS[IDEN].transactions[2].length; index++) {
        if ((USERS[IDEN].transactions[2][index])===-1) {
            solde=(solde)+((-1)*(+USERS[IDEN].transactions[3][index]))
        }
        if ((USERS[IDEN].transactions[2][index])===1) {
            solde=(solde)+(+USERS[IDEN].transactions[3][index])
        }
        if ((USERS[IDEN].transactions[2][index])===-11) {
            solde=(solde)+((-1)*(+USERS[IDEN].transactions[3][index]))
        }
        if ((USERS[IDEN].transactions[2][index])===-12) {
            solde=(solde)+(+USERS[IDEN].transactions[3][index])
        }
    }
    return solde;
}

ajout.addEventListener('click',()=>{
    if (getComputedStyle(form).display=='block') {
        form.style.display='none';
    }
    else{
        form.style.display='block';
    }
})
function rechercheNum(num) {
    for (let index = 0; index < USERS.length; index++) {
        if (USERS[index].telephone===num) {
            return true;
        }
    }
    return false;
}
function rechercheNumId(num) {
    for (let index = 0; index < USERS.length; index++) {
        if (USERS[index].telephone===num) {
            return index;
        }
    }
}