# Login Signup Classifier - Chrome Extension 🔐
This Chrome extension is designed to classify a webpage as either a login or signup page. In contrast to traditional approaches, it uses a machine-learning model with  96-98% precision and recall on a large, manually-labelled dataset of 10,000 popular sites. The model was designed to classify various styles of login and signup forms by analyzing [89 different features](https://github.com/asumansenol/login_signup_classfier_chrome_extension/blob/main/dist/register_login_feature_extraction/register_login_signals.js). This ensures the classifier's effectiveness in identifying login and signup pages, including those with multi-step authentication processes. [The model](https://github.com/asumansenol/login_signup_classfier_chrome_extension/tree/main/dist/model) was developed by using Tensorflow to use in the web browser and in Node.js.


📖 This work is part of an [academic paper](https://cosicdatabase.esat.kuleuven.be/backend/publications/files/conferencepaper/3756). For a more detailed overview visit the [main repository](https://github.com/asumansenol/double_edged_sword_crawler/tree/main/).


## How does it work?

1. Upon each page load, the content script sends login and signup signals from the page and its iframes to the service worker (background.js).
2. The background script forwards these signals to the LoginSignupPageClassifier for page type identification.
3. If the classifier detects a Login or Signup Page, the popup.js is dynamically updated to display the result on the user interface.


## Installation Instructions
1. Open the Extension Management page by navigating to chrome://extensions. The Extension Management page can also be opened by clicking on the Chrome menu, hovering over More Tools then selecting Extensions.
2. Enable Developer Mode by clicking the toggle switch next to Developer mode.
3. Click the LOAD UNPACKED button and select ``Dist`` directory.

**To build the extension**
1. After making changes run ``npm run build``.

https://github.com/asumansenol/login_signup_classfier_chrome_extension/assets/48864422/9ca9751a-3e0b-477d-8c5d-290e5f03e000





