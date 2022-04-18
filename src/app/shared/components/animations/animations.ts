import {
    trigger,
    style,
    animate,
    transition,
    state
  } from "@angular/animations";
  
  export const fade = [
    trigger("fade", [
      state("in", style({ opacity: "1" })),
      state("out", style({ opacity: "0" })),
      transition("in => out", animate("2s 2s")),
      transition("out => in", animate("2s 0.5s"))
    ])
  ];
  
  export enum AnimationState {
    IN = "in",
    OUT = "out"
  }