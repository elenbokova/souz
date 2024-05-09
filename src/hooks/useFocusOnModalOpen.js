import { useEffect } from 'react';

function useFocusOnModalOpen(isModalOpen, focusRef) {
    useEffect(() => {
        if (isModalOpen) {
            focusRef.current?.focus();
        }
    }, [isModalOpen, focusRef]);
}

export default useFocusOnModalOpen;