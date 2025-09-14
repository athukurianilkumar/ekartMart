import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchlocationsComponent } from './searchlocations.component';

describe('SearchlocationsComponent', () => {
  let component: SearchlocationsComponent;
  let fixture: ComponentFixture<SearchlocationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchlocationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchlocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
