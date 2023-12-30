export default function AccordianItem({ item, num, currentOpen, onSetIsOpen }) {
  //  const [currentOpen, setIsOpen] = useState(null);

  const isOpen = num === currentOpen;

  function handleToggle() {
    onSetIsOpen(isOpen ? null : num);
    // if (isOpen) onSetIsOpen(null);
  }

  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <p className="number">{num + 1}</p>
      <p className="title">{item.title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <p className="content-box">{item.text}</p>}
    </div>
  );
}
