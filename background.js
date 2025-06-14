chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'loading' && tab.url) {
    const url = new URL(tab.url);

    // Skip non-YouTube sites
    if (!url.hostname.includes('youtube.com')) return;

    // Check if we should redirect
    if (shouldRedirect(url)) {
      // Change the URL if you want to redirect to a different page
      const newUrl = new URL(url.origin + '/feed/subscriptions');
      newUrl.searchParams.delete('navigation');
      chrome.tabs.update(tabId, { url: newUrl.href });
    }
  }
});

function shouldRedirect(url) {
  // Redirect home page and home button
  if (url.pathname === '/' || url.searchParams.get('navigation') === 'home') {
    return true;
  }

  // Redirect Shorts
  if (url.pathname.startsWith('/shorts')) {
    return true;
  }

  // add more conditions here if needed

  return false;
}
