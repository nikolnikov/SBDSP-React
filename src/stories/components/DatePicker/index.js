'use client';

import React, { useState, useRef, useEffect } from 'react';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import DatepickerInput from './DatePickerInput';
import Caption from './Caption';
import Overlay from '../Overlay';

const QDSDatepicker = ({
    customClasses,
    errorMessage,
    hasError,
    hintMessage,
    disabledDays,
    inputId,
    isDisabled,
    isRange,
    isRequired,
    isSimple,
    label,
    placeholder,
    offset,
    showOnTop,
    selectedDay: initialSelectedDay,
    range: initialRange
}) => {
    const pastMonth = new Date();

    // Initialize state with passed-in props or defaults
    const [showCalendar, setShowCalendar] = useState(false);
    const [range, setRange] = useState(
        initialRange || { from: null, to: null }
    );
    const [selectedDay, setSelectedDay] = useState(
        initialSelectedDay
            ? format(new Date(initialSelectedDay), 'MM/dd/yyyy')
            : ''
    );
    const [calendarPositionY, setCalendarPositionY] = useState(0);
    const [fromDate, setFromDate] = useState(
        initialRange?.from
            ? format(new Date(initialRange.from), 'MM/dd/yyyy')
            : ''
    );
    const [toDate, setToDate] = useState(
        initialRange?.to ? format(new Date(initialRange.to), 'MM/dd/yyyy') : ''
    );

    const inputRef = useRef(null);

    const dateRegex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;

    const DAYS = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

    const toggleCalendar = () => {
        const yPositionOffset = showOnTop ? offset || -335 : offset || 63;

        setCalendarPositionY(
            () => (inputRef.current.style.top = 0 + yPositionOffset)
        );

        setShowCalendar(!showCalendar);
    };

    const handleInputDateChange = e => {
        const { name, value } = e.target;

        if (name === 'from') {
            setFromDate(value);
        } else if (name === 'to') {
            setToDate(value);
        } else if (name === 'Selected day') {
            setSelectedDay(value);
        } else {
            return;
        }

        if (dateRegex.test(value)) {
            setRange(prevState => ({
                ...prevState,
                [name]: new Date(value)
            }));
        } else {
            setRange(prevState => ({
                ...prevState,
                [name]: undefined
            }));
        }
    };

    const formatDays = day => {
        const days = DAYS;
        const dayIndex = day.getDay();
        return days[dayIndex];
    };

    const dayClickHandler = (selectedFromDate, selectedToDate) => {
        if (!fromDate) {
            setRange(prevState => ({
                ...prevState,
                from: new Date(selectedFromDate),
                to: undefined
            }));

            return setFromDate(format(selectedFromDate, 'MM/dd/yyyy'));
        }

        if (!toDate) {
            if (selectedFromDate < new Date(fromDate)) {
                setRange(prevState => ({
                    ...prevState,
                    from: new Date(selectedFromDate)
                }));
                return setFromDate(format(selectedFromDate, 'MM/dd/yyyy'));
            }

            setRange(prevState => ({
                ...prevState,
                to: new Date(selectedToDate)
            }));
            setToDate(format(selectedToDate, 'MM/dd/yyyy'));
            return toggleCalendar();
        }

        if (fromDate && toDate) {
            const fromDateChanged =
                fromDate !== format(selectedFromDate, 'MM/dd/yyyy');

            if (fromDateChanged) {
                setRange({
                    from: new Date(selectedFromDate),
                    to: undefined
                });
                setFromDate(format(selectedFromDate, 'MM/dd/yyyy'));
                setToDate('');
            } else {
                setRange({
                    from: new Date(selectedToDate),
                    to: undefined
                });
                setFromDate(format(selectedToDate, 'MM/dd/yyyy'));
                setToDate('');
            }
        }
    };

    useEffect(() => {
        // Update state if `selectedDay` or `range` changes
        if (initialSelectedDay) {
            setSelectedDay(format(new Date(initialSelectedDay), 'MM/dd/yyyy'));
        }
        if (initialRange) {
            setFromDate(
                initialRange.from
                    ? format(new Date(initialRange.from), 'MM/dd/yyyy')
                    : ''
            );
            setToDate(
                initialRange.to
                    ? format(new Date(initialRange.to), 'MM/dd/yyyy')
                    : ''
            );
            setRange(initialRange);
        }
    }, [initialSelectedDay, initialRange]);

    return (
        <>
            <div className="ds-datepicker__wrapper">
                <DayPicker
                    id={inputId}
                    className={classNames('ds-datepicker', {
                        '--opened': showCalendar
                    })}
                    {...(disabledDays === 'past'
                        ? {
                              disabled: { before: new Date() }
                          }
                        : disabledDays === 'future'
                          ? {
                                disabled: { after: new Date() }
                            }
                          : {})}
                    style={{ top: calendarPositionY, right: 0 }}
                    {...(isRange
                        ? {
                              defaultMonth: pastMonth,
                              mode: 'range',
                              selected: range,
                              onSelect: ({ from, to }) => {
                                  dayClickHandler(from, to);
                              }
                          }
                        : {
                              mode: 'single',
                              selected: selectedDay && new Date(selectedDay),

                              onSelect: selectedDay => {
                                  setSelectedDay(
                                      format(selectedDay, 'MM/dd/yyyy')
                                  );
                                  toggleCalendar();
                              }
                          })}
                    footer={null}
                    formatters={{ formatWeekdayName: formatDays }}
                    components={{
                        Caption: Caption
                    }}
                    modifiersClassNames={{
                        selected: 'ds-datepicker__selected',
                        today: 'ds-datepicker__today',
                        range_middle: 'ds-datepicker__range-middle',
                        range_start: 'ds-datepicker__range-start',
                        range_end: 'ds-datepicker__range-end'
                    }}
                />

                <DatepickerInput
                    customClasses={customClasses}
                    errorMessage={errorMessage}
                    hasError={hasError}
                    hintMessage={hintMessage}
                    handleInputDateChange={handleInputDateChange}
                    toggleCalendar={toggleCalendar}
                    label={label}
                    inputId={inputId}
                    inputRef={inputRef}
                    isDisabled={isDisabled}
                    isRange={isRange}
                    isRequired={isRequired}
                    isSimple={isSimple}
                    placeholder={placeholder}
                    {...(isRange
                        ? {
                              fromDate: fromDate,
                              toDate: toDate
                          }
                        : {
                              selectedDay: selectedDay
                          })}
                    showCalendar={showCalendar}
                ></DatepickerInput>
            </div>

            {showCalendar && (
                <Overlay
                    transparent
                    clickHandler={() => toggleCalendar(false)}
                    opened={showCalendar}
                />
            )}
        </>
    );
};

QDSDatepicker.propTypes = {
    customClasses: PropTypes.string,
    errorMessage: PropTypes.string,
    hasError: PropTypes.bool,
    hintMessage: PropTypes.string,
    disabledDays: PropTypes.oneOf(['past', 'future']),
    inputId: PropTypes.string.isRequired,
    isDisabled: PropTypes.bool,
    isRange: PropTypes.bool,
    isRequired: PropTypes.bool,
    isSimple: PropTypes.bool,
    label: PropTypes.string.isRequired,
    offset: PropTypes.number,
    placeholder: PropTypes.string,
    showOnTop: PropTypes.bool,
    selectedDay: PropTypes.string,
    range: PropTypes.shape({
        from: PropTypes.string,
        to: PropTypes.string
    })
};

export default QDSDatepicker;
