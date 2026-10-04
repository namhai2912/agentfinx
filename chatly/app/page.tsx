import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatPreview from "@/components/ChatPreview";
import { BRAND } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="hero container">
          <h1>Hệ thống phân tích báo cáo tài chính {BRAND}</h1>
          <p className="hero-sub">
            Tải lên báo cáo, đặt câu hỏi bằng ngôn ngữ tự nhiên và nhận phân tích rõ ràng trong vài giây.
          </p>
          <div className="hero-cta">
            <Link href="/signup" className="btn btn-dark btn-lg">Bắt đầu miễn phí</Link>
            <a href="#preview" className="btn btn-outline btn-lg">Xem thêm</a>
          </div>
          <ChatPreview />
        </section>
      </main>
      <Footer />
    </>
  );
}
