import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PhotoPage } from "./photo-page.component";

describe("PhotoPage", () => {
	let component: PhotoPage;
	let fixture: ComponentFixture<PhotoPage>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ PhotoPage ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(PhotoPage);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
