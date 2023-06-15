export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="mx-auto mt-8 max-w-7xl px-6 lg:px-8">
      <footer
        aria-labelledby="footer-heading"
        className="relative border-t border-gray-900/10 py-8 flex items-center justify-center content-center"
      >
        <img src="/logo.png" className="h-24" />
      </footer>
    </div>
  );
}
