import Link from "next/link";
import { Logo } from "./Logo";

export default function Navbar() {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <Logo />
        <nav className="nav-links" aria-label="Chính">
          <a href="#preview">Sản phẩm</a>
          <a href="#footer">Tài nguyên</a>
        </nav>
        <div className="nav-actions">
          <a href="#footer" className="btn btn-ghost">Liên hệ</a>
          <Link href="/login" className="btn btn-ghost">Đăng nhập</Link>
          <Link href="/signup" className="btn btn-dark">Đăng ký</Link>
        </div>
      </div>
    </header>
  );
}
