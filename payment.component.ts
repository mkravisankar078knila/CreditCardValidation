import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from "@angular/forms";
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { CustomValidators } from 'ngx-custom-validators';
// import { CreditCardValidators as ngCreditCardValidators  } from 'angular-cc-library';
//  import { CreditCardValidators  } from 'ngx-validators';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
 cardDetails: FormGroup;
 cardType='';
 cardNo='';
//  test:boolean=false;

 constructor( private fb:FormBuilder) {
    this.cardDetails = this.fb.group({
      
      name:['',RxwebValidators.compose({validators:[
        RxwebValidators.required(),RxwebValidators.maxLength({value:20 })]})],
      cardType:[''],
      creditCards: ['',[Validators.required,CustomValidators.creditCard]],
      expirationDate: [''], //[<any>ngCreditCardValidators.validateExpDate]],
      cvc: ['',RxwebValidators.compose({validators:[RxwebValidators.required(),
        RxwebValidators.minLength({value:4 }),RxwebValidators.maxLength({value:4 })]})],

      address:['',RxwebValidators.maxLength({value:20 })],
      city:['',RxwebValidators.maxLength({value:20 })],
      country:['',RxwebValidators.maxLength({value:20 })],
      phoneNumber:['',RxwebValidators.compose({validators:[
         RxwebValidators.required(),RxwebValidators.mask({mask:'(999)-999 9999' })]})],
      email:['',RxwebValidators.compose({validators:[
        RxwebValidators.required(),RxwebValidators.email()]})]
     
    });
 
  }
 
  // Validators.compose(Validators.required,CustomValidators.creditCard)],
  // [Validators.required, Validators.pattern("[0-9 ]{10}"),CustomValidators.number,
  // CustomValidators.min(10),CustomValidators.max(10)]
  // [Validators.minLength(3),Validators.maxLength(4)]]

      
 ngOnInit(): void { }

 onSubmit() {
  console.log(this.cardDetails.value);
  }

 setCardTypeValue(event: any) { 
  this.cardNo = event.target.value;
  this.cardTypes( this.cardNo );
  // return this.cardType=this.cardDetails.get('creditCards')
  // this.cardType='visa';
  }

  cardTypes(number:any) {
       // let regexp = /^4/;
    // this.test=regexp.test(number)
    var regVisa = new RegExp("^4");
    var regAmex = new RegExp("^3[47]");
    var regMasterCard = new RegExp("^5[0-5]");
    var regMaestro = new RegExp("^5018|5020|5038|5612|5893|6304|6759|6761|6762|6763|0604|6390");
    var regDiners = new RegExp("^36");
    var regDinersCarteBlanche = new RegExp("^30[0-5]");
     var regVisaElectron =  RegExp("^(4026|417500|4508|4844|491(3|7))");
 
    if (regVisa.test(number) != false){ //&& ((number.length==16) || (number.length==19) ||(number.length==23)))
      this.cardType='Visa';
    }
    else if (regAmex.test(number) != false){
      this.cardType='Amex';
    }
    else if (regMasterCard.test(number) != false){
      this.cardType='MasterCard';
    }
    else if (regMaestro.test(number) != false){
      this.cardType='Maestro';
    }
    else if (regDiners.test(number) != false){
      this.cardType='Diners';
    }
    else if (regDinersCarteBlanche.test(number) != false){
      this.cardType='DinersCarteBlanche';
    }
    else if (regVisaElectron.test(number) != false){
      this.cardType='VisaElectron';
    }
    else{
      this.cardType="";
    }

    
  }

}






