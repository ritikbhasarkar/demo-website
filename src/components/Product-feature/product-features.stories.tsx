import type { Meta, StoryObj } from "@storybook/react";
import ProductFeatures from "./page";


const meta: Meta<typeof ProductFeatures > = {
    component: ProductFeatures ,
    title:'product-features',  
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story ={
    args:{
        heading:'hello world',
        subText:'lasjokjansjiasiujasbhiudfhiasudfhiasudhfiausd'
    }
}