import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Initials } from "./Initials";
import { Masks } from "../../../common";

export default {
    title: "Design System/Atoms/Layout/Initials",
    component: Initials,
    argTypes: {
        input: {
            name: "Input String",
            defaultValue: "John Smith",
        },
        maxLength: {
            name: "Max Length",
        },
    },
} as ComponentMeta<typeof Initials>;

const Template: ComponentStory<typeof Initials> = (args) => (
    <div>
        <Initials {...args} />
        <Masks />
    </div>
);

export const Default = Template.bind({});
