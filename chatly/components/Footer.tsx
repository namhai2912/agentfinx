import { BRAND, FOOTER_COLUMNS } from "@/lib/site";
import { Logo } from "./Logo";

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="container footer-top">
        <Logo />
        <div className="footer-cols">
          {FOOTER_COLUMNS.map((c) => (
            <div key={c.title}>
              <h4>{c.title}</h4>
              {c.links.map((l) => (
                <a key={l} href="#">{l}</a>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="container footer-bottom muted">
        <span>© {new Date().getFullYear()} {BRAND}. Bảo lưu mọi quyền.</span>
        <span>Điều khoản · Bảo mật</span>
      </div>
    </footer>
  );
}
