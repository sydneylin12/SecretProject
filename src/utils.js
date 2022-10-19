const isLocalBuild = () => {
	return window.location.href.includes('file');
};

export const getUrl = (filename) => {
	const urlPrefix = isLocalBuild() ? '' : path;
	return urlPrefix + filename;
};