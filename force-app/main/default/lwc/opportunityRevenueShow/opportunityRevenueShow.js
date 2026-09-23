import { LightningElement ,wire} from 'lwc';
import getClosingOppsList from '@salesforce/apex/opportunityController.opportunityinsertController';
import { refreshApex } from '@salesforce/apex';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { NavigationMixin } from 'lightning/navigation';


export default class OpportunityRevenueShow extends LightningElement {


 
@wire(getClosingOppsList)
wiredOppsResult;
get opportunityList() {
return this.wiredOppsResult?.data || [];
}

async setExpectedRevenue(event){
    this.modData=this.event.value;
    try {
        if(this.modData.Amount>2000000 && this.modData.Probability){

    }

        await setExpectedRevenueLogic({ oppId: selectedOppId,
            
         });
        await refreshApex(this.wiredOppsResult);
    } catch (error) {
        console.error('Database process failed:', error.body.message);
    }

}
ShowToastEvent(issuccess){
    this.ShowToastEvent(){
        variant:'success',
        message:'Successfully updatedd';


    }


}
showNavigate(isUpdate){
this[NavigationMixin.Navigate]({
type: 'standard',
attributes: {
objectApiName: 'opportunity',
actionName: 'navigate'
}
});
}


}