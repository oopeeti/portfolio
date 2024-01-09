'use client';

import EmptyState from '@/components/EmptyState';

interface ErrorStateProps {
    error: Error;
}

const Error = ({ error }: ErrorStateProps) => {
    return (
        <EmptyState
            title="Uh No!! There was a problem."
            subtitle={error.message || 'Something went wrong.'}
            label="Try again"
        />
    );
};

export default Error;