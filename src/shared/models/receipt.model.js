export class Receipt {
    constructor(){

        /**
         * Name of the company/seller
         * @type {String}
         */
        this.companyName = null;

        /**
         * Siren number of the company/seller
         * @type {String}
         */
        this.siren = null;

        /**
         * Adress of the company/seller
         * @type {String}
         */
        this.adress = null;

        /**
         * Date of the transaction
         * @type {Date}
         */
        this.date = null;

        /**
         * Name of the buyer
         * @type {String}
         */
        this.client = null;

        /**
         * Total amount without taxes
         * @type {Number}
         */
        this.exclTax = null;

        /**
         * Taxes rate in %
         * @type {Number}
         */
        this.vatRate = null;

        /**
         * Taxes amount
         * @type {Number}
         */
        this.vat = null;

        /**
         * Total amount including taxes
         * @type {Number}
         */
        this.inclTax = null;

        /**
         * Receipt img src
         * @type {String}
         */
        this.imgSrc = null;
    }
}