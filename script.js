const messages = [
    "Itna chubne laga hu sabko, kahi chura to nahi hu?",
    "Tum jitna batate ho mere bare me, itna bura to nahi hu 😔",
    "Are you sure?",
    "Ok fine, I will stop asking 😖",
    "Hah bitch you thought, say yes or I will tell you horror stories every night"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 2.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
