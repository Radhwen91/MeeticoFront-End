import { Component } from '@angular/core';
import { User } from 'src/app/_models/user';
import { Request } from 'src/app/_models/request';
import { TokenService } from 'src/app/_services/token.service';
import { UserService } from 'src/app/_services/user.service';
import * as pdfjsLib from 'pdfjs-dist';
import { createWorker } from 'tesseract.js';
import { RequestService } from 'src/app/_services/request.service';

@Component({
  selector: 'app-user-management-front',
  templateUrl: './user-management-front.component.html',
  styleUrls: ['./user-management-front.component.scss']
})

export class UserManagementFrontComponent {
  user: User;
  address: string[] = [];
  disabled = true;
  path: string;
  parsedText: string;
  requests: Request[];
  constructor(private tokenService: TokenService, private userService: UserService, private requestService: RequestService) {
    pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://unpkg.com/pdfjs-dist@2.5.207/build/pdf.worker.min.js';
  }
  ngOnInit() {
    this.user = this.tokenService.getUser();
    this.requestService.retrieveAllRequests(this.user.userId).subscribe(requests => this.requests = requests);
  }
  async readFile(event) {
    if (event.target.files[0]) {
      if (event.target.files[0].type == "application/pdf") {
        this.parsedText = 'Recognizing...';
        let formData = new FormData();
        formData.append('file', event.target.files.item(0));
        this.userService.uploadConvertablePDF(formData).subscribe(async files => await pdfjsLib.getDocument(files[0]).promise.then(async res => {
          let countPromises = [];
          for (let i = 1; i <= res._pdfInfo.numPages; i++) {
            res.getPage(i).then(async res => {
              const textContent = await res.getTextContent();
              countPromises.push(textContent.items.map((s) => s.str).join(''));
              const pageContents = await Promise.all(countPromises);
              this.parsedText = pageContents.join('').slice();
            });
          }
        }));
      }
      else if (event.target.files[0].type.toString().startsWith("image/")) {
        this.parsedText = 'Recognizing...';
        const worker = createWorker();
        await worker.load();
        await worker.loadLanguage('eng');
        await worker.initialize('eng');
        let reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onloadend = (async event => {
          const { data: { text } } = await worker.recognize(event.target.result.toString());
          this.parsedText = text;
          await worker.terminate();
        });
      }
    }
  }
}
