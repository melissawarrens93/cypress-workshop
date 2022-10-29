import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'con-button',
    template: `<button data-cy="con-button" class="con-button con-button--{{layout}}" (click)="buttonClicked.emit()">{{label}}</button>`,
    styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
    @Input() layout: 'default' | 'primary' | 'secondary' = 'default';
    @Input() label: string = '';

    @Output() buttonClicked = new EventEmitter();
}
