import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent, FooterComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolia';

  ngOnInit() {
    const toTop = document.querySelector(".top")
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        toTop!.classList.add("active");
      } else {
        toTop!.classList.remove("active");
      }
    })
  }
}
