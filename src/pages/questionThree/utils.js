export const sort = (array, sortFunction) => {
	const newArray = array.concat();

	newArray.sort(sortFunction);

	return newArray;
}