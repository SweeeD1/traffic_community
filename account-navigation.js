document.addEventListener("DOMContentLoaded", function() {
  var lastClickedButton = localStorage.getItem("lastClickedButton");

  switch (lastClickedButton) {
    case "links":
      openLinks();
      break;
    case "channels":
      openChannels();
      break;
    case "settings":
      openSettings();
      break;
    case "support":
      openSupport();
      break;
    default:
      openDashboard();
  }
});

function openDashboard() {
  var dashboardContainer = document.getElementById("dashboardContainer");
  var linksContainer = document.getElementById("linksContainer");
  var channelsContainer = document.getElementById("channelsContainer");
  var settingsContainer = document.getElementById("settingsContainer");
  var supportContainer = document.getElementById("supportContainer");
  var buttons = document.querySelectorAll('.personal_account-nav__button');

  dashboardContainer.style.display = "flex";
  linksContainer.style.display = "none";
  channelsContainer.style.display = "none";
  settingsContainer.style.display = "none";
  supportContainer.style.display = "none";

  // Выделяем активную кнопку и сохраняем её состояние
  setActiveButton(buttons, "openDashboard");
  localStorage.setItem("lastClickedButton", "dashboard");
}

function openLinks() {
  var dashboardContainer = document.getElementById("dashboardContainer");
  var linksContainer = document.getElementById("linksContainer");
  var channelsContainer = document.getElementById("channelsContainer");
  var settingsContainer = document.getElementById("settingsContainer");
  var supportContainer = document.getElementById("supportContainer");
  var buttons = document.querySelectorAll('.personal_account-nav__button');

  dashboardContainer.style.display = "none";
  linksContainer.style.display = "flex";
  channelsContainer.style.display = "none";
  settingsContainer.style.display = "none";
  supportContainer.style.display = "none";

  // Выделяем активную кнопку и сохраняем её состояние
  setActiveButton(buttons, "openLinks");
  localStorage.setItem("lastClickedButton", "links");
}

function openChannels() {
  var dashboardContainer = document.getElementById("dashboardContainer");
  var linksContainer = document.getElementById("linksContainer");
  var channelsContainer = document.getElementById("channelsContainer");
  var settingsContainer = document.getElementById("settingsContainer");
  var supportContainer = document.getElementById("supportContainer");
  var buttons = document.querySelectorAll('.personal_account-nav__button');

  dashboardContainer.style.display = "none";
  linksContainer.style.display = "none";
  channelsContainer.style.display = "flex";
  settingsContainer.style.display = "none";
  supportContainer.style.display = "none";

  // Выделяем активную кнопку и сохраняем её состояние
  setActiveButton(buttons, "openChannels");
  localStorage.setItem("lastClickedButton", "channels");
}

function openSettings() {
  var dashboardContainer = document.getElementById("dashboardContainer");
  var linksContainer = document.getElementById("linksContainer");
  var channelsContainer = document.getElementById("channelsContainer");
  var settingsContainer = document.getElementById("settingsContainer");
  var supportContainer = document.getElementById("supportContainer");
  var buttons = document.querySelectorAll('.personal_account-nav__button');

  dashboardContainer.style.display = "none";
  linksContainer.style.display = "none";
  channelsContainer.style.display = "none";
  settingsContainer.style.display = "flex";
  supportContainer.style.display = "none";

  // Выделяем активную кнопку и сохраняем её состояние
  setActiveButton(buttons, "openSettings");
  localStorage.setItem("lastClickedButton", "settings");
}

function setActiveButton(buttons, action) {
  buttons.forEach(function(button) {
    button.classList.remove("active");
    if (button.getAttribute("data-action") === action) {
      button.classList.add("active");
    }
  });
}

function openSupport() {
  var dashboardContainer = document.getElementById("dashboardContainer");
  var linksContainer = document.getElementById("linksContainer");
  var channelsContainer = document.getElementById("channelsContainer");
  var settingsContainer = document.getElementById("settingsContainer");
  var supportContainer = document.getElementById("supportContainer");
  var buttons = document.querySelectorAll('.personal_account-nav__button');

  dashboardContainer.style.display = "none";
  linksContainer.style.display = "none";
  channelsContainer.style.display = "none";
  settingsContainer.style.display = "none";
  supportContainer.style.display = "flex";

  // Выделяем активную кнопку и сохраняем её состояние
  setActiveButton(buttons, "openSupport");
  localStorage.setItem("lastClickedButton", "support");
}

function setActiveButton(buttons, action) {
  buttons.forEach(function(button) {
    button.classList.remove("active");
    if (button.getAttribute("data-action") === action) {
      button.classList.add("active");
    }
  });
}
