export const sort = <T>(array: Array<T>, sortFunction: ((a: T, b: T) => number)) => {
	const newArray = array.concat();

	newArray.sort(sortFunction);

	return newArray;
}