'use client';

import { useEffect } from 'react';

import EmptyState from '@/components/EmptyState';

interface NotFoundStateProps {
    error: Error;
}

const NotFound = ({ error }: NotFoundStateProps) => {
    useEffect(() => {
        // eslint-disable-next-line no-console
        console.error(error);
    }, [error]);

    return (
        <EmptyState
            title="Oh no!"
            subtitle="Could not find requested resource"
            label="Go back home"
        />
    );
};

export default NotFound;