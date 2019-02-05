const formNode = document.getElementById('form-example');
const nameNode = document.getElementById('name');
const zipCodeNode = document.getElementById('zip-code');
const peanutRangeNode = document.getElementById('peanuts');
const allergicNumberNode = document.getElementById('allergic-number');
const yesNode = document.getElementById('yes');
const noNode = document.getElementById('no');
const peanutNodeTwo = document.getElementById('peanuts-2');
const roleNode = document.getElementById('role');

peanutRangeNode.addEventListener('change', function() {
    allergicNumberNode.textContent = peanutRangeNode.value;
});

yesNode.addEventListener('change', function() {
    if(yesNode.checked) {
        allergicNumberNode.textContent = 1; // default to 1
        peanutRangeNode.min = 1;
        peanutRangeNode.value = 1; // default to value 1
        peanutRangeNode.disabled = false;
        peanutNodeTwo.required = yesNode.checked;
    }
});

noNode.addEventListener('change', function() {
    if(noNode.checked) {
        allergicNumberNode.textContent = 0;
        peanutRangeNode.min = 0;
        peanutRangeNode.value = 0;
        peanutRangeNode.disabled = true;
        peanutNodeTwo.required = !noNode.checked;
    }
});

formNode.addEventListener('submit', function(event) {
    event.preventDefault();

    const applicant = {
        name: nameNode.value,
        zipCode: zipCodeNode.value,
        allergyScale: peanutRangeNode.value,
        allergyScaleTwo: peanutNodeTwo.value,
        role: roleNode.value
    };

    console.log(applicant);
});