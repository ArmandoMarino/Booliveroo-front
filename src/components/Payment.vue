<script>
import braintree from 'braintree-web-drop-in';
export default {
    name: 'Payment',
    props: {
        tokenApi: {
            // required: true,
            type: String
        }
    },
    data() {
        return {

        }
    },

    methods: {
        // render payment box and make payment
        makePayment() {
            braintree.create({
                authorization: this.tokenApi,
                selector: '#dropin-container'
            }, function (err, dropinInstance) {
                if (err) {
                    // Handle any errors that might've occurred when creating Drop-in
                    console.error(err);
                    return;
                }
                submitButton.addEventListener('click', function () {
                    dropinInstance.requestPaymentMethod(function (err, payload) {
                        if (err) {
                            // Handle errors in requesting payment method
                        }

                        // Send payload.nonce to your server
                    });
                });
            });
        }
    },

    mounted() {
        this.makePayment();
    },
}
</script>

<template>
    <div id="dropin-container"></div>
</template>

<style></style>