/**
 * Open URL in new tab
 * @param {string} URL
 */
export const openInNewTab = (URL: string | URL | undefined) => {
  // Guard
  if (!URL) return;

  window.open(URL, "_blank", "noopener,noreferrer");
};

/**
 * Open URL in the same tab
 * @param {string} URL
 */
export const openInSameTab = (URL?: string) => {
  // Guard
  if (!URL) return;

  window.location.href = URL;
};
