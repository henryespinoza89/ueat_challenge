import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-roman-test',
    templateUrl: './roman-test.component.html',
    styleUrls: ['./roman-test.component.scss']
})
export class RomanTestComponent implements OnInit {
    public romanForm: FormGroup;
    constructor() { }

    ngOnInit(): void {
        this._loadForm();
        this.romanNumber.valueChanges.subscribe(item => {
            if (item) {
                item = item.toUpperCase();
                var num = this.char_to_int(item.charAt(0));
                for(var i = 1; i < item.length; i++){
                    let curr = this.char_to_int(item.charAt(i));
                    if (curr < 0) this.romanNumber.setErrors({'format': 'Incorrect format'});
                    let pre = this.char_to_int(item.charAt(i - 1));
                    num = curr <= pre ? num += curr : num - pre*2 + curr;
                }
                if (num < 0) this.romanNumber.setErrors({'format': 'Incorrect format'})
                else this.result.setValue(num);
            } else {
                this.result.setValue('');
            }
        });
    }

    public _loadForm(): void {
        this.romanForm = new FormGroup({
            roman_number: new FormControl('', Validators.required),
            result: new FormControl({value: '', disabled: true})
        });
    }

    public char_to_int(val: string): number {
        switch (val) {
            case 'I': return 1;
            case 'V': return 5;
            case 'X': return 10;
            case 'L': return 50;
            case 'C': return 100;
            case 'D': return 500;
            case 'M': return 1000;
            default: return -1;
        }
    }

    get romanNumber() {
        return this.romanForm.get('roman_number');
    }

    get result() {
        return this.romanForm.get('result');
    }
}
