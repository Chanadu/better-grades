// place files you want to import through the `$lib` alias in this folder.
export function capitalizeString(str: string): string {
	return str.replace(/(^|\s)([a-z])/g, function (m, p1, p2) {
		return p1 + p2.toUpperCase();
	});
}
