
const workers = []

function hideModal(){
    document.querySelector('.overlay').style.display = 'none';
}
function addWorkers(){
    document.querySelector('.overlay').style.display = 'flex';
    document.getElementById('workerForm').addEventListener('submit', handleFormSubmit);
}

function handleFormSubmit(e){
    e.preventDefault();
    const name = document.getElementById('workerName').value.trim();
    const role = document.getElementById('workerRole').value;
    const url = document.getElementById('workerPhoto').value.trim();
    const email = document.getElementById('workerEmail').value.trim();
    const phone = document.getElementById('workerPhone').value.trim();

    const expItems = document.querySelectorAll('.experience-item');
    const experiences= [];
    expItems.forEach((i) => {
        const company = i.querySelector('.company').value.trim();
        const expRole = i.querySelector('.role').value.trim();
        const from = i.querySelector('.from').value;
        const to = i.querySelector('.to').value;
        const exp = {
            company,
            expRole,
            from,
            to,
        }
        experiences.push(exp);
    })
    
    const worker = {
        name,
        role,
        url,
        email,
        phone,
        experiences,
    };
    workers.push(worker);
    renderWorkers();
    hideModal();
}

function assignWorkers(){
    document.querySelector('.assign-overlay').style.display = 'flex';
}
function hideAssignModal(){
    document.querySelector('.assign-overlay').style.display = 'none';
}

function renderWorkers() {
    const staffMem = document.querySelector('.staff-mem');

    workers.forEach(worker => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${worker.url}" alt="${worker.name}">
            <div>
                <h2>${worker.name}</h2>
                <p>${worker.role}</p>
            </div>
            <button class="edit-button">Edit</button>
        `;
        staffMem.appendChild(card);
    });
    document.getElementById('workerForm').reset();
    handleFormSubmit();
}
function previewPhoto() {
    const url = document.getElementById('workerPhoto').value.trim();
    const photoPreview = document.querySelector('.photo-preview');
    
    
    if (url) {
        photoPreview.innerHTML =`<img src="${url}" alt="">`
    } else {
        photoPreview.innerHTML = '<span class="photo-placeholder">👤</span>';
    }
}