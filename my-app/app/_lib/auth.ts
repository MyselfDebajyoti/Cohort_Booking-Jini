// import NextAuth from "next-auth";
// import GoogleProvider from "next-auth/providers/google";

// const authConfig = {
//   providers: [
//     GoogleProvider({
//       clientId: process.env.AUTH_GOOGLE_ID!,
//       clientSecret: process.env.AUTH_GOOGLE_SECRET!,
//     }),
//   ],
// };
// export const {
//   auth,
//   handlers: { GET, POST },
// } = NextAuth(authConfig);

import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import getServerSession from "next-auth/next";

export const authConfig = {
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID!,
      clientSecret: process.env.AUTH_GOOGLE_SECRET!,
    }),
  ],
};

// export const { auth, handlers } = NextAuth(authConfig);
// export const { GET, POST } = handlers;

const handler = NextAuth(authConfig);
// const auth = NextAuth(authConfig);
const auth = getServerSession(authConfig);
const signIn = NextAuth(authConfig);
const signOut = NextAuth(authConfig);
export { signIn, signOut, auth, handler as GET, handler as POST };
