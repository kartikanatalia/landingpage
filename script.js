document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const pesan = document.getElementById('pesan').value;
        if (name.trim() === '' || email.trim() === '' || pesan.trim() === '') {
            alert('Lengkapi semua form!');
        } else {
            alert('pesan berhasil terkirim!\nname: ' + name + '\nemail: ' + email + '\npesan: '+ pesan);
            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('pesan').value = '';}
    });
});

function openModal(imageSrc) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("modalImg");

    modalImg.src = imageSrc;
    modalImg.onload = function() {
        var imageWidth = this.naturalWidth;
        var imageHeight = this.naturalHeight;
        modalImg.style.maxWidth = imageWidth + "px";
        modalImg.style.maxHeight = imageHeight + "px";
        modal.style.display = "block";
    };
}

var span = document.getElementsByClassName("close")[0];
span.onclick = function () {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

window.onclick = function (event) {
    var modal = document.getElementById("myModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}