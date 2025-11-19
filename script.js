
const workers = []
const regex = {
    r_name: /^[a-zA-Z]+ [a-zA-Z]+$/,
    r_url: /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/,
    r_email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    r_phone: /^(?:\+212|0)[5-7]\d{8}$/,
    r_company: /^[A-Za-z0-9 .,&'-]{2,100}$/,
    r_role: /^[A-Za-z][A-Za-z .'-]{1,49}$/,
}


function hideModal() {
    document.querySelector('.overlay').style.display = 'none';
}
function addWorkers() {
    document.querySelector('.overlay').style.display = 'flex';
    document.getElementById('workerForm').addEventListener('submit', handleFormSubmit);
}

function handleFormSubmit(e) {
    e.preventDefault();
    const name = document.getElementById('workerName').value.trim();
    const role = document.getElementById('workerRole').value;
    const url = document.getElementById('workerPhoto').value.trim();
    const email = document.getElementById('workerEmail').value.trim();
    const phone = document.getElementById('workerPhone').value.trim();

    const company = document.querySelector('.company').value.trim();
    const exp_role = document.querySelector('.role').value.trim();

    const from = document.querySelector('.from').value;
    const to = document.querySelector('.to').value;
    if (!regex.r_name.test(name)) {
        alert("Please enter a valid name");
        return;
    }
    if (!role) {
        alert("Please select a role");
        return;
    }
    if (!regex.r_url.test(url)) {
        alert("Please enter a valid url");
        return;
    }
    if (!regex.r_email.test(email)) {
        alert("Please enter a valid email");
        return;
    }
    if (!regex.r_phone.test(phone)) {
        alert("Please enter a valid phone number");
        return;
    }
    if (!regex.r_company.test(company)) {
        alert("Please enter a valid company name");
        return;
    }
    if (!regex.r_role.test(exp_role)) {
        alert("Please enter a valid role");
        return;
    }
    if (new Date(from) > new Date(Date.now()) || new Date(to) > new Date(Date.now())) {
        alert("Please enter a valid date");
        return;
    }
    if (new Date(from) > new Date(to)) {
        alert("Please select a valid date range");
        return;
    }

    const expItems = document.querySelectorAll('.experience-item');
    const experiences = [];
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

function assignWorkers() {
    document.querySelector('.assign-overlay').style.display = 'flex';
}
function hideAssignModal() {
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
            <button onclick="editWorkerInfos()" class="edit-button">Edit</button>
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
        photoPreview.innerHTML = `<img src="${url}" alt="">`
    } else {
        photoPreview.innerHTML = `<img src="images/img_placeholder.png" alt="">`;
    }
}

function editWorkerInfos() {

}
const div = document.createElement('div')

function addExperience() {
    const exp_section = document.querySelector('.experiences-section')
    
    div.innerHTML += `
        <div class="experience-item">
            <div class="form-group">
                <label>Company:</label>
                <input class="company" type="text" placeholder="Enter company">
            </div>

            <div class="form-group">
                <label>Role:</label>
                <input class="role" type="text" placeholder="Enter role">
            </div>

            <div class="date-group">
                <div class="form-group">
                    <label>From:</label>
                    <input class="from" type="date">
                </div>
                <div class="form-group">
                    <label>To:</label>
                    <input class="to" type="date">
                </div>
            </div>
            <button onclick="removeExperience(this)" type="button" class="btn-remove">Remove</button>
        </div>`

    exp_section.appendChild(div)
}

function removeExperience(e) {
    const parent = e.parentElement
    parent.innerHTML = ``;
}