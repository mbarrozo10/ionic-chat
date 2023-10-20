import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Chat4aPage } from './chat4a.page';

describe('Chat4aPage', () => {
  let component: Chat4aPage;
  let fixture: ComponentFixture<Chat4aPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Chat4aPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
