export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>&copy; {year} PL&amp;CO. Tutti i diritti riservati.</p>
        <p className="footer-links">
          <a href="#">Privacy</a>
          <span>·</span>
          <a href="#">Cookie</a>
        </p>
      </div>
    </footer>
  );
}
