import {createSubscription, saveTransactionDetails} from '../../libs/payment'
import { useState } from "react";
import { useSession } from 'next-auth/client'

export default function RazorPay(){
    const [ session, loading ] = useSession()
    const [ isLoading, setIsLoading ] = useState(false)

    const handleRazor = async (e) => {
        setIsLoading(true);
        const res = await createSubscription();

        if(res.data){
            setIsLoading(false);
            const subs_id = res.data.id
            let options = {
                "key": process.env.razor_pay_key, // Enter the Key ID generated from the Dashboard
                "subscription_id" : subs_id,
                "name": "Subscription Plan",
                "description": "crazy for study",
                "image": "",
                "handler": async function (response) {
                    // alert(response.razorpay_payment_id),
                    // alert(response.razorpay_subscription_id),
                    // alert(response.razorpay_signature);
                    // verify transaction using signature
                    // https://razorpay.com/docs/api/subscriptions/#authentication-transaction
                    const res = await saveTransactionDetails(
                        { 
                            payment_id: response.razorpay_payment_id,
                            subscription_id: response.razorpay_subscription_id,
                            signature: response.razorpay_signature,
                            userEmail : session.user.email,
                            userId : session.user._id,
                        }
                    )
                    console.log(res);
                    if(res.data){
                        session.user.Subscribe = true;
                        // console.log(session)
                        localStorage.setItem('subscribed',true);
                    }
                },
                "theme": {
                    "color" : "#f8d021",
                }
            };
            var rzp1 = new Razorpay(options);
            rzp1.open();
        }
        e.preventDefault();
    }

    return(
        <a onClick={handleRazor}>{ isLoading ? 'wait' : <img src="/images/pay-2.png" className="img-fluid" alt=""/> }</a>
    )
}