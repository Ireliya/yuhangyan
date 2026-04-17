const rawBasePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export const basePath = rawBasePath.endsWith('/')
  ? rawBasePath.slice(0, -1)
  : rawBasePath;

function isAbsoluteUrl(value: string): boolean {
  return /^https?:\/\//i.test(value);
}

export function withBasePath(value: string): string {
  if (!value) return value;
  if (isAbsoluteUrl(value) || value.startsWith('data:')) return value;
  if (!basePath) return value;
  return value.startsWith('/') ? `${basePath}${value}` : `${basePath}/${value}`;
}

