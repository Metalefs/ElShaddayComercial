import {
  trigger,
  transition,
  style,
  query,
  group,
  animateChild,
  state,
  animate,
  keyframes,
} from '@angular/animations';

export let fade = trigger('fadeIn',[
    state('void', style({opacity:0})),

    transition(':enter, :leave', [ //void <=> *
      animate(500)
    ]),
]);
export let slide = trigger('slideInOut', [
  transition('* => *, :enter', [
    query(':enter, :leave', style({ position: 'absolute', width: '100%' }), { optional: true }),
    query(':enter', style({ transform: 'translateX(-100vw)' }), { optional: true }),
    query(':leave', style({ transform: 'translateX(0vw)' }), { optional: true }),

    group([
      query(':leave', [
        animate('500ms ease-in-out', style({
          transform: 'translateX(100vw)'
        }))
      ], { optional: true }),
      query(':enter', [
        animate('500ms ease-in-out', style({
          transform: 'translateX(0)'
        }))
      ], { optional: true })
    ])
  ])
]);

export const slider =
  trigger('routeAnimations', [
    transition('* => isLeft', slideTo('left') ),
    transition('* => isRight', slideTo('right') ),
    transition('isRight => *', slideTo('left') ),
    transition('isLeft => *', slideTo('right') )
  ]);

function slideTo(direction) {
  const optional = { optional: true };
  return [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        [direction]: 0,
        width: '100%'
      })
    ], optional),
    query(':enter', [
      style({ [direction]: '-100%'})
    ]),
    group([
      query(':leave', [
        animate('600ms ease-in-out', style({ [direction]: '100%'}))
      ], optional),
      query(':enter', [
        animate('600ms ease-in-out', style({ [direction]: '0%'}))
      ])
    ]),
    // Normalize the page style... Might not be necessary

    // Required only if you have child animations on the page
    // query(':leave', animateChild()),
    // query(':enter', animateChild()),
  ];
}