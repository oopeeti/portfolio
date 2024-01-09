'use client';

import { useEffect } from 'react';

import EmptyState from '@/components/EmptyState';

interface NotFoundStateProps {
    error: Error;
}

export default function NotFound({ error }: NotFoundStateProps) {
    useEffect(() => {
        // eslint-disable-next-line no-console
        console.error(error);
    }, [error]);

    return (
        <EmptyState
            title="Uh No"
            subtitle="Could not find requested resource"
            showReset
            label="Go back home"
        />
    );
};