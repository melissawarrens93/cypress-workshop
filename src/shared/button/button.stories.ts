// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import {ButtonComponent} from "./button.component";

export default {
    title: 'Example/Button',
    component: ButtonComponent,
    argTypes: {
        layout: { control: 'text' },
        label: { control: 'text' }
    },
} as Meta;

const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
    props: args,
});

export const Default = Template.bind({});
Default.args = {
    layout: 'default',
    label: 'Default button',
};

export const Primary = Template.bind({});
Primary.args = {
    layout: 'primary',
    label: 'Primary button',
};

export const Secondary = Template.bind({});
Secondary.args = {
    layout: 'secondary',
    label: 'Secondary button',
};
