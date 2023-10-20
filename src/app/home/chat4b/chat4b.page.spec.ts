import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Chat4bPage } from './chat4b.page';

describe('Chat4bPage', () => {
  let component: Chat4bPage;
  let fixture: ComponentFixture<Chat4bPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Chat4bPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
