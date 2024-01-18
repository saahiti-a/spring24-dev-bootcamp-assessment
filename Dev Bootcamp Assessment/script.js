function editBio() {
    ['name', 'major', 'year', 'passion', 'location'].forEach(function(id) {
        var element = document.getElementById(id);
        var text = element.innerText.split(': ')[1]; 
        element.innerHTML = '<input type="text" id="edit-' + id + '" value="' + text + '">';
    });

    document.getElementById('editBtn').style.display = 'none';
    document.getElementById('saveBtn').style.display = 'block';
}

function saveBio() {
    ['name', 'major', 'year', 'passion', 'location'].forEach(function(id) {
        var inputElement = document.getElementById('edit-' + id);
        if (inputElement && inputElement.value.trim() !== '') {
            var originalText = id.charAt(0).toUpperCase() + id.slice(1); 
            document.getElementById(id).innerHTML = originalText + ': ' + inputElement.value;
        } else {
            alert(id.charAt(0).toUpperCase() + id.slice(1) + ' cannot be empty.');
            return;
        }
    });

    document.getElementById('editBtn').style.display = 'block';
    document.getElementById('saveBtn').style.display = 'none';
}

function toggleEdit() {
    var editBtn = document.getElementById('editBtn');
    if (editBtn.textContent === 'Edit Bio') {
        editBio();
        editBtn.textContent = 'Cancel';
    } else {
        revertToOriginalText();
        editBtn.textContent = 'Edit Bio';
    }
}

function revertToOriginalText() {

}
document.getElementById('saveBtn').style.display = 'none';
