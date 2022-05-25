import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { UserStatus } from "./UserStatus";
import { Avatar } from "../layout/Avatar";
import { Masks } from "../../../common";

export default {
    title: "Design System/Atoms/Indicators/User Status",
    component: UserStatus,
    argTypes: {
        status: {
            name: "User Status",
            control: "radio",
            options: ["Online", "Idle", "Busy", "Invisible"],
            defaultValue: "Online",
        },
    },
} as ComponentMeta<typeof UserStatus>;

const Template: ComponentStory<typeof UserStatus> = (args) => (
    <>
        <Avatar
            size={256}
            holepunch="bottom-right"
            overlay={<UserStatus key="user-status" {...args} />}
        />
        <Masks />
    </>
);

export const Default = Template.bind({});
