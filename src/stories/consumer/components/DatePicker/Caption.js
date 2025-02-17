import React, { useState, useRef, useEffect } from 'react';
import { useNavigation } from 'react-day-picker';
import classNames from 'classnames';

const Caption = () => {
    const [showYears, setShowYears] = useState(false);
    const [showMonths, setShowMonths] = useState(false);
    const [yearsSet, setYearsSet] = useState([]);
    const { goToMonth, nextMonth, previousMonth, displayMonths } =
        useNavigation();
    const [year, setYear] = useState(new Date().getFullYear());
    const [selectedYear, setSelectedYear] = useState(year);
    const yearsRef = useRef(null);
    const monthsRef = useRef(null);
    const headRef = useRef(null);

    const MONTHS = [
        'JAN',
        'FEB',
        'MAR',
        'APR',
        'MAY',
        'JUN',
        'JUL',
        'AUG',
        'SEP',
        'OCT',
        'NOV',
        'DEC'
    ];

    const selectedDate = new Date(displayMonths);
    const month = selectedDate.getMonth();

    // close the years and months dropdowns when clicking outside
    useEffect(() => {
        const handleClickOutside = e => {
            if (
                yearsRef.current &&
                !yearsRef.current.contains(e.target) &&
                !headRef.current.contains(e.target)
            ) {
                setShowYears(() => false);
            }

            if (
                monthsRef.current &&
                !monthsRef.current.contains(e.target) &&
                !headRef.current.contains(e.target)
            ) {
                setShowMonths(() => false);
            }
        };

        document.addEventListener('click', handleClickOutside, true);

        return () => {
            document.removeEventListener('click', () => {});
        };
    }, []);

    const monthClickHandler = () => {
        if (showMonths) {
            setShowMonths(false);
            setShowYears(false);
        } else {
            setShowYears(!showYears);
        }
    };

    const yearsButtons = () => {
        const yearsToDisplay = [];

        for (let increment = 0; increment <= 23; increment++) {
            yearsToDisplay.push(
                <button
                    onClick={() => {
                        setSelectedYear(selectedYear + increment);
                        setShowYears(false);
                        setShowMonths(true);
                    }}
                    className={classNames('ds-datepicker__years-item', {
                        '--selected':
                            selectedYear + increment ===
                            displayMonths[0].getFullYear()
                    })}
                    key={increment}
                >
                    {selectedYear + increment}
                </button>
            );
        }

        return yearsToDisplay;
    };

    const monthsButtons = () =>
        MONTHS.map((month, index) => {
            return (
                <button
                    onClick={() => {
                        goToMonth(new Date(selectedYear, index));
                        setShowMonths(false);
                        setYear(selectedYear);
                    }}
                    className={classNames('ds-datepicker__months-item', {
                        '--selected': index === displayMonths[0].getMonth()
                    })}
                    key={index}
                >
                    {month}
                </button>
            );
        });

    const leftArrowHandler = () => {
        if (showYears) {
            setYearsSet(yearsSet - 24);
            setSelectedYear(year => year - 24);
        } else if (showMonths) {
            setSelectedYear(prevState => prevState - 1);
        } else {
            previousMonth && goToMonth(previousMonth);
        }
    };

    const rightArrowHandler = () => {
        if (showYears) {
            setYearsSet(yearsSet + 24);
            setSelectedYear(year => year + 24);
        } else if (showMonths) {
            setSelectedYear(prevState => prevState + 1);
        } else {
            nextMonth && goToMonth(nextMonth);
        }
    };

    useEffect(() => {
        setSelectedYear(displayMonths[0].getFullYear());
        setYear(displayMonths[0].getFullYear());
    }, [displayMonths]);

    return (
        <>
            <div className="ds-datepicker__head" ref={headRef}>
                <button
                    className="ds-datepicker__head-prev"
                    onClick={leftArrowHandler}
                    aria-label="Previous years/months"
                >
                    <span className="ds-icon--caret-left"></span>
                </button>
                <button
                    className="ds-datepicker__head-month"
                    onClick={monthClickHandler}
                    aria-label="Select years/months"
                >
                    {showYears
                        ? `${selectedYear} – ${selectedYear + 23}`
                        : showMonths
                        ? selectedYear
                        : `${MONTHS[month]} ${year}`}

                    <span
                        className={`ds-icon--caret-${
                            showYears || showMonths ? 'up' : 'down'
                        } ds-green__500 ds-ml-4`}
                    ></span>
                </button>
                <button
                    className="ds-datepicker__head-next"
                    onClick={rightArrowHandler}
                    aria-label="Next years/months"
                >
                    <span className="ds-icon--caret-right"></span>
                </button>
            </div>
            {showYears && (
                <div className="ds-datepicker__years" ref={yearsRef}>
                    {yearsButtons()}
                </div>
            )}
            {showMonths && (
                <div className="ds-datepicker__months" ref={monthsRef}>
                    {monthsButtons()}
                </div>
            )}
        </>
    );
};

export default Caption;
