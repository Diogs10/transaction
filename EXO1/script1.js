//Les données
USERS = [
    { id: 1, nom: 'BA', prenom: 'Kadiata', telephone: '708431122', email: 'kadia@exemple.com', src: 'https://images.unsplash.com/photo-1673865641132-d4302e15f8d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGltYWdlJTIwZmlsbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60', transactions: [[1, 2, 3, 4], ['10-01-2023', '27-02-2023', '01-02-2023', '09-03-2023'], [1, -1, -1, 1], [12000, 12000, 12000, 120000]], SOLDE: 0, tranfert: [] },
    { id: 2, nom: 'DIOP', prenom: 'Oumar', telephone: '771983463', email: 'oumar@exemple.com', src: 'https://images.unsplash.com/photo-1618937995753-94fe3bd8375c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGltYWdlJTIwZ2FyJUMzJUE3b24qfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60', transactions: [[5, 6], ['10-01-2023', '01-02-2023'], [-1, 1], [12000, 52000]], SOLDE: 0, tranfert: [] },
    { id: 3, nom: 'SALL', prenom: 'Fatou', telephone: '778763422', email: 'fatou@exemple.com', src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGltYWdlJTIwZmlsbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60', transactions: [[7, 8, 9], ['10-01-2023', '01-02-2023', '09-03-2023'], [1, -1, 1], [12000, 12000, 12000]], SOLDE: 0, tranfert: [] },
    { id: 4, nom: 'NIANG', prenom: 'Sidi', telephone: '708434422', email: 'sidi@exemple.com', src: 'https://images.unsplash.com/photo-1615531068122-80040baba3bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGltYWdlJTIwZ2FyJUMzJUE3b24qfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60', transactions: [[10, 11, 12, 13, 14], ['10-01-2023', '01-02-2023', '27-02-2023', '09-01-2023', '12-03-2023'], [-1, -1, 1, -1, 1], [12000, 12000, 12000, 12000, 102000]], SOLDE: 0, tranfert: [] },
]








/*________________________________________________________________________________________________________________________________*/
//Déclaration des variables
const next = document.querySelector('.next');
let tailleTab = USERS.length;
const numeroK = document.getElementById('numeroK');
let posCourant = randomPos(tailleTab);
let s = document.querySelector('#solde');
let ajout = document.querySelector('.btn-detail');
let form = document.querySelector('.form')
let montant = document.querySelector('#mnt');
let selection = document.querySelector('#trans');
let enregistre = document.querySelector('.btnEnregistrer');
let tel = document.querySelector('#tel');
let RCHE = document.querySelector('#RCHE');
let ajoutUser = document.querySelector('.plus');
let modal = document.querySelector('.modal');
let cancel = document.querySelector('.btn1');
let add = document.querySelector('.btn2');
let PHONE = document.querySelector('#tel');
let annuleTrans = document.querySelector('.poubelle')
let a;
let r;
let trans = 14;
let valeur = 0
let posAnnule;
let nomModf=document.querySelector('#nnn')
let prenomModif=document.querySelector('#pnn')
let emailModif=document.querySelector('#emn')
let telModif=document.querySelector('#TELn')
let imgModif=document.querySelector('#imgn')



/*________________________________________________________________________________________________________________________________*/
//Appel des fonctions

printUser(USERS[posCourant]);

/*________________________________________________________________________________________________________________________________*/

//Les événements







next.addEventListener('click', () => {
    posCourant = randomPos(tailleTab);
    printUser(USERS[posCourant]);

})



ajout.addEventListener('click', () => {
    if (getComputedStyle(form).display == 'block') {
        form.style.display = 'none';
    }
    else {
        form.style.display = 'block';
    }
})


RCHE.addEventListener('keyup', () => {
    let objet = RCHE.value;
    // console.log(objet.length);
    let sug = ''
    if (objet.length >= 3) {
        let resultat = USERS.filter(user => (user.telephone.toLowerCase().startsWith(objet.toLowerCase())) || (user.nom.toLowerCase().startsWith(objet.toLowerCase())) || (user.prenom.toLowerCase().startsWith(objet.toLowerCase())))
        if (objet != '') {
            resultat.forEach(res => {
                sug += `<div class="Suggestion">${res.prenom} ${res.nom}-${res.telephone}</div>`
            });
        }
        document.querySelector('.suggestion').innerHTML = sug;
        let zz = document.querySelectorAll('.Suggestion')
        zz.forEach(z => {
            z.addEventListener('click', () => {
                let y = z.textContent;
                let yy = y.split("-")
                posCourant = rechercheNumId(yy[1]);
                printUser(USERS[posCourant])
                document.querySelector('.suggestion').innerHTML = ''
                RCHE.value = yy[0]
            })
        });
    }
    if (objet.length < 3) {
        sug = '';
        document.querySelector('.suggestion').innerHTML = sug;
    }
})

PHONE.addEventListener('keyup', () => {
    let objet = PHONE.value;
    // console.log(objet.length);
    let sug = ''
    if (objet.length >= 3) {
        let resultat = USERS.filter(user => (user.telephone.toLowerCase().startsWith(objet.toLowerCase())))
        if (objet != '') {
            resultat.forEach(res => {
                sug += `<div class="Suggestion">${res.prenom} ${res.nom}-${res.telephone}</div>`
            });
        }
        document.querySelector('.suggestion1').innerHTML = sug;
        let zz = document.querySelectorAll('.Suggestion')
        zz.forEach(z => {
            z.addEventListener('click', () => {
                let y = z.textContent;
                let yy = y.split("-")
                document.querySelector('.suggestion1').innerHTML = ''
                PHONE.value = yy[1]
            })
        });
    }
    if (objet.length < 3) {
        sug = '';
        document.querySelector('.suggestion').innerHTML = sug;
    }
})
selection.addEventListener('change', () => {
    valeur = selection.value;
})
annuleTrans.addEventListener('click', () => {
    annuleTransfert(posCourant)
})
enregistre.addEventListener('click', () => {
    const tbody = document.querySelector('tbody');
    let xaliss;
    xaliss = (+montant.value);
    if (xaliss < 500) {
        notif('La valeur doit etre supérieur à 500')
        // alert('La valeur doit etre supérieur à 500')
    }
    else if (valeur == '' || valeur === "s") {
        notif('Choisissez une option')
        // alert('Choisissez une option')
    }
    else {
        trans = trans + 1
        let dater = new Date();
        let JM = dater.getDate();
        if (JM < 10) {
            JM = '0' + JM
        }
        let M = dater.getMonth();
        M = M + 1;
        if (M < 10) {
            M = '0' + M
        }
        let A = dater.getFullYear();
        let DR = `${JM}-${M}-${A}`;
        if (valeur === 'd' && tel.value === '') {
            USERS[posCourant].transactions[0].push(trans)
            USERS[posCourant].transactions[1].push(DR)
            USERS[posCourant].transactions[2].push(1)
            USERS[posCourant].transactions[3].push(+xaliss)
            USERS[posCourant].SOLDE = USERS[posCourant].SOLDE + (+xaliss)
            solde.innerHTML = USERS[posCourant].SOLDE
            let ligne = PrintRow(trans, DR, 1, xaliss)
            tbody.appendChild(ligne);
        }
        if (valeur === 'r') {
            if (xaliss > USERS[posCourant].SOLDE) {
                notif('Votre solde est inferieur')
                // alert('Votre solde est inferieur')
            }
            else {
                USERS[posCourant].transactions[0].push(trans)
                USERS[posCourant].transactions[1].push(DR)
                USERS[posCourant].transactions[2].push(-1)
                USERS[posCourant].transactions[3].push(+xaliss)
                USERS[posCourant].SOLDE = USERS[posCourant].SOLDE - (+xaliss)
                solde.innerHTML = USERS[posCourant].SOLDE
                let ligne = PrintRow(trans, DR, -1, xaliss)
                tbody.appendChild(ligne);
            }
        }
        if (valeur === 'd' && tel.value !== '') {
            if (xaliss > USERS[posCourant].SOLDE) {
                notif('Votre solde est inferieur')
                // alert('Votre solde est inferieur')
                return;
            }
            if (rechercheNum(tel.value)) {
                let trfr = {
                    m: "",
                    pr: "",
                    numTrans:""
                }
                a = rechercheNumId(tel.value)
                if (a == posCourant) {
                    notif(`impossible d'envoyer soi-meme`)
                    // alert(`impossible d'envoyer soi-meme`)
                }
                else {
                    trfr.m = (+xaliss)
                    trfr.pr = a
                    trfr.numTrans = trans
                    posAnnule = posCourant;
                    //actualiser l'envoyeur
                    USERS[posCourant].transactions[0].push(trans)
                    USERS[posCourant].transactions[1].push(DR)
                    USERS[posCourant].transactions[2].push(-1)
                    USERS[posCourant].transactions[3].push(+xaliss)
                    USERS[posCourant].SOLDE = USERS[posCourant].SOLDE - (+xaliss)
                    solde.innerHTML = USERS[posCourant].SOLDE
                    let ligne = PrintRow(trans, DR, -1, xaliss)
                    tbody.appendChild(ligne);
                    USERS[posCourant].tranfert.push(trfr)
                    // console.log(posCourant);
                    // console.log(USERS[posCourant].tranfert);
                    //actualiser le receveur

                    USERS[a].transactions[0].push(trans)
                    USERS[a].transactions[1].push(DR)
                    USERS[a].transactions[2].push(1)
                    USERS[a].transactions[3].push(+xaliss)
                    USERS[a].SOLDE = Solde(a)
                    console.log(trfr);
                    // console.log(USERS[a].tranfert);
                    // r=Solde(a);
                    document.querySelector('.beut').addEventListener('click', () => {
                        posCourant = a;
                        printUser(USERS[a])
                    })
                }
            }
            else {
                USERS[posCourant].SOLDE = USERS[posCourant].SOLDE - (+xaliss)
                solde.innerHTML = USERS[posCourant].SOLDE
                let trz = document.createElement('tr')
                let td1 = document.createElement('td')
                let td2 = document.createElement('td')
                let td3 = document.createElement('td')
                let td4 = document.createElement('td')
                td1.innerHTML = trans
                td2.innerHTML = DR
                td3.innerHTML = 'retrait'
                td4.innerHTML = xaliss
                trz.append(td1)
                trz.append(td2)
                trz.append(td3)
                trz.append(td4)
                tbody.appendChild(trz);
                setTimeout(() => {
                    USERS[posCourant].SOLDE = USERS[posCourant].SOLDE + (+xaliss)
                    solde.innerHTML = USERS[posCourant].SOLDE
                    td1.innerHTML = `<strike>${td1.textContent}</strike>`
                    td2.innerHTML = `<strike>${td2.textContent}</strike>`
                    td3.innerHTML = `<strike>${td3.textContent}</strike>`
                    td4.innerHTML = `<strike>${td4.textContent}</strike>`
                    notif(`ce numéro n'existe pas`)
                }, 3000);
            }
        }
    }

    let code = document.getElementsByTagName('code');
    code[0].innerHTML = USERS[posCourant].transactions[0].length
})


ajoutUser.addEventListener('click', () => {
    modal.style.display = 'flex'
})

cancel.addEventListener('click', () => {
    modal.style.display = 'none'
})

add.addEventListener('click', () => {
    let diogs = {
        id: '',
        nom: '',
        prenom: '',
        telephone: '',
        email: '',
        src: '',
        transactions: [[], [], [], []],
        tranfert:[]
    };
    let addNom = document.querySelector('#nn');
    let addPrenom = document.querySelector('#pn');
    let addTel = document.querySelector('#tt');
    let addEmail = document.querySelector('#em');
    let addToof = document.querySelector('#i');
    let aaa = addNom.value
    let b = addPrenom.value
    let c = addTel.value
    let d = addEmail.value
    let e = addToof.value
    if (aaa !== '' && b !== '' && c !== '' && d !== '') {
        if (rechercheNum(c)) {
            notif(`Ce numéro existe déja`)
        }
        else {
            diogs.id = USERS.length
            diogs.nom = aaa
            diogs.prenom = b
            diogs.telephone = c
            diogs.email = d
            diogs.src = e;
            USERS.push(diogs);
            modal.style.display = 'none'
            tailleTab = tailleTab + 1;
        }
    }
    else {
        notif('Cochez tous les cases')
        // alert('Cochez tous les cases');
    }
})


document.querySelector('.mofifier').addEventListener('click',()=>{
    document.querySelector('.MODIFIER').style.display='flex';
    modifier(posCourant);
})
document.querySelector('.btn11').addEventListener('click',()=>{
    document.querySelector('.MODIFIER').style.display='none';
})
document.querySelector('.btn22').addEventListener('click',()=>{
    if (imgModif.value==''|| nomModf.value=='' || telModif.value=='' || emailModif.value =='' || prenomModif.value=='') {
        notif('Remplir tous les cases')
    }
    else {
        USERS[posCourant].nom=nomModf.value
        USERS[posCourant].prenom=prenomModif.value
        USERS[posCourant].src=imgModif.value
        USERS[posCourant].telephone=telModif.value
        USERS[posCourant].email=emailModif.value
        document.querySelector('.MODIFIER').style.display='none';
        printUser(USERS[posCourant])
    }
})

document.querySelector('.supprimer').addEventListener('click',()=>{
    USERS.splice(posCourant,1)
    posCourant = randomPos(tailleTab);
    posCourant = Math.floor(Math.random() * USERS.length)
   printUser(USERS[posCourant]);
})

/*________________________________________________________________________________________________________________________________*/
//Les fonctions


function printUser(user) {
    // console.log(posCourant);
    let nom = document.querySelector('#lastname');
    let prenom = document.querySelector('#firstname');
    let phone = document.querySelector('#phone');
    let Email = document.querySelector('#email');
    let code = document.getElementsByTagName('code');
    // const img=document.querySelector('img');
    // let image=document.getElementsByTagName('img');
    const photoEl = document.querySelector('.photo');
    const tbody = document.querySelector('tbody');
    let photo = new Image();
    photo.src = user.src;
    // image[0].src='https://cdn.slidevision.io/www/14304000000085015_loader.gif'
    photoEl.innerHTML = photo.outerHTML;
    //charger les spinners
    //https://cdn.slidevision.io/www/14304000000085015_loader.gif
    photo.onload = () => {
        // desactiver le spinner
        //afficher les informations du user
        nom.innerHTML = user.nom
        prenom.innerHTML = user.prenom
        phone.innerHTML = user.telephone
        Email.innerHTML = user.email
        code[0].innerHTML = user.transactions[0].length
        // Solde(posCourant)
        user.SOLDE = Solde(posCourant)
        solde.innerHTML = user.SOLDE;
        // afficher les transactions
        tbody.innerHTML = "";
        for (let i = 0; i < user.transactions[0].length; i++) {
            tbody.innerHTML += ` <tr>
            <td>${user.transactions[0][i]}</td>
            <td>${user.transactions[1][i]}</td>
            <td>${user.transactions[2][i] == '1' ? 'depot' : 'retrait'}</td>
            <td>${user.transactions[3][i]}</td>
        </tr>`
        }

    }
}

function randomPos(max) {
    return Math.floor(Math.random() * max);
}

function annuleTransfert(posAnnule) {
    // console.log(posAnnule);
    let yy = USERS[posAnnule].tranfert.length
    // console.log(Solde(USERS[posAnnule].tranfert[yy-1].pr));
    if (yy == 0) {
        notif(`Désolé vous avez pas fait de transfert`);
    }
    else {
        if ((Solde(USERS[posAnnule].tranfert[yy - 1].pr)) < (USERS[posAnnule].tranfert[yy - 1].m)) {
            notif(`Vous ne pouvez pas annuler car l'argent a été déjà retiré`)
        }
        else {
            notif(`Annulation validé`);
            let r = USERS[posAnnule].tranfert[yy - 1].pr
            // console.log(r);
            trans++;
            let dater = new Date();
            let JM = dater.getDate();
            if (JM < 10) {
                JM = '0' + JM
            }
            let M = dater.getMonth();
            M = M + 1;
            if (M < 10) {
                M = '0' + M
            }
            let A = dater.getFullYear();
            let DR = `${JM}-${M}-${A}`;
            USERS[posCourant].transactions[0].push(trans)
            USERS[posCourant].transactions[1].push(DR)
            USERS[posCourant].transactions[2].push(1)
            USERS[posCourant].transactions[3].push(+(USERS[posAnnule].tranfert[yy - 1].m))
            USERS[posCourant].SOLDE = USERS[posCourant].SOLDE + (+(USERS[posAnnule].tranfert[yy - 1].m))
            printUser(USERS[posCourant]);
            USERS[r].transactions[0].push(trans)
            USERS[r].transactions[1].push(DR)
            USERS[r].transactions[2].push(-1)
            USERS[r].transactions[3].push(+(USERS[posAnnule].tranfert[yy - 1].m))
            USERS[r].SOLDE = USERS[r].SOLDE - (+(USERS[posAnnule].tranfert[yy - 1].m))
            // console.log(USERS[posCourant].transactions);
            // console.log(USERS[r].transactions);
        }
        USERS[posCourant].tranfert.pop()
        // console.log(USERS[posCourant].tranfert);
    }
}

function Solde(IDEN) {
    let solde = 0;
    for (let index = 0; index < USERS[IDEN].transactions[2].length; index++) {
        if ((USERS[IDEN].transactions[2][index]) === -1) {
            solde = (solde) + ((-1) * (+USERS[IDEN].transactions[3][index]))
        }
        if ((USERS[IDEN].transactions[2][index]) === 1) {
            solde = (solde) + (+USERS[IDEN].transactions[3][index])
        }
    }
    return solde;
}


function rechercheNum(num) {
    for (let index = 0; index < USERS.length; index++) {
        if (USERS[index].telephone === num) {
            return true;
        }
    }
    return false;
}



function rechercheNumId(num) {
    for (let index = 0; index < USERS.length; index++) {
        if (USERS[index].telephone === num) {
            return index;
        }
    }
}


function PrintRow(a, b, c, d) {
    let tr1 = document.createElement('tr');
    let TD1 = document.createElement('td');
    let TD2 = document.createElement('td');
    let TD3 = document.createElement('td');
    let TD4 = document.createElement('td');
    TD1.innerHTML = a;
    TD2.innerHTML = b;
    TD3.innerHTML = c == '1' ? 'depot' : 'retrait';
    TD4.innerHTML = d;
    tr1.append(TD1)
    tr1.append(TD2)
    tr1.append(TD3)
    tr1.append(TD4)
    return tr1;
}

function notif(phrase) {
    let div = document.createElement('div');
    div.innerText = phrase
    div.style.backgroundColor = 'red'
    div.style.position = 'absolute'
    div.style.top = '0'
    div.style.left = '0'
    div.style.fontSize = '2em'
    div.style.borderRadius = '5px'
    div.style.color = 'white'
    let body = document.getElementsByTagName('body')
    body[0].appendChild(div)
    setTimeout(() => {
        div.style.display = 'none';
    }, 2000);
}


function modifier(posModif) {
    nomModf.value=USERS[posModif].nom
    prenomModif.value=USERS[posModif].prenom
    emailModif.value=USERS[posModif].email
    telModif.value=USERS[posModif].telephone
    imgModif.value=USERS[posModif].src
}