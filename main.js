function whatsAppFunc() {
  const phoneNumber = document.getElementById("inpNum").value;
  const message = "Welcome To Our Kayan Comunity";
  const whatsappURL = `https://wa.me/2${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;
  if (/^\d+$/.test(phoneNumber)) {
    swal("7oloom", "Thank you,The message was send", "success");
    window.open(whatsappURL, "_blank").focus();
  } else {
    swal("Erorr!", "sorry erorr in your number", "error");
  }
}
