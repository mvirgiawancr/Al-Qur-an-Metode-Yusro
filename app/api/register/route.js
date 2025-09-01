import { NextResponse } from "next/server";
import mysql from "mysql2/promise";
import bcrypt from "bcrypt";

export async function POST(request) {
  let connection;
  try {
    const { email, nama, hp, gender, password } = await request.json();

    // Validasi dasar di server
    if (!email || !nama || !password) {
      return NextResponse.json(
        { error: "Email, nama, dan password wajib diisi." },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      port: parseInt(process.env.DB_PORT || "3306"),
    });

    // Cek apakah email sudah ada
    const [existingUser] = await connection.execute(
      "SELECT email FROM users WHERE email = ?",
      [email]
    );

    if (existingUser.length > 0) {
      return NextResponse.json(
        { error: "Email sudah terdaftar." },
        { status: 409 }
      );
    }

    // Jika belum ada, masukkan pengguna baru
    await connection.execute(
      "INSERT INTO users (email, nama, hp, gender, password) VALUES (?, ?, ?, ?, ?)",
      [email, nama, hp, gender, hashedPassword]
    );

    return NextResponse.json(
      { message: "User created successfully" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Terjadi kesalahan pada server." },
      { status: 500 }
    );
  } finally {
    if (connection) {
      await connection.end();
    }
  }
}
