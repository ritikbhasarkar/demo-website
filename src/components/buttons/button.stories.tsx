import type { Meta, StoryObj } from "@storybook/react";


import Button from "./page";

const meta: Meta<typeof Button> = {
    component: Button,
    title:'Button',
    argTypes:{
        variant:{
            control:{
                type:'select',
                options:['primary','secondary']
            }
        },
        size:{
            control:{
                type:'select',
                options:['small','medium']
            }
        }
    }
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story ={
    args:{
        text:'Button',
        size:'small',
        variant:'primary',
        // icon:ReactElement,
    }
}