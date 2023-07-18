export function getBundleBanner(pkg) {
  const version = pkg.version;
  const authors = '© Algolia, Inc. and contributors';

  return `/*! ${pkg.name} ${version} | MIT License | ${authors} | ${pkg.homepage} */`;
}
