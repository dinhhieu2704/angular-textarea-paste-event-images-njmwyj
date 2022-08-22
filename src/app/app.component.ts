import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';

  onPaste(e: any) {
    console.log(e);
    const items = (e.clipboardData || e.originalEvent.clipboardData).items;
    let clipboardData = e.clipboardData;
    let pastedText = clipboardData.getData('text/html');
    var doc = new DOMParser().parseFromString(pastedText, 'text/html');
    var img = doc.getElementsByTagName('img');
    console.log('a');
    for (const item of img) {
      var src = item.getAttribute('src');
      console.log(src);
    }
  }
}
