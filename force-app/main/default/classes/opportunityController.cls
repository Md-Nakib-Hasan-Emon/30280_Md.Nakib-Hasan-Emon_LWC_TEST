public with sharing class opportunityController {


    @AuraEnabled(cacheable=true)
    public static List<Opportunity> opportunityinsertController() {
        List<Opportunity> oppList= [
           SELECT Id,Name,Amount,Probability,Expected_Revenue_Overriden__c 
           FROM Opportunity 
           Where CloseDate =THIS_MONTH 
           AND StageName NOT IN('Proposal/Price Quote','Negotiation/Review','Closed Won','Closed Lost')     
           WITH USER_MODE];
           return oppList;


    }
}