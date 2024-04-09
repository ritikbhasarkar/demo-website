import type { Meta, StoryObj } from "@storybook/react";
import icon from '/Users/Legion/demo-website/public/kappax-logo.png'

import FeaturedClient from "./page";

const meta: Meta<typeof FeaturedClient> = {
    component: FeaturedClient,
    title:'client-company',
    
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story ={
    args:{
        text:'kappaX',
        width:30,
        height:30,
        icon:icon,
    }
}