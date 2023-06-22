export default function UserMenu() {
  const email = 'mango@mail.com'; //change on data from backend

  return (
    <div>
      <p>{email}</p>
      <button>Logout</button>
    </div>
  );
}
