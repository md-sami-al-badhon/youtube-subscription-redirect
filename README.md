# YouTube Subscription Redirect

🚫 Skip YouTube's Home and Shorts feeds — jump straight to your Subscriptions tab (or customize it to your preference)!

## 🧩 What This Extension Does

This Chrome extension automatically redirects the following YouTube pages:

- 🏠 **Home page** (`youtube.com/` or `?navigation=home`) ➡️ `/feed/subscriptions`
- 🎬 **Shorts pages** (`youtube.com/shorts/*`) ➡️ `/feed/subscriptions` *(can be customized)*

---

## 📁 Project Structure

youtube-subscription-redirect/
├── background.js # Core redirect logic
├── manifest.json # Chrome extension configuration
├── icons/
│ ├── icon16.png
│ ├── icon48.png
│ └── icon128.png
└── README.md


---

## 🛠 Installation (Manual)

1. Clone or download this repository.
2. Open Chrome and go to `chrome://extensions/`
3. Enable **Developer Mode** (top right corner)
4. Click **Load unpacked**
5. Select the folder where `manifest.json` is located

---

## ⚙️ Customizing Redirect Behavior

By default, this extension redirects **both** YouTube Home and Shorts pages to `/feed/subscriptions`.

If you'd like to redirect **Shorts to another page** (e.g., your homepage or a playlist), open `background.js` and modify this part:

```js
 if (shouldRedirect(url)) {
      // Redirecting to the home page. Change the URL if you want to redirect to a different page
      const newUrl = new URL(url.origin + '/');
      newUrl.searchParams.delete('navigation');
      chrome.tabs.update(tabId, { url: newUrl.href });
    }

function shouldRedirect(url) {
 
  // Redirect Shorts
  if (url.pathname.startsWith('/shorts')) {
    return true;
  }

  // add more conditions here if needed

  return false;
}
