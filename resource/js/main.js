let whatsappButton = document.querySelector('#whatsappButton');
whatsappButton.addEventListener("click", function () {
  let phoneNumber = "+51915349452";
  let whatsappLink = "https://wa.me/" + phoneNumber;
  window.open(whatsappLink, "_blank");
});