import React from 'react';
import { Canvas, Unstyled } from '@storybook/blocks';
import { InputSelect } from './InputSelect';
import { inputSelectOptions } from './data';

export default {
    title: 'Components/Input Select/HTML',
    component: InputSelect,
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
                        <h3 className="title">Input select</h3>
                    </Unstyled>
                    <Canvas
                        of={InputSelectHTML}
                        source={{
                            code: `
<div class="ds-input__select">
    <label class="ds-input__label" for="input-1">
        <span>Input label</span>
    </label>

    <select name="input-1">
        <option value="">Select an option</option>
        <option value="1">Last 1 Day</option>
        <option value="2">Last 2 Days</option>
        <option value="3">Last 3 Days</option>
        <option value="4">Last 4 Days</option>
        <option value="5">Last 5 Days</option>
    </select>
</div>
`
                        }}
                    />

                    <Unstyled>
                        <h3 className="title">Input select required</h3>
                    </Unstyled>
                    <Canvas
                        of={InputSelectRequiredHTML}
                        source={{
                            code: `
<div class="ds-input__select --required">
    <label class="ds-input__label" for="input-2">
        <span>Input label</span>
    </label>

    <select name="input-2">
        <option value="">Select an option</option>
        <option value="1">Last 1 Day</option>
        <option value="2">Last 2 Days</option>
        <option value="3">Last 3 Days</option>
        <option value="4">Last 4 Days</option>
        <option value="5">Last 5 Days</option>
    </select>
</div>
`
                        }}
                    />

                    <Unstyled>
                        <h3 className="title">Input select disabled</h3>
                    </Unstyled>
                    <Canvas
                        of={InputSelectDisabledHTML}
                        source={{
                            code: `
<div class="ds-input__select --disabled">
    <label class="ds-input__label" for="input-3">
        <span>Input label</span>
    </label>

    <select name="input-3" disabled>
        <option value="">Select an option</option>
        <option value="1">Last 1 Day</option>
        <option value="2">Last 2 Days</option>
        <option value="3">Last 3 Days</option>
        <option value="4">Last 4 Days</option>
        <option value="5">Last 5 Days</option>
    </select>
</div>
`
                        }}
                    />

                    <Unstyled>
                        <h3 className="title">Input select with error</h3>
                    </Unstyled>
                    <Canvas
                        of={InputSelectErrorHTML}
                        source={{
                            code: `
<div class="ds-input__select --error">
    <label class="ds-input__label" for="input-4">
        <span>Input label</span>
    </label>

    <select name="input-4">
        <option value="">Select an option</option>
        <option value="1">Last 1 Day</option>
        <option value="2">Last 2 Days</option>
        <option value="3">Last 3 Days</option>
        <option value="4">Last 4 Days</option>
        <option value="5">Last 5 Days</option>
    </select>

    <div class="ds-input__error">
        Error message goes here.
    </div>
</div>
`
                        }}
                    />

                    <Unstyled>
                        <h3 className="title">Input select with hint</h3>
                    </Unstyled>
                    <Canvas
                        of={InputSelectHintHTML}
                        source={{
                            code: `
<div class="ds-input__select">
    <label class="ds-input__label" for="input-5">
        <span>Input label</span>
    </label>

    <select name="input-5">
        <option value="">Select an option</option>
        <option value="1">Last 1 Day</option>
        <option value="2">Last 2 Days</option>
        <option value="3">Last 3 Days</option>
        <option value="4">Last 4 Days</option>
        <option value="5">Last 5 Days</option>
    </select>

    <div class="ds-input__hint">
        Hint message goes here.
    </div>
</div>
`
                        }}
                    />

                    <Unstyled>
                        <h3 className="title">Input select with tooltip</h3>
                    </Unstyled>
                    <Canvas
                        of={InputSelectTooltipHTML}
                        source={{
                            code: `
<div class="ds-input__select">
    <label class="ds-input__label" for="input-6">
        <span>Input label</span>

        <div class="ds-tooltip">
            <div class="--top" data-tip="Tooltip message goes here.">
                <button
                    class="ds-button --icon --sm"
                    aria-label="button text"
                >
                    <span
                        class="ds-icon--info"
                        aria-label="ds-icon--info"
                    ></span>
                </button>
            </div>
        </div>
    </label>

    <select name="input-6">
        <option value="">Select an option</option>
        <option value="1">Last 1 Day</option>
        <option value="2">Last 2 Days</option>
        <option value="3">Last 3 Days</option>
        <option value="4">Last 4 Days</option>
        <option value="5">Last 5 Days</option>
    </select>
</div>
`
                        }}
                    />
                </>
            )
        }
    },
    tags: ['autodocs', '!dev']
};

export const InputSelectHTML = () => {
    return (
        <div className="ds-input__select">
            <label className="ds-input__label" htmlFor="input-1">
                <span>Input label</span>
            </label>

            <select name="input-1">
                <option value="">Select an option</option>
                <option value="1">Last 1 Day</option>
                <option value="2">Last 2 Days</option>
                <option value="3">Last 3 Days</option>
                <option value="4">Last 4 Days</option>
                <option value="5">Last 5 Days</option>
            </select>
        </div>
    );
};

export const InputSelectRequiredHTML = () => {
    return (
        <div className="ds-input__select --required">
            <label className="ds-input__label" htmlFor="input-2">
                <span>Input label</span>
            </label>

            <select name="input-2">
                <option value="">Select an option</option>
                <option value="1">Last 1 Day</option>
                <option value="2">Last 2 Days</option>
                <option value="3">Last 3 Days</option>
                <option value="4">Last 4 Days</option>
                <option value="5">Last 5 Days</option>
            </select>
        </div>
    );
};

export const InputSelectDisabledHTML = () => {
    return (
        <div className="ds-input__select --disabled">
            <label className="ds-input__label" htmlFor="input-3">
                <span>Input label</span>
            </label>

            <select name="input-3" disabled>
                <option value="">Select an option</option>
                <option value="1">Last 1 Day</option>
                <option value="2">Last 2 Days</option>
                <option value="3">Last 3 Days</option>
                <option value="4">Last 4 Days</option>
                <option value="5">Last 5 Days</option>
            </select>
        </div>
    );
};

export const InputSelectErrorHTML = () => {
    return (
        <div className="ds-input__select --error">
            <label className="ds-input__label" htmlFor="input-4">
                <span>Input label</span>
            </label>

            <select name="input-4">
                <option value="">Select an option</option>
                <option value="1">Last 1 Day</option>
                <option value="2">Last 2 Days</option>
                <option value="3">Last 3 Days</option>
                <option value="4">Last 4 Days</option>
                <option value="5">Last 5 Days</option>
            </select>

            <div className="ds-input__error">Error message goes here.</div>
        </div>
    );
};

export const InputSelectHintHTML = () => {
    return (
        <div className="ds-input__select --hint">
            <label className="ds-input__label" htmlFor="input-5">
                <span>Input label</span>
            </label>

            <select name="input-5">
                <option value="">Select an option</option>
                <option value="1">Last 1 Day</option>
                <option value="2">Last 2 Days</option>
                <option value="3">Last 3 Days</option>
                <option value="4">Last 4 Days</option>
                <option value="5">Last 5 Days</option>
            </select>

            <div className="ds-input__hint">Hint message goes here.</div>
        </div>
    );
};

export const InputSelectTooltipHTML = () => {
    return (
        <div className="ds-input__select">
            <label className="ds-input__label" htmlFor="input-6">
                <span>Input label</span>

                <div className="ds-tooltip">
                    <div
                        className="--top"
                        data-tip="Tooltip message goes here."
                    >
                        <button
                            className="ds-button --icon --sm"
                            aria-label="button text"
                        >
                            <span
                                className="ds-icon--info"
                                aria-label="ds-icon--info"
                            ></span>
                        </button>
                    </div>
                </div>
            </label>

            <select name="input-6">
                <option value="">Select an option</option>
                <option value="1">Last 1 Day</option>
                <option value="2">Last 2 Days</option>
                <option value="3">Last 3 Days</option>
                <option value="4">Last 4 Days</option>
                <option value="5">Last 5 Days</option>
            </select>
        </div>
    );
};
