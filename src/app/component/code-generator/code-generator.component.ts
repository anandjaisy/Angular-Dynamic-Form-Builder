import { Component, OnInit, Input, ViewChild, ElementRef, TemplateRef } from '@angular/core';
import { IGenericHttpClient } from 'projects/falcon-core/src/public-api';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-code-generator',
  templateUrl: './code-generator.component.html',
  styleUrls: ['./code-generator.component.scss']
})
export class CodeGeneratorComponent implements OnInit {
  baseUrl : string = "https://raw.githubusercontent.com/anandjaisy/androidCodeTemplates/master";
  @Input() tsConfig: string;
  @Input() htmlConfig: string;
  @Input() cssConfig: string;

  code : string;

  templateToLoad: TemplateRef<any>;
  @ViewChild('lazyLoadingTemplate', { static: true }) lazyLoadingTemplate: TemplateRef<any>;
  @ViewChild('codeTemplate', { static: true }) codeTemplate: TemplateRef<any>;

  constructor(private igenericHttpClient: IGenericHttpClient<string>, private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.loadHtmlFromServer();
  }

  onLinkClick(event: MatTabChangeEvent) {
    this.code = null;
    switch (event.index) {
      case 0:
        this.loadHtmlFromServer();
        break;
      case 1:
        this.loadTSFromServer();
        break;
      case 2:
        this.loadCSSFromServer();
        break;
    }
  }

  private loadHtmlFromServer() {
    this.templateToLoad = this.lazyLoadingTemplate;
    this.httpClient.get(`${this.baseUrl}${this.htmlConfig}`,{responseType: 'text'}).subscribe(data => {
      this.code = `${data}`;
      this.templateToLoad = this.codeTemplate;
      }, error => {
        console.log(error);
        this.templateToLoad = this.codeTemplate;
      });
  }
  private loadTSFromServer() {
    this.templateToLoad = this.lazyLoadingTemplate;
    this.httpClient.get(`${this.baseUrl}${this.tsConfig}`,{responseType: 'text'}).subscribe(data => {
      this.code = `${data}`;
      this.templateToLoad = this.codeTemplate;
      }, error => {
        console.log(error);
        this.templateToLoad = this.codeTemplate;
      });
  }
  private loadCSSFromServer() {
    this.templateToLoad = this.lazyLoadingTemplate;
    this.igenericHttpClient.GenericHttpGet(this.cssConfig).subscribe(data => {
      this.code = data;
      this.templateToLoad = this.codeTemplate;
    }, error => {
      console.log(error);
      this.templateToLoad = this.codeTemplate;
    })
  }

}
