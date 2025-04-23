import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const DatepickerInput = ({
    customClasses,
    handleInputDateChange,
    errorMessage,
    hasError,
    hintMessage,
    toggleCalendar,
    label,
    inputId,
    inputRef,
    isDisabled,
    isRange,
    isRequired,
    isSimple,
    fromDate,
    placeholder,
    selectedDay,
    toDate,
    showCalendar
}) => {
    const handleInputFocus = () => {
        if (showCalendar) {
            toggleCalendar();
        }
    };

    return (
        <div
            ref={inputRef}
            className={classNames(
                'ds-input --icons --icon-right',
                customClasses,
                {
                    '--error': hasError,
                    '--disabled': isDisabled,
                    '--required': isRequired
                }
            )}
        >
            {label && (
                <label className="ds-input__label" htmlFor="from">
                    <span>{label}</span>
                </label>
            )}
            {isRange ? (
                <div className="ds-input__range">
                    <input
                        className="ds-from-field"
                        aria-labelledby="from"
                        placeholder={placeholder}
                        onChange={handleInputDateChange}
                        value={fromDate}
                        name="from"
                        disabled={isDisabled}
                        onFocusCapture={handleInputFocus}
                    />{' '}
                    <div className="ds-input__range-separator">–</div>
                    <input
                        className="ds-to-field"
                        aria-labelledby="to"
                        placeholder={placeholder}
                        onChange={e => handleInputDateChange(e)}
                        value={toDate}
                        name="to"
                        onFocusCapture={handleInputFocus}
                    />
                    <button
                        onClick={toggleCalendar}
                        className="ds-button --icon --right"
                        aria-label="Select Date Range"
                    >
                        <span
                            className="ds-icon--calendar-blank"
                            aria-label="Calendar"
                        ></span>
                    </button>
                </div>
            ) : isSimple ? (
                <input
                    aria-labelledby="Selected day"
                    placeholder={placeholder}
                    onChange={e => handleInputDateChange(e)}
                    id={inputId}
                    value={selectedDay}
                    name="Selected day"
                    onFocusCapture={handleInputFocus}
                    type="date"
                />
            ) : (
                <div className="ds-flex --start-center --row">
                    <input
                        aria-labelledby="Selected day"
                        placeholder={placeholder}
                        onChange={e => handleInputDateChange(e)}
                        id={inputId}
                        value={selectedDay}
                        name="Selected day"
                        onFocusCapture={handleInputFocus}
                    />

                    <button
                        onClick={toggleCalendar}
                        className="ds-button --icon --right"
                        aria-label="Select Date Range"
                    >
                        <span
                            className="ds-icon--calendar-blank"
                            aria-label="Calendar"
                        ></span>
                    </button>
                </div>
            )}

            {errorMessage && (
                <div className="ds-input__error">{errorMessage}</div>
            )}
            {hintMessage && <div className="ds-input__hint">{hintMessage}</div>}
        </div>
    );
};

DatepickerInput.propTypes = {
    customClasses: PropTypes.string,
    handleInputDateChange: PropTypes.func,
    errorMessage: PropTypes.string,
    hasError: PropTypes.bool,
    hintMessage: PropTypes.string,
    toggleCalendar: PropTypes.func,
    label: PropTypes.string,
    inputId: PropTypes.string,
    inputRef: PropTypes.object,
    isDisabled: PropTypes.bool,
    isRange: PropTypes.bool,
    isRequired: PropTypes.bool,
    isSimple: PropTypes.bool,
    fromDate: PropTypes.string,
    placeholder: PropTypes.string,
    selectedDay: PropTypes.string,
    toDate: PropTypes.string,
    showCalendar: PropTypes.bool
};

export default DatepickerInput;
