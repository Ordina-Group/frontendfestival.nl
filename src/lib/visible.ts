export function visible(node: HTMLElement, callback: () => void) {
    const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                callback();
                observer.unobserve(node);
            }
        },
        { threshold: 0.5 }
    );

    observer.observe(node);

    return {
        destroy() {
            observer.unobserve(node);
        }
    };
}
