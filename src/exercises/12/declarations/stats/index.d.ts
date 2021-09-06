
declare module 'stats' {
    type Comparator<T> = (x: T, y: T) => number;

    type GetIndex = <T>(input: T[], comparator: Comparator<T>) => number;
    type GetElement = <T>(input: T[], comparator: Comparator<T>) => T | null;

    export const getMaxIndex: GetIndex;
    export const getMinIndex: GetIndex;
    export const getMedianIndex: GetIndex;

    export const getMaxElement: GetElement;
    export const getMinElement: GetElement;
    export const getMedianElement: GetElement;

    export const getAverageValue: <T>(input: T[], getValue: (item: T) => number) => number | null;


}