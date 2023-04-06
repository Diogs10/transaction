let input_recherche = document.querySelector('.Rechercher');
let tableau_client = document.querySelector('table');
let tableau_body = tableau_client.querySelector('tbody');
let donnees_client = [    
    {nom:'Doucoure',prenom:'Mohamed',email:'mouhamed12@gmail.com',phone:'785444510',transaction:[[1,2,3,4], ['10-01-2023','01-02-2023','01-10-2023','12-16-2023'], [-1,1,1,-1], [12000,12000,12500,1300]],src:'https://images.unsplash.com/photo-1551966775-a4ddc8df052b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',solde:1000},
    {nom:'Ndiaye',prenom:'Diogal',email:'diogalSA12@gmail.com',phone:'781943098',transaction:[[1,2], ['10-01-2023','01-02-2023'], [-1,1], [12000,12000]],src:'https://images.unsplash.com/photo-1603439311572-2d9ac9bb69b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2250&q=80',solde:500},
];

input_recherche.addEventListener('keyup', function(e) {
    if (e.target.value.length >= 3) {
        tableau_body.innerHTML = '';
        let recherche = e.target.value.toLowerCase();
        donnees_client.forEach(function(client) {
            if (client.nom.toLowerCase().includes(recherche) || client.prenom.toLowerCase().includes(recherche) || client.phone.includes(recherche)) {
                let row = tableau_body.insertRow();
                row.insertCell(0).innerHTML = client.nom;
                row.insertCell(1).innerHTML = client.prenom;
                row.insertCell(2).innerHTML = client.phone;
            }
        });
    }
    else {
        tableau_body.innerHTML = '';
    }
});