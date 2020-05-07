import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {
  
  authFiles: File[] = [];
  targetFiles: File[] = [];

	onAuthSelect(event) {
		console.log('Auth Select: ' + event);
		this.authFiles.push(...event.addedFiles);
	}

	onAuthRemove(event) {
		console.log('Auth Remove: ' + event);
		this.authFiles.splice(this.authFiles.indexOf(event), 1);
	}

	onTargetSelect(event) {
		console.log('Target Select: ' + event);
		this.targetFiles.push(...event.addedFiles);
	}

	onTargetRemove(event) {
		console.log('Target Remove: ' + event);
		this.targetFiles.splice(this.targetFiles.indexOf(event), 1);
	}
}
