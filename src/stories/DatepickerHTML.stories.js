import React from 'react';
import { Canvas, Unstyled } from '@storybook/blocks';
import { Datepicker } from './Datepicker';

export default {
    title: 'Components/Datepicker/HTML',
    component: Datepicker,
    parameters: {
        layout: 'centered',
        controls: {
            disable: true
        },
        actions: {
            disable: true
        },
        docs: {
            page: () => (
                <>
                    <Unstyled>
                        <h3 className="title">Datepicker</h3>
                    </Unstyled>
                    <Canvas
                        source={{
                            code: `
<div class="ds-input">
    <label class="ds-input__label" for="datepicker-1" aria-label="Datepicker">
        <span>Datepicker</span>
    </label>
    <input type="date" id="datepicker-1" />
</div>
`
                        }}
                    >
                        <DatepickerHTML />
                    </Canvas>

                    <Unstyled>
                        <h3 className="title">Datepicker required</h3>
                    </Unstyled>
                    <Canvas
                        source={{
                            code: `
<div class="ds-input --required">
    <label class="ds-input__label" for="datepicker-2" aria-label="Datepicker">
        <span>Datepicker</span>
    </label>
    <input type="date" id="datepicker-2" />
</div>
`
                        }}
                        of={DatepickerHTMLRequired}
                    />

                    <Unstyled>
                        <h3 className="title">Datepicker disabled</h3>
                    </Unstyled>
                    <Canvas
                        source={{
                            code: `
<div class="ds-input --disabled">
    <label class="ds-input__label" for="datepicker-3" aria-label="Datepicker">
        <span>Datepicker</span>
    </label>
    <input type="date" id="datepicker-3" disabled />
</div>
`
                        }}
                        of={DatepickerHTMLDisabled}
                    />

                    <Unstyled>
                        <h3 className="title">Datepicker with hint</h3>
                    </Unstyled>
                    <Canvas
                        source={{
                            code: `
<div class="ds-input">
    <label class="ds-input__label" for="datepicker-4" aria-label="Datepicker">
        <span>Datepicker</span>
    </label>
    <input type="date" id="datepicker-4" />

    <div class="ds-input__hint">mm/dd/yyyy</div>
</div>
`
                        }}
                        of={DatepickerHTMLHint}
                    />

                    <Unstyled>
                        <h3 className="title">Datepicker with error</h3>
                    </Unstyled>
                    <Canvas
                        source={{
                            code: `
<div class="ds-input --error">
    <label class="ds-input__label" for="datepicker-5" aria-label="Datepicker">
        <span>Datepicker</span>
    </label>
    <input type="date" id="datepicker-5" />

    <div class="ds-input__error">Error message goes here.</div>
</div>
`
                        }}
                        of={DatepickerHTMLError}
                    />
                </>
            )
        }
    },
    tags: ['autodocs', '!dev']
};

export const DatepickerHTML = () => {
    return (
        <div className="ds-input">
            <label
                className="ds-input__label"
                htmlFor="datepicker-1"
                aria-label="Datepicker"
            >
                <span>Datepicker</span>
            </label>
            <input type="date" id="datepicker-1" />
        </div>
    );
};

export const DatepickerHTMLRequired = () => {
    return (
        <div className="ds-input --required">
            <label
                className="ds-input__label"
                htmlFor="datepicker-2"
                aria-label="Datepicker"
            >
                <span>Datepicker</span>
            </label>
            <input type="date" id="datepicker-2" />
        </div>
    );
};

export const DatepickerHTMLDisabled = () => {
    return (
        <div className="ds-input --disabled">
            <label
                className="ds-input__label"
                htmlFor="datepicker-3"
                aria-label="Datepicker"
            >
                <span>Datepicker</span>
            </label>
            <input type="date" id="datepicker-3" disabled />
        </div>
    );
};

export const DatepickerHTMLHint = () => {
    return (
        <div className="ds-input">
            <label
                className="ds-input__label"
                htmlFor="datepicker-4"
                aria-label="Datepicker"
            >
                <span>Datepicker</span>
            </label>
            <input type="date" id="datepicker-4" />

            <div className="ds-input__hint">mm/dd/yyyy</div>
        </div>
    );
};

export const DatepickerHTMLError = () => {
    return (
        <div className="ds-input --error">
            <label
                className="ds-input__label"
                htmlFor="datepicker-5"
                aria-label="Datepicker"
            >
                <span>Datepicker</span>
            </label>
            <input type="date" id="datepicker-5" />

            <div className="ds-input__error">Error message goes here.</div>
        </div>
    );
};
