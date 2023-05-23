let whatsappButton = document.querySelector('#whatsappButton');
whatsappButton.addEventListener("click", function () {
  let phoneNumber = "+51915349452";
  let message = "Estoy interesado en el siguiente producto";
  let whatsappLink = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);;
  window.open(whatsappLink, "_blank");
});