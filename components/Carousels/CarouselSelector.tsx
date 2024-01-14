import { cn } from "@/lib/utils";
import { ToggleGroup, ToggleGroupItem } from "@radix-ui/react-toggle-group";
import { useEffect, useState } from "react";

type SelectorProp = {
    className?: string
    amount: number;
    api?: any;
}

const CarouselSelector = ({ className, amount, api }: SelectorProp) => {
    const [selected, setSelected] = useState<number>(0);

    useEffect(() => {
        if (!api) return;
        const updateSelected = () => {
            const currentScrollSnap = api.selectedScrollSnap();
            setSelected(currentScrollSnap);
        };

        updateSelected();
        api.on("select", updateSelected);
        api.on("pointerUp", updateSelected);
    }, [api]);

    useEffect(() => {
        if (!api) return;
        api.scrollTo(selected);
    }, [selected]);

    return (
        <ToggleGroup className={cn(className)} type="single">
            {Array.from({ length: amount }, (_, index) => (
                <ToggleGroupItem
                    key={index}
                    value={`item-${index + 1}`}
                    className={`rounded-full shadow-sm w-10 h-10 ${selected === index ? "bg-white text-black" : "bg-black text-white"}`}
                    onClick={() => api.scrollTo(index)}
                >
                    {index + 1}
                </ToggleGroupItem>
            ))}
        </ToggleGroup>
    )
}

export default CarouselSelector;