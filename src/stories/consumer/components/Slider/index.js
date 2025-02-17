'use client';

import React, { useState, useRef } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Slider = ({
    customClasses = [],
    defaultValue,
    doubleSlider,
    isDisabled,
    leftDefaultValue,
    rightDefaultValue
}) => {
    const [sliderValue, setSliderValue] = useState(defaultValue || 50);
    const [leftSliderValue, setLeftSliderValue] = useState(
        leftDefaultValue || 25
    );
    const [rightSliderValue, setRightSliderValue] = useState(
        rightDefaultValue || 75
    );
    const sliderRef = useRef(null);
    const leftSliderRef = useRef(null);
    const rightSliderRef = useRef(null);

    const singleUpdatedSliderValue = value => {
        setSliderValue(value);
    };

    const doubleUpdatedSliderValue = (value, slider) => {
        if (slider === 'left') {
            setLeftSliderValue(value);
        } else if (slider === 'right') {
            setRightSliderValue(value);
        }
    };

    return (
        <>
            {doubleSlider ? (
                <div
                    className={classNames(
                        'ds-double-slider__wrap',
                        customClasses,
                        {
                            disabled: isDisabled
                        }
                    )}
                >
                    <div className="ds-double-slider__assets">
                        <div className="--left-slider --value">
                            {leftSliderValue}
                        </div>

                        <div className="ds-double-slider__tracks">
                            <div className="--static"></div>
                            <div
                                className="--right-slider --active"
                                style={{ width: `${rightSliderValue}%` }}
                            ></div>
                            <div
                                className="--left-slider --active"
                                style={{ width: `${leftSliderValue}%` }}
                            ></div>
                            <input
                                ref={leftSliderRef}
                                className="ds-slider-double --left-slider"
                                type="range"
                                min="0"
                                max="100"
                                value={leftSliderValue}
                                onChange={e =>
                                    doubleUpdatedSliderValue(
                                        e.target.value,
                                        'left'
                                    )
                                }
                            />
                            <input
                                ref={rightSliderRef}
                                className="ds-slider-double --right-slider"
                                type="range"
                                min="0"
                                max="100"
                                value={rightSliderValue}
                                onChange={e =>
                                    doubleUpdatedSliderValue(
                                        e.target.value,
                                        'right'
                                    )
                                }
                            />
                            <div className="focus-outline"></div>
                        </div>

                        <div className="--right-slider --value">
                            {rightSliderValue}
                        </div>
                    </div>
                </div>
            ) : (
                <div
                    className={classNames('ds-slider__wrap', customClasses, {
                        disabled: isDisabled
                    })}
                >
                    <div className="ds-slider__tracks">
                        <div className="--static"></div>
                        <div
                            className="--active"
                            style={{ width: `${sliderValue}%` }}
                        ></div>
                    </div>

                    <div className="ds-slider__controls">
                        <input
                            ref={sliderRef}
                            className="ds-slider"
                            type="range"
                            min="0"
                            max="100"
                            value={sliderValue}
                            onChange={e =>
                                singleUpdatedSliderValue(e.target.value)
                            }
                        />
                        <div className="--value">{sliderValue}</div>
                    </div>
                </div>
            )}
        </>
    );
};

Slider.propTypes = {
    customClasses: PropTypes.string,
    defaultValue: PropTypes.number,
    doubleSlider: PropTypes.bool,
    isDisabled: PropTypes.bool,
    leftDefaultValue: PropTypes.number,
    rightDefaultValue: PropTypes.number
};

export default Slider;
