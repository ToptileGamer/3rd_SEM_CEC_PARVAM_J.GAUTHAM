// Utility to add input fields with remove button
function addField(containerId, inputName) {
    const container = document.getElementById(containerId);
    const div = document.createElement('div');
    div.classList.add('field-row');
    div.innerHTML = `
        <input type="text" name="${inputName}" required>
        <button type="button" class="remove-btn" onclick="this.parentNode.remove()">×</button>
    `;
    container.appendChild(div);
}

// Initialization for dynamic fields
document.addEventListener('DOMContentLoaded', () => {
    addField('educationContainer', 'education');
    addField('experienceContainer', 'experience');
    addField('skillsContainer', 'skills');

    document.getElementById('addEducation').onclick = () => addField('educationContainer', 'education');
    document.getElementById('addExperience').onclick = () => addField('experienceContainer', 'experience');
    document.getElementById('addSkills').onclick = () => addField('skillsContainer', 'skills');
});

// Form submission: gather all topic fields as arrays and save to session
document.getElementById('resumeForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(this);
    // Get multiple values for each field
    const getValues = (name) => {
        return Array.from(document.querySelectorAll(`input[name='${name}']`)).map(input => input.value);
    };
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        education: getValues('education'),
        experience: getValues('experience'),
        skills: getValues('skills')
    };

    // Profile image logic
    const fileInput = document.getElementById('profileImage');
    const file = fileInput.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onloadend = function () {
            data.image = reader.result; // base64 string
            sessionStorage.setItem('resumeData', JSON.stringify(data));
            window.location.href = 'resume.html';
        };
        reader.readAsDataURL(file); // converts to base64
    } else {
        data.image = null;
        sessionStorage.setItem('resumeData', JSON.stringify(data));
        window.location.href = 'resume.html';
    }
});
