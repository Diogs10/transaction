//Les données
USERS = [
    {   
        id: 1,
        nom: 'BA', 
        prenom: 'Kadiata', 
        telephone: '708431122', 
        email: 'kadia@exemple.com', 
        src: 'https://images.unsplash.com/photo-1673865641132-d4302e15f8d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGltYWdlJTIwZmlsbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60', 
        transactions: [
            {
                numTrans:1,
                date:'10-01-2023 à 12h00min',
                sens:1,
                montant:12000,
                numDestination:'',
            },
            {
                numTrans:2,
                date:'27-02-2023 à 15h59min',
                sens:-1,
                montant:12000,
                numDestination:'',
            },
            {
                numTrans:3,
                date:'01-02-2023 à 21h20min',
                sens:-1,
                montant:12000,
                numDestination:'',
            },
            {
                numTrans:4,
                date:'09-03-2023 à 19h43min',
                sens:1,
                montant:120000,
                numDestination:'',
            }
        ], 
        ssolde: 108000
    },
    { 
        id: 2, 
        nom: 'DIOP', 
        prenom: 'Oumar', 
        telephone: '771983463', 
        email: 'oumar@exemple.com', 
        src: 'https://images.unsplash.com/photo-1618937995753-94fe3bd8375c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGltYWdlJTIwZ2FyJUMzJUE3b24qfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60', 
        transactions: [
            {
                numTrans:5,
                date:'10-01-2023 à 11h23min',
                sens:-1,
                montant:12000,
                numDestination:'',
            },
            {
                numTrans:6,
                date:'01-02-2023 à 01h03min',
                sens:1,
                montant:52000,
                numDestination:'',
            }
        ], 
        ssolde: 40000,
    },
    { 
        id: 3, 
        nom: 'SALL', 
        prenom: 'Fatou', 
        telephone: '778763422', 
        email: 'fatou@exemple.com', 
        src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGltYWdlJTIwZmlsbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60', 
        transactions: [], 
        ssolde: 0, 
    },
    { 
        id: 4, 
        nom: 'NIANG', 
        prenom: 'Sidi', 
        telephone: '708434422', 
        email: 'sidi@exemple.com', 
        src: 'https://images.unsplash.com/photo-1615531068122-80040baba3bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGltYWdlJTIwZ2FyJUMzJUE3b24qfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60', 
        transactions: [],
        ssolde: 0, 
    },
]
/*________________________________________________________________________________________________________________________________*/
let suivant = document.querySelector('.next')
let form = document.querySelector('.form')
let ajout = document.querySelector('#btnDetail')
let RCHE = document.querySelector('#RCHE');
let modal = document.querySelector('.modal');
let ajoutUser = document.querySelector('.plus');
let cancel = document.querySelector('.btn1');
let add = document.querySelector('.btn2');
let addNom = document.querySelector('#nn');
let addPrenom = document.querySelector('#pn');
let addTel = document.querySelector('#tt');
let addEmail = document.querySelector('#em');
let addToof = document.querySelector('#i');
let nomModf = document.querySelector('#nnn')
let prenomModif = document.querySelector('#pnn')
let emailModif = document.querySelector('#emn')
let telModif = document.querySelector('#TELn')
let imgModif = document.querySelector('#imgn')
let enregistre = document.querySelector('.btnEnregistrer');
let selection = document.querySelector('#trans');
let tel=document.querySelector('#tel')
let position;
let tailleTab = USERS.length;
let valeur='';
let t=6;
let p=0;




/*________________________________________________________________________________________________________________________________*/
//Les évenements
suivant.addEventListener('click',()=>{
    position=randomPos(tailleTab)
    UserPrint(position)
})


//Le bouton plus de transaction
ajout.addEventListener('click', () => {
    if (getComputedStyle(form).display == 'block') {
        form.style.display = 'none';
    }
    else {
        form.style.display = 'block';
    }
})

//Rechercher un utilisateur par son nom ou prenom ou telephone


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
                position = rechercheNumId(yy[1]);
                UserPrint(position)
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


//Ajout utilisateur
ajoutUser.addEventListener('click', () => {
    modal.style.display = 'flex'
    checkRequired([addNom,addPrenom,addTel,addEmail,addToof])
})

cancel.addEventListener('click', () => {
    modal.style.display = 'none'
})

add.addEventListener('click',() => {
    if (emptyField([addNom,addPrenom,addTel,addEmail,addToof]) !=0) {
        alert('Remplissez tous les champs')
    }
    else{
        console.log(rechercheNum(addTel.value));
        if (rechercheNum(addTel.value)) {
            alert(`Ce num n'existe déjà`)
        }
        else {
            let addUser={
                nom:'',
                prenom:'',
                telephone:'',
                email:'',
                src:'',
                transactions:[],
                ssolde: 0,
            }
            addUser.nom=addNom.value
            addUser.prenom=addPrenom.value
            addUser.telephone=addTel.value
            addUser.email=addEmail.value
            addUser.src=addToof.value
            USERS.push(addUser)
            UserPrint((USERS.length)-1)
            modal.style.display = 'none'
            tailleTab++;
        }
    }
})


//Modifier utilisateur
document.querySelector('.mofifier').addEventListener('click',()=>{
    document.querySelector('.MODIFIER').style.display='flex';
    modifier(position);
    checkRequired([imgModif,nomModf,telModif,emailModif,prenomModif])
})


document.querySelector('.btn11').addEventListener('click',()=>{
    document.querySelector('.MODIFIER').style.display='none';
})


document.querySelector('.btn22').addEventListener('click',()=>{
    if (emptyField([imgModif,nomModf,telModif,emailModif,prenomModif]) !=0) {
        alert('Remplissez tous les champs')
    }
    else {
        USERS[position].nom=nomModf.value
        USERS[position].prenom=prenomModif.value
        USERS[position].src=imgModif.value
        USERS[position].telephone=telModif.value
        USERS[position].email=emailModif.value
        document.querySelector('.MODIFIER').style.display='none';
        UserPrint(position)
    }
})


//Supprimer l'utilisateur
document.querySelector('.supprimer').addEventListener('click',()=>{
    USERS.splice(position,1)
    position = randomPos(tailleTab);
    UserPrint(position);
    tailleTab=tailleTab-1
})

//Les transactions
selection.addEventListener('change', () => {
    valeur = selection.value;
})
enregistre.addEventListener('click',()=>{
    let montant = document.querySelector('#mnt');
    if (montant.value < 500) {
        alert('Montant minimum 500')
    }
    else if (valeur == 's' || valeur=='') {
        alert('Choissisez un option')
    }
    else{
        t++;
        let DR=DATE();
        let tr={
            numTrans:'',
            date:'',
            sens:'',
            montant:'',
            numDestination:'',
        }
        if (selection.value=='d' && tel.value=='') {
            tr.numTrans=t
            tr.sens=1
            tr.montant=montant.value
            tr.date=DR;
            USERS[position].ssolde += (+montant.value)
            USERS[position].transactions.push(tr);
            UserPrint(position)
        }
        else  if (USERS[position].ssolde >= montant.value) {
            if (selection.value=='r') {
                tr.numTrans=t
                tr.sens=-1
                tr.montant=montant.value
                tr.date=DR;
                USERS[position].ssolde -= (montant.value)
                USERS[position].transactions.push(tr);
                UserPrint(position)
            }
            else {
                if (rechercheNum(tel.value)) {
                    let a=rechercheNumId(tel.value)
                    if (a==position) {
                        alert('Impossible envoyer soi-meme');
                    }
                    else {
                        tr.date=DR
                        tr.numDestination=tel.value
                        tr.numTrans=t
                        tr.montant=montant.value
                        tr.sens=1
                        USERS[position].ssolde -= (montant.value)
                        USERS[position].transactions.push(tr)
                        UserPrint(position)
                        let tt={
                            numTrans:'',
                            date:'',
                            sens:'',
                            montant:'',
                            numDestination:'',
                        }
                        tt.date=DR
                        tt.numTrans=t
                        tt.montant=montant.value
                        tt.sens=1
                        USERS[a].ssolde += (+montant.value)
                        USERS[a].transactions.push(tt)
                        document.querySelector('.beut').addEventListener('click',()=>{
                            position = a;
                            UserPrint(position)
                        });
                    }
                }
                else {
                    USERS[position].ssolde -= (+montant.value)
                    let solde=document.querySelector('#solde')
                    solde.innerHTML = USERS[position].ssolde
                    let tbody=document.querySelector('tbody')
                    tbody.append(PrintRow(t,DR,1,montant.value,tel.value))
                    setTimeout(() => {
                        tr.date=DR
                        tr.numTrans=t
                        tr.sens=0
                        tr.montant=montant.value
                        tr.numDestination=tel.value
                        USERS[position].ssolde += (+montant.value)
                        USERS[position].transactions.push(tr);
                        UserPrint(position)
                        alert(`Ce num n'existe pas`);
                    }, 3000);
                }
            } 
        }
        else {
            alert('Votre solde est inférieur')
        }
    }
})

//Suggestion de numéros 


tel.addEventListener('keyup', () => {
    let objet = tel.value;
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
                tel.value = yy[1]
            })
        });
    }
    if (objet.length < 3) {
        sug = '';
        document.querySelector('.suggestion').innerHTML = sug;
    }
})

/*________________________________________________________________________________________________________________________________*/
//Appel de fonctions
position=randomPos(tailleTab)
UserPrint(position)

/*________________________________________________________________________________________________________________________________*/
//Les fonctions
function randomPos(max) {
    return Math.floor(Math.random() * max);
}


//Affichage de l'utilisateur
function UserPrint(indice) {
    let nom = document.querySelector('#lastname');
    let prenom = document.querySelector('#firstname');
    let phone = document.querySelector('#phone');
    let Email = document.querySelector('#email');
    let solde=document.querySelector('#solde')
    let code = document.querySelector('code');
    const photoEl = document.querySelector('.photo');
    const tbody = document.querySelector('tbody');
    let photo = new Image();
    photo.src = USERS[indice].src;
    photoEl.innerHTML = photo.outerHTML;
    photo.onload = () => {
        nom.innerHTML=USERS[indice].nom
        prenom.innerHTML=USERS[indice].prenom
        phone.innerHTML=USERS[indice].telephone
        Email.innerHTML=USERS[indice].email
        code.innerHTML=USERS[indice].transactions.length
        solde.innerHTML=USERS[indice].ssolde
        tbody.innerHTML=""
        USERS[indice].transactions.forEach(trans => {
            if (trans.sens == 1 && trans.numDestination == '') {
                tbody.innerHTML +=`<tr>
                <td>${trans.numTrans}</td>
                <td>${trans.date}</td>
                <td class='c1'>depot</td>
                <td>${trans.montant}</td>
                <td>${trans.numDestination}</td>
            </tr>`
            }
            else if (trans.sens == 1 && trans.numDestination !== '') {
                tbody.innerHTML +=`<tr>
                <td>${trans.numTrans}</td>
                <td>${trans.date}</td>
                <td>Transfert</td>
                <td>${trans.montant}</td>
                <td>${trans.numDestination}<button class="CC">X</button></td>
            </tr>`
            }
            else if (trans.sens == -1) {
                tbody.innerHTML +=`<tr>
                <td>${trans.numTrans}</td>
                <td>${trans.date}</td>
                <td class='c2'>retrait</td>
                <td>${trans.montant}</td>
                <td>${trans.numDestination}</td>
            </tr>`  
            }
            else {
                tbody.innerHTML +=`<tr>
                <td><strike>${trans.numTrans}</strike></td>
                <td><strike>${trans.date}</strike></td>
                <td class='c3'><strike>Annuler</strike></td>
                <td><strike>${trans.montant}</strike></td>
                <td><strike>${trans.numDestination}</strike></td>
            </tr>`
            }
        });
        let c1=document.querySelectorAll('.c1')
        c1.forEach(element => {
            element.style.color='green'
        });
        let c2=document.querySelectorAll('.c2')
        c2.forEach(element => {
            element.style.color='red'
        });
        let c3=document.querySelectorAll('.c3');
        c3.forEach(element => {
            element.style.color='gray'
        });
        let trk=document.querySelectorAll('strike');
        trk.forEach(element => {
            element.style.color='red'
        });
        let CC=document.querySelectorAll('.CC');
        CC.forEach(element => {
            element.style.color='white'
            element.style.backgroundColor='red'
            element.addEventListener('click',()=>{
                
            })
        });
    }
}


//Rechercher un num dans la base
function rechercheNum(num) {
    for (let index = 0; index < tailleTab; index++) {
        if (USERS[index].telephone === num) {
            return true;
        }
    }
    return false;
}

//Recherche l'indice de l'utilisateur

function rechercheNumId(num) {
    for (let index = 0; index < tailleTab; index++) {
        if (USERS[index].telephone === num) {
            return index;
        }
    }
}

//Verification des inputs vide ou pas
function emptyField(inputs)
{
    let i=0;
    inputs.forEach(input=> {
        if (input.value =='') {
            i++;
        }
    });
    return i;
}

function checkRequired(inputs){
    inputs.forEach(input => {
        input.addEventListener('keyup',()=>{
            if(input.value == ''){
                input.style.border='2px solid red'; 
            }else{
                input.style.border='4px solid green';
            }
        })
    })
}

//Modification
function modifier(posModif) {
    nomModf.value=USERS[posModif].nom
    prenomModif.value=USERS[posModif].prenom
    emailModif.value=USERS[posModif].email
    telModif.value=USERS[posModif].telephone
    imgModif.value=USERS[posModif].src
}

//DATE
function DATE() {
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
    let h=dater.getHours()
    if (h < 10) {
        h = '0' + h
    }
    let mm=dater.getMinutes()
    if (mm < 10) {
        mm = '0' + mm
    }
    let DR = `${JM}-${M}-${A} à ${h}h${mm}min`;
    return DR;
}


//Affichage d'une ligne

function PrintRow(a, b, c, d, e) {
    let tr1 = document.createElement('tr');
    let TD1 = document.createElement('td');
    let TD2 = document.createElement('td');
    let TD3 = document.createElement('td');
    let TD4 = document.createElement('td');
    let TD5 = document.createElement('td');
    TD1.innerHTML = a;
    TD2.innerHTML = b;
    TD3.innerHTML = c == '1' ? 'depot' : 'retrait';
    TD4.innerHTML = d;
    TD5.innerHTML = e;
    tr1.append(TD1,TD2,TD3,TD4,TD5)
    return tr1;
}