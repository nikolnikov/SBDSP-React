'use client';

import React, { useState, useRef } from 'react';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import DatePickerInput from './DatePickerInput';
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
    label,
    placeholder,
    offset,
    showOnTop
}) => {
    const pastMonth = new Date();

    const [showCalendar, setShowCalendar] = useState(false);
    const [range, setRange] = useState();
    const [selectedDay, setSelectedDay] = useState('');
    const [calendarPositionY, setCalendarPositionY] = useState(0);
    const [fromDate, setFromDate] = useState('');
    const [toDate, setToDate] = useState('');

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
            setSelectedDay(e.target.value);
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
        // set from date if it hasn't been selected

        if (!fromDate) {
            setRange(prevState => ({
                ...prevState,
                from: new Date(selectedFromDate),
                to: undefined
            }));

            return setFromDate(format(selectedFromDate, 'MM/dd/yyyy'));
        }

        // set to date if it hasn't been selected
        if (!toDate) {
            // check if selected date is before the from date
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

        // reset and select new date if from and to dates have been selected
        if (fromDate && toDate) {
            // determine which date was selected
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

                <DatePickerInput
                    customClasses={customClasses}
                    errorMessage={errorMessage}
                    hasError={hasError}
                    hintMessage={hintMessage}
                    handleInputDateChange={handleInputDateChange}
                    toggleCalendar={toggleCalendar}
                    label={label}
                    inputRef={inputRef}
                    isDisabled={isDisabled}
                    isRange={isRange}
                    isRequired={isRequired}
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
                ></DatePickerInput>
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
    label: PropTypes.string.isRequired,
    offset: PropTypes.number,
    placeholder: PropTypes.string,
    showOnTop: PropTypes.bool
};

export default QDSDatepicker;
