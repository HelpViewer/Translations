var _lstr = {
  'MSG_NODATA' : () => `Data file has not been specified. Use <b>?${PAR_NAME_DOC}=</b> followed by the file path in the URI. The default file name <b>${dataPath}</b> was used instead. If the left panel is empty, the file <b>${dataPath}</b> probably does not exist in the viewer\'s local directory. As a next step, check <b>${PAR_NAME_PAGE}=</b> for a valid path inside the help ZIP archive.`,
  'MSG_PATH_NOT_FOUND_IN_ARCH' : () => `Given path <b>${pagePath}</b> is not present inside the help ZIP archive <b>${dataPath}</b>.`,
};