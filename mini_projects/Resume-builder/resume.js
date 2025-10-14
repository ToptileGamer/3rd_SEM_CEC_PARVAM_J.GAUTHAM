window.addEventListener('DOMContentLoaded', () => {
    const data = JSON.parse(sessionStorage.getItem('resumeData'));
    const display = document.getElementById('resumeDisplay');
    if (!data) {
        display.innerHTML = '<p>No resume data found.</p>';
        return;
    }

    let html = '';
    // Profile Image
    if (data.image) {
        html += `<img src="${data.image}" alt="Profile Photo" class="profile-img">`;
    }
    // Name, Email, Phone
    html += `
        <div class="top-info">
            <h2 style="text-align:center; margin:0;">${data.name}</h2>
            <p style="text-align:center; margin:0;">${data.email} | ${data.phone}</p>
        </div>
        <div>
            <div class="section-title">🎓 Education</div>
            <ul>${data.education.map(e => `<li>${e}</li>`).join('')}</ul>
        </div>
        <div>
            <div class="section-title">💼 Experience</div>
            <ul>${data.experience.map(e => `<li>${e}</li>`).join('')}</ul>
        </div>
        <div>
            <div class="section-title">🛠 Skills</div>
            <ul>${data.skills.map(s => `<li>${s}</li>`).join('')}</ul>
        </div>
    `;
    display.innerHTML = html;
});
