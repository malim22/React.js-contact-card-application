// src/components/UserList.jsx
import ContactCard from "./ContactCard";

function UserList({ contacts }) {
  return (
    <div className="user-list">
      {contacts.map((c, i) => (
        <ContactCard key={i} name={c.name} email={c.email} phone={c.phone} />
      ))}
    </div>
  );
}

export default UserList;
