import React from 'react';
import Button from '../components/Button';

export const headerNavData = [
    {
        label: 'Text button',
        icon: 'user-circle',
        route: null
    },
    {
        label: 'Text button',
        icon: 'user-circle',
        route: null
    },
    {
        label: 'Text button',
        icon: 'user-circle',
        subNav: [
            {
                icon: 'user-circle',
                label: 'Text button',
                route: null
            },
            {
                icon: 'user-circle',
                label: 'Text button',
                route: null
            },
            {
                icon: 'user-circle',
                label: 'Text button',
                route: null
            },
            {
                icon: 'user-circle',
                label: 'Text button',
                route: null
            },
            {
                icon: 'user-circle',
                label: 'Text button',
                route: null
            }
        ]
    }
];

export const headerSubNavData = [
    {
        label: 'Text button',
        route: null
    },
    {
        label: 'Text button',
        subNav: [
            {
                icon: 'user-circle',
                label: 'Text button',
                route: null
            },
            {
                icon: 'user-circle',
                label: 'Text button',
                route: null
            },
            {
                icon: 'user-circle',
                label: 'Text button',
                route: null
            }
        ]
    }
];

export const userNotifications = [
    {
        title: 'Lab result available',
        message:
            'Your CBC w/Differential results are ready. You can view your results by clicking here on this notification.'
    },
    {
        title: 'Lab result available',
        message:
            'Your Glucose and AC1 results are ready. You can view your results by clicking here on this notification.'
    },
    {
        title: 'J. Osterman has updated their profile',
        message: 'Address and phone number have been updated.'
    }
];

export const userMenuContent = (
    <div className="ds-flex --column">
        <Button
            customClasses="ds-header__dropdown-item"
            icon="user-circle"
            label="Edit profile"
        />

        <Button
            customClasses="ds-header__dropdown-item"
            icon="lock-simple-open"
            label="Settings and privacy"
        />

        <Button
            customClasses="ds-header__dropdown-item"
            icon="arrow-square-up-right"
            label="Logout"
        />
    </div>
);
