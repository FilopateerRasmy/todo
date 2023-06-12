import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'test';
  form = new FormGroup({
    todo: new FormControl('', []),
  });

  list: string[] = [];
  checkedItems:{[key:string]:boolean} = {};
  getFormField(field: string) {
    return this.form.get(field) as FormControl;
  }

  save() {
    this.list.push(this.getFormField('todo').value);
    this.form.reset();
  }

  public onCheckboxChange(item: string) {
    this.checkedItems[item] = !this.checkedItems[item];
  }
}
