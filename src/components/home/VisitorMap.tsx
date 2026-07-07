'use client';

import { useEffect, useRef } from 'react';

const MAPMYVISITORS_SRC =
    'https://mapmyvisitors.com/map.js?d=cSEOsZzVjrIXWpVbyFzjnNkVdLfWBn_nwmme8Tfkp3U&cl=ffffff&w=a';

export default function VisitorMap() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        container.innerHTML = '';

        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.id = 'mapmyvisitors';
        script.src = MAPMYVISITORS_SRC;

        container.appendChild(script);

        return () => {
            container.innerHTML = '';
        };
    }, []);

    return (
        <div className="mt-8 flex justify-center px-2">
            <div
                ref={containerRef}
                className="w-full max-w-[280px] min-h-[120px] overflow-hidden text-center"
                aria-label="Visitor map"
            />
        </div>
    );
}
