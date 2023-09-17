export default function Button({
  children,
  setActiveForm,
  name,
  setValueMoney,
}) {
  return (
    <button
      className="Button1"
      onClick={() => {
        setActiveForm(name), setValueMoney("");
      }}
    >
      {children}
    </button>
  );
}
