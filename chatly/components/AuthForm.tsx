"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { Logo } from "./Logo";
import { BRAND, SOCIAL_LOGINS } from "@/lib/site";

type Mode = "login" | "signup";

export default function AuthForm({ mode }: { mode: Mode }) {
  const router = useRouter();
  const isLogin = mode === "login";
  const [error, setError] = useState("");

  function goChat() {
    // TODO: gọi API xác thực thật tại đây
    router.push("/chat");
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const email = String(new FormData(e.currentTarget).get("email") ?? "").trim();
    if (!/^\S+@\S+\.\S+$/.test(email)) return setError("Email không hợp lệ.");
    setError("");
    goChat();
  }

  return (
    <main className="auth">
      <div className="auth-card">
        <div className="auth-logo"><Logo /></div>
        <h1>{isLogin ? `Chào mừng đến với ${BRAND}` : `Tạo tài khoản ${BRAND}`}</h1>

        <div className="social">
          {SOCIAL_LOGINS.map((s) => (
            <button key={s} type="button" className="btn btn-outline" onClick={goChat}>{s}</button>
          ))}
        </div>

        <div className="divider"><span>hoặc</span></div>

        <form onSubmit={onSubmit} className="form" noValidate>
          <input name="email" type="email" placeholder="Địa chỉ email" autoComplete="email" aria-label="Email" />
          {error && <p className="form-error" role="alert">{error}</p>}
          <button type="submit" className="btn btn-dark btn-block">Tiếp tục với email</button>
        </form>

        <p className="auth-switch muted">
          {isLogin ? "Chưa có tài khoản? " : "Đã có tài khoản? "}
          <Link href={isLogin ? "/signup" : "/login"}>{isLogin ? "Đăng ký" : "Đăng nhập"}</Link>
        </p>
      </div>
      <p className="auth-legal muted">Bằng việc tiếp tục, bạn đồng ý với Điều khoản sử dụng và Chính sách bảo mật.</p>
    </main>
  );
}
