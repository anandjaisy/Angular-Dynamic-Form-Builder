import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularRichTextEditorComponent } from './rich-text-editor.component';

describe('RichTextEditorComponent', () => {
  let component: AngularRichTextEditorComponent;
  let fixture: ComponentFixture<AngularRichTextEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AngularRichTextEditorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AngularRichTextEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
