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
if (url.pathname.startsWith('/shorts')) {
  // Change this line to redirect wherever you want
  const newUrl = new URL('https://www.youtube.com/feed/subscriptions');
  chrome.tabs.update(tabId, { url: newUrl.href });
}
