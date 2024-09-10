import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  // themeIcon: string = "fa-solid fa-moon"
  // themeValue: boolean = true;

  // themeChange() {
  //   this.themeValue = !this.themeValue
  //   this.themeIcon = !this.themeValue ? "fa-solid fa-sun" : "fa-solid fa-moon"
  // }

  headerIcon: string = "fa fa-bars"
  headerValue: boolean = true;

  headerChange() {
    this.headerValue = !this.headerValue
    this.headerIcon = !this.headerValue ? "fa fa-close" : "fa fa-bars"
  }


  //Darkmode
  isdark: boolean = false

  moonIcon() {
    let moonIcon = document.getElementById("moon")
    let sunIcon = document.getElementById("sun")
    let moonIconMobile = document.getElementById("moonmobile")
    let sunIconMobile = document.getElementById("sunmobile")
    document.body.classList.remove("light-theme")
    document.body.classList.add("dark-theme")
    this.isdark = true
    moonIcon!.style.display = 'none'
    sunIcon!.style.display = 'block'
    moonIconMobile!.style.display = 'none'
    sunIconMobile!.style.display = 'block'
    localStorage.setItem('theme', JSON.stringify(this.isdark))
  }

  sunIcon() {
    let moonIcon = document.getElementById("moon")
    let sunIcon = document.getElementById("sun")
    let moonIconMobile = document.getElementById("moonmobile")
    let sunIconMobile = document.getElementById("sunmobile")
    document.body.classList.add("light-theme")
    document.body.classList.remove("dark-theme")
    this.isdark = false
    moonIcon!.style.display = 'block'
    sunIcon!.style.display = 'none'
    moonIconMobile!.style.display = 'block'
    sunIconMobile!.style.display = 'none'
    localStorage.setItem('theme', JSON.stringify(this.isdark))
  }

  ngOnInit() {
    this.isdark = JSON.parse(localStorage.getItem('theme')!) || null

    if (this.isdark === false) {
      let moonIcon = document.getElementById("moon")
      let sunIcon = document.getElementById("sun")
      let moonIconMobile = document.getElementById("moonmobile")
      let sunIconMobile = document.getElementById("sunmobile")
      document.body.classList.remove("dark-theme")
      document.body.classList.add("light-theme")
      moonIcon!.style.display = 'block'
      sunIcon!.style.display = 'none'
      moonIconMobile!.style.display = 'block'
      sunIconMobile!.style.display = 'none'
    }

    if (this.isdark) {
      let moonIcon = document.getElementById("moon")
      let sunIcon = document.getElementById("sun")
      let moonIconMobile = document.getElementById("moonmobile")
      let sunIconMobile = document.getElementById("sunmobile")
      document.body.classList.add("dark-theme")
      document.body.classList.remove("light-theme")
      moonIcon!.style.display = 'none'
      sunIcon!.style.display = 'block'
      moonIconMobile!.style.display = 'none'
      sunIconMobile!.style.display = 'block'
    }
  }





}
