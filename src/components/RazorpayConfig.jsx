import React from 'react'
import { orderUrl } from '../utils/baseUrl';
import { getUserId } from '../utils/GetUserId';
import axios from 'axios';
import { Button } from '@mui/material';

const RazorpayConfig = () => {

    function loadScript(src) {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = src;
            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };
            document.body.appendChild(script);
        });
    }

    async function displayRazorpay() {
        const res = await loadScript(
            "https://checkout.razorpay.com/v1/checkout.js"
        );

        if (!res) {
            alert("Razorpay SDK failed to load. Are you online?");
            return;
        }

        // creating a new order
        const result = await axios.post(`${orderUrl}/payment/total-prod-payment/${getUserId}`);

        if (!result) {
            alert("Server error. Are you online?");
            return;
        }

        // Getting the order details back
        const { amount, id: order_id, currency } = result.data;

        const options = {
            key: "rzp_test_rYvQSRxqiPdH5e", // Enter the Key ID generated from the Dashboard
            amount: amount.toString(),
            currency: currency,
            name: "Soumya Corp.",
            description: "Test Transaction",
            // image: { logo },
            order_id: order_id,
            handler: async function (response) {
                const data = {
                    orderCreationId: order_id,
                    razorpayPaymentId: response.razorpay_payment_id,
                    razorpayOrderId: response.razorpay_order_id,
                    razorpaySignature: response.razorpay_signature,
                };

                try {

                    const result = await axios.post(`${orderUrl}/payment/save-payment/${order_id}/${getUserId}`);
                    console.log(result.data);
                    const response = await axios.post(`${orderUrl}/order/create-order`, { userId: getUserId, payId: result.data, addrId: 203 })
                    console.log("order is generated:" + response.data)
                } catch (err) {
                    console.log(err)
                }


            },
            prefill: {
                name: "Soumya Dey",
                email: "SoumyaDey@example.com",
                contact: "9999999999",
            },
            notes: {
                address: "Soumya Dey Corporate Office",
            },
            theme: {
                color: "#61dafb",
            },
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    }

    return (
        <>
            <Button variant="contained" color="primary" sx={{ background: '#218b3b' }} size="large" fullWidth onClick={displayRazorpay} >
                Buy Now
            </Button>

        </>
    )
}

export default RazorpayConfig