import { NgForm,FormsModule, FormControl, FormGroup, FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms"

export class Customer {
    customerCode :string ='';
    customerName :string = '';
    customerAmount :Number = 0;
    id:number = 0;
    formCustomerGroup: FormGroup;

    constructor(){
        var _bulider = new FormBuilder();
        this.formCustomerGroup = _bulider.group({});
        this.formCustomerGroup.addControl("customerNameControl", new FormControl("", Validators.required));
        this.formCustomerGroup.addControl("customerCodeControl", new FormControl("", Validators.required));
        this.formCustomerGroup.addControl("customerAmountControl", new FormControl("", Validators.required));

    }
}