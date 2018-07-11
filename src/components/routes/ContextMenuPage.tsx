import MenuItem from "@material-ui/core/MenuItem";
import * as React from "react";
import { defineMessages, FormattedMessage } from "react-intl";
import ContextMenu from "../common/ContextMenu";
import PageLayout from "../common/PageLayout";

const idPrefix = "ContextMenuPage";
const messages = defineMessages({
    title: {
        defaultMessage: "Context menu",
        id: `${idPrefix}.title`,
    },
});

export default () => (
    <PageLayout pageTitle={<FormattedMessage {...messages.title} />}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <ContextMenu
                menuContent={
                    <React.Fragment>
                        <MenuItem>Menu item 1</MenuItem>
                        <MenuItem>Menu item 2</MenuItem>
                        <MenuItem>Menu item 3</MenuItem>
                    </React.Fragment>
                }
            >
                <div style={{ border: "1px solid red", width: 200 }}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ipsum veniam magnam odit?
                    Perspiciatis recusandae omnis accusantium sed delectus fugiat saepe reprehenderit ab atque facilis,
                    iure rerum minus maxime aperiam.
                </div>
            </ContextMenu>
        </div>
    </PageLayout>
);
