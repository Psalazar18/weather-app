import "./Footer.css"

function Footer({ lastUpdated }) {
  const formatted = lastUpdated
    ? lastUpdated.toLocaleString("en-US", {
        month: "short",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
      })
    : "Not updated yet";

  return (
    <footer className="weather-footer">
      <p>Last updated on {formatted}</p>
    </footer>
  );
}

export default Footer;