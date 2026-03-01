import { Component } from '@angular/core';
import { Card } from '../../models/some-technologies/card';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-some-technologies',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './some-technologies.component.html',
  styleUrl: './some-technologies.component.scss'
})
export class SomeTechnologiesComponent {

  cards: Card[] = [
    { srcImg: 'assets/some-technologies/Angular.png', title: "Angular" },
    { srcImg: 'assets/some-technologies/Java.png', title: "Java" },
    { srcImg: 'assets/some-technologies/Spring.png', title: "Spring" },
    { srcImg: 'assets/some-technologies/Docker.png', title: "Docker" },
    { srcImg: 'assets/some-technologies/JS.png', title: "JS" },
    { srcImg: 'assets/some-technologies/Php.png', title: "Php" },
    { srcImg: 'assets/some-technologies/React.png', title: "React" },
    { srcImg: 'assets/some-technologies/Figma.png', title: "Figma" },
    { srcImg: 'assets/some-technologies/Postman.png', title: "Postman" },
  ]
}
