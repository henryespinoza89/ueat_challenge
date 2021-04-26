import { TestBed, async, ComponentFixture, fakeAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule, FormBuilder} from '@angular/forms';
import { RomanTestComponent } from './roman-test.component';

describe('AppComponent', () => {
    let component: RomanTestComponent;
    let fixture: ComponentFixture<RomanTestComponent>;

    const formBuilder: FormBuilder = new FormBuilder();
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule, FormsModule, ReactiveFormsModule],
            declarations: [
                RomanTestComponent
            ],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(RomanTestComponent);
        component = fixture.componentInstance;
        component.romanForm = formBuilder.group({
            roman_number: '',
            result: ''
        });
        fixture.detectChanges();
    });

    it('should create RomanTestComponent', async(() => {
        const fixture = TestBed.createComponent(RomanTestComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));

    it('should return 1 as its value', fakeAsync(() => {
        const value = 'I';
        const response = component.char_to_int(value);
        expect(response).toEqual(1);
    }));

    it('should return 5 as its value', fakeAsync(() => {
        const value = 'V';
        const response = component.char_to_int(value);
        expect(response).toEqual(5);
    }));

    it('should return 10 as its value', fakeAsync(() => {
        const value = 'X';
        const response = component.char_to_int(value);
        expect(response).toEqual(10);
    }));

    it('should return 50 as its value', fakeAsync(() => {
        const value = 'L';
        const response = component.char_to_int(value);
        expect(response).toEqual(50);
    }));

    it('should return 100 as its value', fakeAsync(() => {
        const value = 'C';
        const response = component.char_to_int(value);
        expect(response).toEqual(100);
    }));

    it('should return 500 as its value', fakeAsync(() => {
        const value = 'D';
        const response = component.char_to_int(value);
        expect(response).toEqual(500);
    }));

    it('should return 1000 as its value', fakeAsync(() => {
        const value = 'M';
        const response = component.char_to_int(value);
        expect(response).toEqual(1000);
    }));

    it('should return -1 as its value', fakeAsync(() => {
        const value = 'E';
        const response = component.char_to_int(value);
        expect(response).toEqual(-1);
    }));

    it('should set an empty value', fakeAsync(() => {
        component.romanNumber.setValue('');
        fixture.detectChanges();
        expect(component.result.value).toEqual('');
    }));

    it('should set 5 value', fakeAsync(() => {
        component.romanNumber.setValue('V');
        fixture.detectChanges();
        expect(component.result.value).toEqual(5);
    }));

    it('should set 20 value', fakeAsync(() => {
        component.romanNumber.setValue('XX');
        fixture.detectChanges();
        expect(component.result.value).toEqual(20);
    }));

    it('should set 21 value', fakeAsync(() => {
        component.romanNumber.setValue('XXI');
        fixture.detectChanges();
        expect(component.result.value).toEqual(21);
    }));

    it('should set 40 value', fakeAsync(() => {
        component.romanNumber.setValue('XL');
        fixture.detectChanges();
        expect(component.result.value).toEqual(40);
    }));

    it('should set 58 value', fakeAsync(() => {
        component.romanNumber.setValue('LVIII');
        fixture.detectChanges();
        expect(component.result.value).toEqual(58);
    }));

    it('should be falsy when set an incorrect value', fakeAsync(() => {
        component.romanNumber.setValue('Q');
        fixture.detectChanges();
        expect(component.result.valid).toBeFalsy;
    }));

    it('should be falsy when set an incorrect value', fakeAsync(() => {
        component.romanNumber.setValue('XXQ');
        fixture.detectChanges();
        expect(component.result.valid).toBeFalsy;
    }));
});