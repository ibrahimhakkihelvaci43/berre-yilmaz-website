'use client';

import { useEffect, useRef } from 'react';

interface CounterProps {
    target: number;
    duration?: number;
}

export default function AnimatedCounter({ target, duration = 2000 }: CounterProps) {
    const ref = useRef<HTMLSpanElement>(null);
    const started = useRef(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !started.current) {
                        started.current = true;
                        const startTime = performance.now();
                        const update = (currentTime: number) => {
                            const elapsed = currentTime - startTime;
                            const progress = Math.min(elapsed / duration, 1);
                            const eased = 1 - Math.pow(1 - progress, 3);
                            el.textContent = Math.floor(eased * target).toString();
                            if (progress < 1) {
                                requestAnimationFrame(update);
                            } else {
                                el.textContent = target.toString();
                            }
                        };
                        requestAnimationFrame(update);
                    }
                });
            },
            { threshold: 0.3 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [target, duration]);

    return <span ref={ref}>0</span>;
}
