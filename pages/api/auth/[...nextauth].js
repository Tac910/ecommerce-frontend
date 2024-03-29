import NextAuth from "next-auth"
import GoogleProvider from 'next-auth/providers/google'
export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: "447438156990-qm7iuv5e8rqi5p6v0ptedsk97n1se0ir.apps.googleusercontent.com",
      clientSecret: "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"

    }),

  ],
  jwt: {
    secret: "GENGARSTORE_SECRET",
    signingKey: "newsignignket"
  },
  secret: "GENGARSTORE_SECRE2312312T"

})
