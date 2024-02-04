export default function Footer() {
  return (
    <>
      <div
        className="footer-2-3 text-white"
        style={{ borderTop: "1px solid #aaa", marginTop: "-1rem" }}
      >
        <div className="text-center py-3">
          Copyright &copy; {new Date().getFullYear()} Luminary State Community.
          Build, Maintained, and Developed by{" "}
          <a
            href="https://instagram.com/ilham.j_08/"
            rel="noreferrer"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            ilhamjaya08
          </a>
        </div>
      </div>
    </>
  );
}
