import { trigger, transition, style, animate, state } from '@angular/animations';
export let fade = trigger('fadeIn',[
    state('void', style({opacity:0})),

    transition(':enter, :leave', [ //void <=> *
      animate(2000)
    ]),
]);