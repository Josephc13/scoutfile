// Scoutfile chat widget: opens the Lab 3 Chatling bot in a floating panel.
(function () {
  var BOT_URL = "https://share.chatling.ai/s/j27nlo2GNVrGJaE";
  var html =
    '<div class="chat-tip" id="chatTip">Ask Scout where a file lives</div>' +
    '<button class="chat-btn" id="chatBtn" aria-label="Open chat">💬</button>' +
    '<div class="chat-panel" id="chatPanel" role="dialog" aria-label="Scout chatbot">' +
    '  <div class="chat-head"><span>Scout · AI file assistant</span>' +
    '    <span><a href="' + BOT_URL + '" target="_blank" rel="noopener">Open full screen ↗</a>' +
    '    <button id="chatClose" aria-label="Close chat">×</button></span></div>' +
    '  <iframe id="chatFrame" title="Scout chatbot" allow="clipboard-write"></iframe>' +
    "</div>";
  var box = document.createElement("div");
  box.innerHTML = html;
  document.body.appendChild(box);

  var panel = document.getElementById("chatPanel");
  var frame = document.getElementById("chatFrame");
  var tip = document.getElementById("chatTip");
  function toggle(open) {
    if (open && !frame.src) frame.src = BOT_URL; // load bot on first open
    panel.classList.toggle("open", open);
    tip.style.display = "none";
  }
  document.getElementById("chatBtn").onclick = function () { toggle(!panel.classList.contains("open")); };
  document.getElementById("chatClose").onclick = function () { toggle(false); };
  document.querySelectorAll("[data-open-chat]").forEach(function (el) {
    el.addEventListener("click", function (e) { e.preventDefault(); toggle(true); });
  });
})();
