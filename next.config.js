module.exports = {
    env: {
        // basePath:'http://localhost:3000', // used for SEO purposes to get the basePath
        // HOST:`http://127.0.0.1:8080`,        
        // NEXTAUTH_URL:`http://localhost:3000/`, // only used in next.js code and not in nextauth next auth rads values from .env
        // JWT_SIGNING_PRIVATE_KEY:`X_7FQqWRZXqNIWCsGYz9MfPJtsD6zj3vLTs3myNZ6cM`,

        basePath:'https://cfs-web-prod.herokuapp.com',   // used for SEO purposes to get the basePath
        HOST:`https://cfs-admin-panel.herokuapp.com`,
        NEXTAUTH_URL:"https://cfs-web-prod.herokuapp.com",
        JWT_SIGNING_PRIVATE_KEY:`X_7FQqWRZXqNIWCsGYz9MfPJtsD6zj3vLTs3myNZ6cM`
    },
}

// HOST:`https://cfs-admin.herokuapp.com`
// HOST:`http://13.233.125.223:8080`
// http://13.233.125.223:8080/web/v1/books/view-all
