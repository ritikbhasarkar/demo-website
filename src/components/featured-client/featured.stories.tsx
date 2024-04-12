import type { Meta, StoryObj } from "@storybook/react";
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
        icon:'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/html5.svg',
    }
}