<script>
import braintree from 'braintree-web';
export default {
    name: 'Payment',
    data() {
        return {
            hostedFieldInstance: false
        }
    },

    methods: {
        payWithCreditCard() {
            if (this.hostedFieldInstance) {
                this.hostedFieldInstance.tokenize().then(payload => {
                    console.log(payload);
                })
                    .catch(err => {
                        console.error(err);

                    })
            }
        }
    },

    mounted() {
        braintree.client.create({
            authorization: "sandbox_2449cbxf_phqgnzghz4nhbfcd"
        })
            .then(clientInstance => {
                let options = {
                    client: clientInstance,
                    styles: {
                        input: {
                            'font-size': '14px',
                            'font-family': 'Open Sans'
                        }
                    },
                    fields: {
                        number: {
                            selector: '#creditCardNumber',
                            placeholder: 'Enter Credit Card'
                        },
                        cvv: {
                            selector: '#cvv',
                            placeholder: 'Enter CVV'
                        },
                        expirationDate: {
                            selector: '#expireDate',
                            placeholder: '00 / 0000'
                        }
                    }
                }
                return braintree.hostedFields.create(options)
            })
            .then(hostedFieldInstance => {
                this.hostedFieldInstance = hostedFieldInstance;
            })
            .catch(err => {
            });
    }
}
</script>


<template>
    <div class="container">

        <!-- first copy html -->
        <div class="col-6 offset-3">
            <div class="card bg-light">
                <div class="card-header">Payment Information</div>
                <div class="card-body">
                    <form>
                        <div class="form-group">
                            <label for="amount">Amount</label>
                            <div class="input-group">
                                <div class="input-group-prepend"><span class="input-group-text">$</span></div>
                                <input type="number" id="amount" class="form-control" placeholder="Enter Amount">
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <!-- form copy -->
        <form>
            <div class="form-group">
                <label for="amount">Amount</label>
                <div class="input-group">
                    <div class="input-group-prepend"><span class="input-group-text">$</span></div>
                    <input type="number" id="amount" class="form-control" placeholder="Enter Amount">
                </div>
            </div>
            <hr />
            <div class="form-group">
                <label>Credit Card Number</label>
                <div id="creditCardNumber" class="form-control"></div>
            </div>
            <div class="form-group">
                <div class="row">
                    <div class="col-6">
                        <label>Expire Date</label>
                        <div id="expireDate" class="form-control"></div>
                    </div>
                    <div class="col-6">
                        <label>CVV</label>
                        <div id="cvv" class="form-control"></div>
                    </div>
                </div>
            </div>

            <!-- button form -->
            <button class="btn btn-primary btn-block" @click.prevent="payWithCreditCard">Pay with Credit Card</button>
        </form>

        <!-- button -->
    </div>
</template>

<style></style>