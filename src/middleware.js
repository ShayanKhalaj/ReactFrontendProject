import { jwtVerify } from "jose";
import { NextResponse } from "next/server";

export const config = {
  matcher: ["/pannel/:path*"],
};

const secretKey = new TextEncoder().encode("SECRET_KEY"); // کلید مخفی باید به یک آرایه از بایت‌ها تبدیل شود

export default async function middleware(request) {
  // دریافت توکن از کوکی‌ها
  const token = request.cookies.get("token");
  console.log("Token from cookies:", token);

  if (!token) {
    return NextResponse.redirect(`${request.nextUrl.origin}/auth/login`);
  }

  try {
    // بررسی صحت توکن
    const { payload } = await jwtVerify(token.value, secretKey); // رمزگشایی و بررسی توکن
    console.log("Decoded Token:", payload);

    // بررسی نقش کاربر
    if (!payload.role || payload.role !== "admin") {
      return new Response("Forbidden: Admins only", { status: 403 });
    }

    return NextResponse.next();
  } catch (err) {
    console.error("JWT Verification Error:", err.message);
    return NextResponse.redirect(`${request.nextUrl.origin}/auth/login`);
  }
}
