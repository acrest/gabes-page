import { Component, OnInit } from "@angular/core";
import { DatePipe } from "@angular/common";
import { Router, NavigationEnd, RouterEvent } from "@angular/router";

@Component({
	selector: "nav-bar",
	templateUrl: "./nav-bar.html",
	styleUrls: ["./nav-bar.scss"]
})
export class NavBar implements OnInit
{
	public pages: any [] = [
		{
			name: "Home",
			id: "HOME",
			route: "home"
		},
		{
			name: "Videos",
			id: "VIDEOS",
			route: "videos"
		},
		{
			name: "Photos",
			id: "PHOTOS",
			route: "photos"
		}
	];
	private router: Router;

	public constructor(router: Router)
	{
		this.router = router;
	}

	public ngOnInit(): void
	{
	}

	public pageClicked(route: string): void
	{
		console.log(route);
		this.router.navigate(["/" + route]);
	}
}
