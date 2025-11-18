
// const card = document.querySelector('.card');
// const arr = [

// ]
// function addWorker() {
//     const form = document.querySelector('form');
//     form.style.display = 'block';
//     form.addEventListener('submit', (e) => {
//         e.preventDefault;
//         const fname = document.getElementById('fname').value.trim();
//         const lname = document.getElementById('lname').value.trim();
//         const role = document.getElementById('fname').value.trim();
//         const c = {
//             first_name: fname,
//             last_name: lname,
//             rolee: role,
//         }
//         arr.push(c);
//         arr.map((e) => {
//         const div= document.createElement('div');
//         div.innerHTML = `                    
//         <img src="images/background.jpg" alt="">
//         <h2>${e.first_name} ${e.last_name}</h2>
//         <p>${e.rolee}</p>
//         <button class="edit-button" onclick="affichage()">Afficher</button>
//         `
//         card.append(div);
//         console.log(fname);
//         })
// })
// }
// function affichage() {
//             document.querySelector('.modal').style.display = 'block';
// }

// // function renderArr(){

// //     arr.forEach((e) => {
// //         e.innerHTML = `                    
// //         <h2>${fname} ${lname.value}</h2>
// //         <p>${role.value}</p>
// //         `
// //         card.append(e);
// //     })
// // }

function hideModal(){
    document.querySelector('.overlay').style.display = 'none';
}
function addWorkers(){
    document.querySelector('.overlay').style.display = 'flex';
}

function assignWorkers(){
    document.querySelector('.assign-overlay').style.display = 'flex';
}
function hideAssignModal(){
    document.querySelector('.assign-overlay').style.display = 'none';
}