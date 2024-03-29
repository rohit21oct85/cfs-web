module.exports = {
    env: {
        // basePath:'http://localhost:3000', // used for SEO purposes to get the basePath
        // HOST:`http://127.0.0.1:8000`,        
        // NEXTAUTH_URL:`http://localhost:3000`, // only used in next.js code and not in nextauth next auth reads values from .env
        // JWT_SIGNING_PRIVATE_KEY:`X_7FQqWRZXqNIWCsGYz9MfPJtsD6zj3vLTs3myNZ6cM`,
        
        basePath:'https://crazyforstudy.com',   // used for SEO purposes to get the basePath
        HOST:`https://admin.crazyforstudy.com`,
        NEXTAUTH_URL:"https://crazyforstudy.com",
        JWT_SIGNING_PRIVATE_KEY:`X_7FQqWRZXqNIWCsGYz9MfPJtsD6zj3vLTs3myNZ6cM`,

        razor_pay_key:'rzp_test_ANFdQNpgQn4gvm',
        razor_pay_secret:'YSuiOAW6OviacJxQwaCzNj7C',
        plan_id:'plan_H95OjUCdv3Upow',

        stripe_p_key:'pk_test_8tdoBYKAN0byYPGOMaYvvcQa',
        stripe_s_secret:'sk_test_ygam1fkRTDiqM8w1Msr0ITP6',
    },
}

// HOST:`https://cfs-admin.herokuapp.com`
// HOST:`http://13.233.125.223:8080`
// http://13.233.125.223:8080/web/v1/books/view-all
