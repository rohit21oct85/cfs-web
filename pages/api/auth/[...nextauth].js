import NextAuth from "next-auth"
import { session } from "next-auth/client";
import Providers from "next-auth/providers"
import { setLogin, saveGoogleUser } from '../../../libs/auth'

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export default NextAuth({
  // https://next-auth.js.org/configuration/providers
  providers: [
    Providers.Facebook({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
    }),
    Providers.Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    Providers.Credentials({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: 'Sign In',
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        username: { label: "Username", type: "email", placeholder: "jsmith" },
        password: {  label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // Add logic here to look up the user from the credentials supplied
        const user = await setLogin(credentials);
        if (user) {
          // console.log(user);
		      // Any object returned will be saved in `user` property of the JWT
          return user
        } else {
          // If you return null or false then the credentials will be rejected
          // return null
          // You can also Reject this callback with an Error or with a URL:
          // throw new Error('error message') // Redirect to error page
          throw `${process.env.NEXTAUTH_URL}/auth/signin`       // Redirect to a URL
        }
      }
    })
  ],
  // Database optional. MySQL, Maria DB, Postgres and MongoDB are supported.
  // https://next-auth.js.org/configuration/databases
  //
  // Notes:
  // * You must to install an appropriate node_module for your database
  // * The Email provider requires a database (OAuth providers do not)
  database: process.env.DATABASE_URL,

  // The secret should be set to a reasonably long random string.
  // It is used to sign cookies and to sign and encrypt JSON Web Tokens, unless
  // a separate secret is defined explicitly for encrypting the JWT.
  secret: process.env.SECRET,

  session: {
    // Use JSON Web Tokens for session instead of database sessions.
    // This option can be used with or without a database for users/accounts.
    // Note: `jwt` is automatically set to `true` if no database is specified.
    jwt: true,

    // Seconds - How long until an idle session expires and is no longer valid.
    maxAge: 2 * 24 * 60 * 60, // 2 days
    // maxAge: 30 * 24 * 60 * 60, // 30 days

    // Seconds - Throttle how frequently to write to database to extend a session.
    // Use it to limit write operations. Set to 0 to always update the database.
    // Note: This option is ignored if using JSON Web Tokens
    // updateAge: 24 * 60 * 60, // 24 hours
  },

  // JSON Web tokens are only used for sessions if the `jwt: true` session
  // option is set - or by default if no database is specified.
  // https://next-auth.js.org/configuration/options#jwt
  jwt: {
    // signingKey: process.env.JWT_SIGNING_PRIVATE_KEY,
    // A secret to use for key generation (you should set this explicitly)
    // secret: 'INp8IvdIyeMcoGAgFGoA61DdBglwwSqnXJZkgz8PSnw',
    // Set to true to use encryption (default: false)
    // encryption: true,
    // You can define your own encode/decode functions for signing and encryption
    // if you want to override the default behaviour.
    // encode: async ({ secret, token, maxAge }) => {},
    // decode: async ({ secret, token, maxAge }) => {},
  },

  // You can define custom pages to override the built-in ones. These will be regular Next.js pages
  // so ensure that they are placed outside of the '/api' folder, e.g. signIn: '/auth/mycustom-signin'
  // The routes shown here are the default URLs that will be used when a custom
  // pages is not specified for that route.
  // https://next-auth.js.org/configuration/pages
  pages: {
    signIn: '/auth/signin',  // Displays signin buttons
    // signOut: '/auth/signout', // Displays form with sign out button
    // error: '/auth/error', // Error code passed in query string as ?error=
    // verifyRequest: '/auth/verify-request', // Used for check email page
    // newUser: null // If set, new users will be directed here on first sign in
  },

  // Callbacks are asynchronous functions you can use to control what happens
  // when an action is performed.
  // https://next-auth.js.org/configuration/callbacks
  callbacks: {
    redirect: async (url, baseUrl) => {
      // return Promise.resolve(url)
      return url.startsWith(baseUrl)
        ? Promise.resolve(url)
        : Promise.resolve(baseUrl)
    },
    signIn : async (user, account, profile) => { 
      try{
        if(!user.student){
          user.fullname = user.name;
          user.img = user.image;
          user.social_id = user.id;
          // console.log(user,"user")
          const res = await saveGoogleUser(user);
          // console.log(res.data.accessToken,res.status);
          if(res && res.status == 200) {
            // console.log("user created")
            user.adat = res.data.accessToken
            user._id = res.data.student._id
            return true 
          }else{
            user.adat = res.data.accessToken
            user._id = res.data.student._id
            user.Subscribe = res.data.student.Subscribe
            // console.log("user exists")
          }
        }
      }catch(e){
        console.log(e)
      }
    },
    async jwt(token, user, account, profile, isNewUser) { 
      if(user && user.student){
        token.user = user.student
        token.user.adat = user.adat
        token.user.rdat = user.rdat
      }else{
        user && (token.user = user);
      } 
      return token 
    },
    async session(session, user) {
      session.user = user.user;
      return session 
    },
    
  },

  // Events are useful for logging
  // https://next-auth.js.org/configuration/events
  events: {},

  // Enable debug messages in the console if you are having problems
  debug: false,
})
