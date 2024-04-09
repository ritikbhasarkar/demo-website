import type { Meta, StoryObj } from "@storybook/react";
import icon from '/Users/Legion/demo-website/public/kappax-logo.png'

import Logo from "./page";

const meta: Meta<typeof Logo> = {
    component: Logo,
    title:'Website-Icon',
    
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story ={
    args:{
        text:'kappax',
        width:30,
        height:30,
        icon:icon,
    },
}