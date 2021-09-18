import { Component, OnInit, Input, ViewChild, ElementRef, TemplateRef } from '@angular/core';
import { IGenericHttpClient } from 'projects/falcon-core/src/public-api';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { HttpClient } from '@angular/common/http';
import { IRequestOptions } from 'projects/falcon-core/src/lib/model/interface';
@Component({
  selector: 'app-code-generator',
  templateUrl: './code-generator.component.html',
  styleUrls: ['./code-generator.component.scss']
})
export class CodeGeneratorComponent implements OnInit {
  @Input() tsConfig: string;
  @Input() htmlConfig: string;
  @Input() cssConfig: string;
  code: string;

  templateToLoad: TemplateRef<any>;
  @ViewChild('lazyLoadingTemplate', { static: true }) lazyLoadingTemplate: TemplateRef<any>;
  @ViewChild('codeTemplate', { static: true }) codeTemplate: TemplateRef<any>;

  constructor(private igenericHttpClient: IGenericHttpClient<any>, private httpClient: HttpClient) { }

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
    this.igenericHttpClient.get(this.htmlConfig, { responseType: 'text' }).subscribe(data => {
      this.code = `${data}`;
      this.templateToLoad = this.codeTemplate;
    }, error => {
      console.log(error);
      this.templateToLoad = this.codeTemplate;
    });
  }
  private loadTSFromServer() {
    this.templateToLoad = this.lazyLoadingTemplate;

    this.igenericHttpClient.get(this.tsConfig, { responseType: 'text' }).subscribe(data => {
      this.code = `${data}`;
      this.templateToLoad = this.codeTemplate;
    }, error => {
      console.log(error);
      this.templateToLoad = this.codeTemplate;
    });
  }
  private loadCSSFromServer() {
    this.templateToLoad = this.lazyLoadingTemplate;
    this.igenericHttpClient.get(this.cssConfig).subscribe(data => {
      this.code = data;
      this.templateToLoad = this.codeTemplate;
    }, error => {
      console.log(error);
      this.templateToLoad = this.codeTemplate;
    })
  }

}
