import { Component, OnInit, Input } from "@angular/core";

@Component({
	selector: "youtube-component",
	templateUrl: "./youtube-component.html",
	styleUrls: ["./youtube-component.scss"]
})
export class YoutubeComponentComponent implements OnInit
{
	@Input() public id: string;
	private player: YT.Player;
	public constructor() { }

	public ngOnInit(): void
	{

	}

	public savePlayer(player: YT.Player): void
	{
		this.player = player;
	}
	public onStateChange(event: any): void
	{
	}
}
