import React from 'react';
import { QDSTabs } from './Tabs';

export default {
    title: 'Components/Tabs',
    component: QDSTabs,
    parameters: {
        layout: 'centered',
        actions: {
            disable: true
        },
        interactions: {
            disable: true
        }
    },
    tags: ['autodocs', '!dev']
};

export const BasicTabs = {
    args: {
        contentClasses: 'ds-pt-32',
        labels: [
            {
                isDisabled: false,
                name: 'Tab one'
            },
            {
                isDisabled: false,
                name: 'Tab two'
            },
            {
                isDisabled: true,
                name: 'Tab three'
            }
        ],
        defaultSelectedTab: 0,
        children: [
            <React.Fragment key="0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Volutpat blandit aliquam etiam erat. Eu feugiat pretium nibh
                ipsum consequat nisl vel pretium. Nulla pharetra diam sit amet
                nisl suscipit adipiscing. Vivamus at augue eget arcu. Sit amet
                massa vitae tortor condimentum. Dolor magna eget est lorem ipsum
                dolor sit amet consectetur. Et odio pellentesque diam volutpat
                commodo sed egestas egestas. Nam at lectus urna duis convallis.
                Sagittis orci a scelerisque purus semper eget. Aenean sed
                adipiscing diam donec adipiscing. Elementum nibh tellus molestie
                nunc. Tempor orci eu lobortis elementum nibh tellus molestie
                nunc non. Nunc sed augue lacus viverra vitae congue.
            </React.Fragment>,

            <React.Fragment key="1">
                Ut pharetra sit amet aliquam id diam maecenas ultricies. Dui ut
                ornare lectus sit amet. Potenti nullam ac tortor vitae purus.
                Sagittis vitae et leo duis ut diam quam nulla. Quis lectus nulla
                at volutpat diam. Magna eget est lorem ipsum dolor sit amet
                consectetur adipiscing. Sit amet porttitor eget dolor morbi. At
                tempor commodo ullamcorper a. Pellentesque elit eget gravida cum
                sociis natoque. At urna condimentum mattis pellentesque id nibh
                tortor id. Amet mauris commodo quis imperdiet massa tincidunt.
                Magna fermentum iaculis eu non diam phasellus vestibulum lorem.
                Nibh nisl condimentum id venenatis a condimentum vitae.
                Venenatis urna cursus eget nunc scelerisque viverra mauris in
                aliquam. Pharetra vel turpis nunc eget lorem dolor. Pharetra
                magna ac placerat vestibulum lectus.
            </React.Fragment>
        ]
    },
    argTypes: {
        defaultSelectedTab: { table: { disable: true } }
    }
};
