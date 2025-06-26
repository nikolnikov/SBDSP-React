import React, { useEffect, useRef, useState } from 'react';
import DSLoader from '../components/Loader';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export const QDSLoader = ({ 
    customClasses = [],
    isDeterminate = false,
    isCentered = false,
    isFixed = false,
    isSmall = false
}) => {
    const [progress, setProgress] = useState(0);
    const animationFrameIdRef = useRef(null);
    const speed = 2; // Adjust this value to control the speed (higher value = faster)

    useEffect(() => {
        if (isDeterminate) {
            let lastTimestamp = null;

            const animate = timestamp => {
                if (lastTimestamp !== null) {
                    const elapsed = timestamp - lastTimestamp;
                    setProgress(prevProgress => {
                        const increment = (elapsed * speed) / 16.67;
                        if (prevProgress + increment >= 100) {
                            cancelAnimationFrame(animationFrameIdRef.current);
                            return 100;
                        }
                        return prevProgress + increment;
                    });
                }
                lastTimestamp = timestamp;
                animationFrameIdRef.current = requestAnimationFrame(animate);
            };

            animationFrameIdRef.current = requestAnimationFrame(animate);

            return () => cancelAnimationFrame(animationFrameIdRef.current);
        }
    }, [isDeterminate, speed]);

    return (
        <DSLoader
            customClasses={classNames(customClasses)}
            isDeterminate={isDeterminate}
            isCentered={isCentered}
            isFixed={isFixed}
            progress={progress}
            isSmall={isSmall}
        />
    );
};

QDSLoader.propTypes = {
    customClasses: PropTypes.string,
    isCentered: PropTypes.bool,
    isDeterminate: PropTypes.bool,
    isFixed: PropTypes.bool,
    isSmall: PropTypes.bool,
    progress: PropTypes.number,
};