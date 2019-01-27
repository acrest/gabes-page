import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";


import { AppComponent } from "./app.component";
import { YoutubeComponentComponent } from "./components/youtube-component/youtube-component";
import { YoutubePlayerModule } from "ngx-youtube-player";
import { NavBar } from "./components/nav-bar/nav-bar";
import { VideoPage } from "./pages/video-page/video-page.component";
import { HeaderBarComponent } from "./components/header-bar/header-bar.component";
import { PhotoPage } from "./pages/photo-page/photo-page.component";
import { HomePage } from "./pages/home-page/home-page.component";
import { RouterModule, Routes } from "@angular/router";


const routes: Routes = [
	{ path: "home", component: HomePage },
	{ path: "videos", component: VideoPage },
	{ path: "photos", component: PhotoPage }
];

@NgModule({
	declarations: [
		AppComponent,
		YoutubeComponentComponent,
		NavBar,
		VideoPage,
		HeaderBarComponent,
		PhotoPage,
		HomePage
	],
	imports: [
		BrowserModule,
		YoutubePlayerModule,
		RouterModule.forRoot(routes)
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
