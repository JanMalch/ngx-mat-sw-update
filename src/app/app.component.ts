import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  register(myForm: NgForm) {
    Object.entries(myForm.value).forEach(([key, value]) => localStorage.setItem(key, value as string));
    document.location.reload();
  }

  get initStrat(): string {
    return localStorage.getItem('yourStrategy') || 'SnackBar';
  }

  get initDesign(): string {
    return localStorage.getItem('yourDialogComponent') || 'Basic';
  }

  get initImg(): string {
    return localStorage.getItem('yourImage')
      || ('https://images.unsplash.com/photo-1517694712202-14dd9538aa97' +
      '?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a20bc6324f6ef2969d9a7cae56b8d4d1&auto=format&fit=crop&w=580&q=80');
  }

}
