export function renderContact() {
  const contact = document.createElement("div");
  contact.classList.add("contact");

  const contactUs = document.createElement("div");
  contactUs.innerText = `Contact Us
We'd love to hear from you! Whether you have a question, need to make a reservation, or want to provide feedback, feel free to reach out to us.`;
  contact.appendChild(contactUs);

  const location = document.createElement("div");
  location.innerText = `Location
The Gourmet Garden
123 Culinary Avenue
Paris, Ile de France 
France`;
  contact.appendChild(location);

  const email = document.createElement("div");
  email.innerText = `Email
thegourmetgarden@nicemail.com`;
  contact.appendChild(email);

  const schedule = document.createElement("div");
  schedule.innerText = `Opening Hours
    Monday to Friday: 11:00 AM - 10:00 PM
    Saturday: 10:00 AM - 11:00 PM
    Sunday: 10:00 AM - 9:00 PM`;
  contact.appendChild(schedule);

  return contact;
}
