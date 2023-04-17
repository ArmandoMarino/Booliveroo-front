<script>
import axios, { formToJSON } from 'axios';
import braintree from 'braintree-web-drop-in';
const baseUrl = 'http://127.0.0.1:8000/api/';
export default {
    name: 'Payment',
    props: { tokenApi: String, address: String, phone: String, email: String },
    data() {
        return {

        }
    },

    methods: {
        // render payment box and make payment
        makePayment() {
            // get the button from dom
            const button = document.querySelector('#submit-button');

            // // instace of braintree
            braintree.create({
                authorization: this.tokenApi,
                selector: '#dropin-container'
            }, function (err, dropinInstance) {
                if (err) {
                    console.error(err);
                    return;
                }
                // on "pay" click
                button.addEventListener('click', function () {
                    dropinInstance.requestPaymentMethod(function (err, payload) {
                        if (err) {
                            console.error(err);
                            return;
                        }

                        // define what will be passed to backend
                        const foods = JSON.parse(localStorage.getItem('cart'));
                        const address = this.address;
                        const phone = this.phone;
                        const email = this.email;

                        // pack everything in a data object
                        const data = {
                            token: payload.nonce,
                            foods: foods,
                            address: address,
                            phone: phone,
                            email: email
                        };

                        // post the payment in backend passing the data
                        axios.post(`${baseUrl}make-payment`, data)
                            .then(function (response) {
                                console.log(response);
                            })
                            .catch(function (error) {
                                console.error(error);
                            });
                    });
                });
            });
        },
    },

    mounted() {
        this.makePayment();
    },
}
</script>

<template>
    <div id="dropin-container"></div>
    <button id="submit-button" class="button button--small button--green">Purchase</button>
</template>

<style scoped lang="scss">
.button {
    cursor: pointer;
    font-weight: 500;
    left: 3px;
    line-height: inherit;
    position: relative;
    text-decoration: none;
    text-align: center;
    border-style: solid;
    border-width: 1px;
    border-radius: 3px;
    display: inline-block;
}

.button--small {
    padding: 10px 20px;
    font-size: 0.875rem;
}

.button--green {
    outline: none;
    background-color: #64d18a;
    border-color: #64d18a;
    color: white;
    transition: all 200ms ease;
}

.button--green:hover {
    background-color: #8bdda8;
    color: white;
}
</style>