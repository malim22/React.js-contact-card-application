// src/components/ContactCard.jsx
function ContactCard({ name, email, phone }) {
  return (
    <div className="contact-card">
      <h2>{name}</h2>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
    </div>
  );
}

export default ContactCard;
