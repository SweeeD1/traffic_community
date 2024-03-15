function copyText() {
  var textToCopy = "https://t.me/+o_zLtHJ5_zxlYTc6";
  var tempInput = document.createElement("input");
  tempInput.value = textToCopy;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
  alert("Ссылка скопирована в буфер обмена: " + textToCopy);
}

const containerList = document.querySelector('.channels__container-list');
const containers = containerList.querySelectorAll('.channels__container-list__container');

for (let i = 0; i < containers.length; i += 2) {
  containers[i].classList.add('black-bg');
}