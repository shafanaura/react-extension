chrome.runtime.onInstalled.addListener(() => {
  console.log("I just installed my chroke extension");
});

chrome.bookmarks.onCreated.addListener(() => {
  console.log("I just bookmarked this page");
});
