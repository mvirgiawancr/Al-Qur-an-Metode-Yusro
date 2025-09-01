import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import mysql from "mysql2/promise";
import bcrypt from "bcrypt";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        let connection;
        try {
          connection = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
          });

          const [rows] = await connection.execute(
            "SELECT * FROM users WHERE email = ?",
            [credentials.email]
          );

          if (rows.length > 0) {
            const user = rows[0];
            const isValid = await bcrypt.compare(
              credentials.password,
              user.password
            );

            if (isValid) {
              // Mengembalikan object user yang lebih sederhana
              return { id: user.id, name: user.nama, email: user.email };
            }
          }
          return null; // Gagal otentikasi
        } catch (error) {
          console.error("Authorize Error:", error);
          return null; // Gagal karena error server
        } finally {
          if (connection) {
            await connection.end();
          }
        }
      },
    }),
  ],
  // Menambahkan konfigurasi penting di bawah ini
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
  },
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id;
      }
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
