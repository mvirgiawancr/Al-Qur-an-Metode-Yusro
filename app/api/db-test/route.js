import { NextResponse } from "next/server";
import mysql from "mysql2/promise";

export async function GET() {
  let connection;
  try {
    console.log("Attempting to connect to the database...");
    connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });
    console.log("Database connection successful!");

    // Coba lakukan query sederhana
    await connection.execute("SELECT 1");
    console.log("Test query successful!");

    return NextResponse.json(
      { message: "Koneksi database berhasil!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Database connection failed:", error);
    return NextResponse.json(
      {
        message: "Koneksi database gagal.",
        error: error.message, // Mengirim pesan error spesifik
      },
      { status: 500 }
    );
  } finally {
    if (connection) {
      await connection.end();
      console.log("Database connection closed.");
    }
  }
}
