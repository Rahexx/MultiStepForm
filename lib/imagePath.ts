export function getImagePath(path: string): string {
  const basePath = process.env.__NEXT_PUBLIC_BASE_PATH || '';
  return `${basePath}${path}`;
}
