'use client';

import EmptyState from '@/components/EmptyState';

interface ErrorStateProps {
    error: Error;
    reset: () => void;
}

export default function Error({ error, reset }: ErrorStateProps) {
    return (
        <EmptyState
            title="Uh No!! There was a problem."
            subtitle={error.message || 'Something went wrong.'}
            showReset
            label="Try again"
            reset={reset}
        />
    );
};