import { useState, useEffect, useCallback } from 'react';

function useIsTextTruncated(ref) {
    const [isTruncated, setIsTruncated] = useState(false);

    const checkIfTruncated = useCallback(() => {
        const element = ref.current;
        if (!element) return;

        setIsTruncated(element.scrollWidth > element.offsetWidth);
    }, [ref]);

    useEffect(() => {
        window.addEventListener('resize', checkIfTruncated);
        checkIfTruncated();

        return () => {
            window.removeEventListener('resize', checkIfTruncated);
        };
    }, [checkIfTruncated]);

    return isTruncated;
}

export default useIsTextTruncated;
