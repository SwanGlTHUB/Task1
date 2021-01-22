import { LightningElement, api } from 'lwc';

export default class TableContent extends LightningElement {
    @api contact

    handleRedirectToAccountPage(event) {
        let accountId = event.target.getAttribute('account-id')
        let redirectURL = `/lightning/r/Account/${accountId}/view/`
        window.location.href = redirectURL
    }
}