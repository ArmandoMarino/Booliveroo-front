<script>
import braintree from 'braintree-web-drop-in';
var submitButton = document.querySelector('#submit-button');
export default {
    name: 'Payment',
    data() {
        return {
        }
    },

    mounted() {
        braintree.create({
            authorization: 'sandbox_2449cbxf_phqgnzghz4nhbfcd',
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
}
</script>


<template>
    <div id="dropin-container"></div>
    <button id="submit-button">Purchase</button>
</template>

<style></style>