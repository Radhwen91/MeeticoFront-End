import { Component } from '@angular/core';
import { User } from 'src/app/_models/user';
import { TokenService } from 'src/app/_services/token.service';
import * as pdfjsLib from 'pdfjs-dist';
import { createWorker } from 'tesseract.js';

@Component({
  selector: 'app-register-employees',
  templateUrl: './register-employees.component.html',
  styleUrls: ['./register-employees.component.scss']
})

export class RegisterEmployeesComponent {
  user: User;
  address: string[] = [];
  disabled = true;
  path: string;
  convertedPictureResult: string;
  convertedPDFResult: string;
  constructor(private tokenService: TokenService) {
    pdfjsLib.GlobalWorkerOptions.workerSrc = '//mozilla.github.io/pdf.js/build/pdf.worker.js';
  }
  ngOnInit() {
    this.user = this.tokenService.getUser();
    if (this.tokenService.getUser().address) this.address = this.user.address.split(", ", 3);
  }
  async readPicture(event): Promise<void> {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = async event => {
        this.convertedPictureResult = 'Recognizing...';
        const worker = createWorker();
        await worker.load();
        await worker.loadLanguage('eng');
        await worker.initialize('eng');
        const { data: { text } } = await worker.recognize(event.target.result.toString());
        this.convertedPictureResult = text;
        await worker.terminate();
      }
    }
  }
  async readPDF(event): Promise<void> {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = async event => {
        const pdf = await pdfjsLib.getDocument(event.target.result.toString());
        const countPromises = [];
        for (let i = 1; i <= pdf._pdfInfo.numPages; i++) {
          const page = await pdf.getPage(i);
          const textContent = await page.getTextContent();
          countPromises.push(textContent.items.map((s) => s.str).join(''));
        }
        const pageContents = await Promise.all(countPromises);
        this.convertedPDFResult = pageContents.join('');
      }
    }
  }
}
