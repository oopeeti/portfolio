'use client';

import { useRouter } from 'next/navigation';

import Button from './Button';
import Heading from './Heading';

interface EmptyStateProps {
    title?: string;
    subtitle?: string;
    label?: string;
}

const EmptyState = ({ label = "Back to home", title = 'No exact matches', subtitle = 'Try changing or removing some of your filters.' }: EmptyStateProps) => {
    const router = useRouter();
    return (
        <div className=" h-[60vh] flex flex-col gap-2 justify-center items-center">
            <Heading center title={title} subtitle={subtitle} />
            <div className="w-48 mt-4 flex flex-row gap-2">
                <Button outline label={label} onClick={() => router.push('/')} />
            </div>
        </div>
    );
};

export default EmptyState;