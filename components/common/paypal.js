import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import PayPalBtn from '../common/pay-pal-btn'

export default function Paypal({...props}){

    function createOrder(data, actions) {
        console.log(data,actions)
        return actions.order
            .create({
                purchase_units: [
                    {
                        amount: {
                            value: props.amt,
                        },
                    },
                ],
            })
            .then((orderID) => {
                // setOrderID(orderID);
                return orderID;
            });
    }

    const initialOptions = {
        "client-id": "AZaet1b36GGwW2xsb5GcS2bZoz2PyJJrJYK6W2Xd4QTf2ZKfQX7_1eS7lIFMMUaT6HBEKblE_cJgYcN3",
        currency: "USD",
        intent: "capture",
        vault:true,
        // "data-client-token": "abc123xyz==",
    };

    const paypalSubscribe = (data, actions) => {
        return actions.subscription.create({
            // 'plan_id': "P-07M91446V5390310FMB2VZIQ", my plan id
            'plan_id': "P-3RX065706M3469222L5IFM4I",
            // 'name': 'cfs'
        });
    };

    const paypalOnError = (err) => {
        console.log(err)
    }

    const paypalOnApprove = (data, detail) => {
        // call the backend api to store transaction details
        console.log("Payapl approved")
        console.log(data.subscriptionID)
    };

    return(

        // <PayPalScriptProvider options={initialOptions}>
        //     <PayPalButtons createSubscription={(data, actions) =>
        //         actions.subscription.create({
        //             plan_id: "P-07M91446V5390310FMB2VZIQ",
        //         })
        //     } style={{ layout: "horizontal" }} 
        //     />
        // </PayPalScriptProvider>

        <div className="App">
            <PayPalBtn
                amount = "0.01"
                currency = "USD"
                createSubscription={paypalSubscribe}
                onApprove={paypalOnApprove}
                catchError={paypalOnError}
                onError={paypalOnError}
                onCancel={paypalOnError}
            />
        </div>
    )
}