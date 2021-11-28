import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {
    @HostBinding('class.open') isClicked = false;
    ngOnInit(): void {

    }
    constructor(private elementRef: ElementRef, private renderer: Renderer2) {

    }
    // @HostListener('mouseenter') onEnter() {
    //     this.isClicked = true;
    // }
    // @HostListener('mouseleave') onLeave() {
    //     this.isClicked = false;
    // }

    @HostListener('click') onClick() {
        this.isClicked = !this.isClicked;
    }
}