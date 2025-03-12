(() => {
  // <stdin>
  function moveImagesAndRemoveEmptyParagraphs() {
    const markdownDivs = document.querySelectorAll(".markdown");
    markdownDivs.forEach((markdownDiv) => {
      if (!markdownDiv) return;
      const paragraphs = markdownDiv.querySelectorAll("p");
      paragraphs.forEach((paragraph) => {
        const images = paragraph.querySelectorAll("img");
        images.forEach((image) => {
          paragraph.parentNode.insertBefore(image, paragraph);
        });
        if (!paragraph.hasChildNodes()) {
          paragraph.parentNode.removeChild(paragraph);
        } else {
          const textContent = paragraph.textContent.trim();
          if (textContent === "") {
            paragraph.parentNode.removeChild(paragraph);
          }
        }
      });
    });
  }
  document.addEventListener("DOMContentLoaded", moveImagesAndRemoveEmptyParagraphs);
  function transformParagraphsWithLinks() {
    const markdownDivs = document.querySelectorAll(".markdown");
    markdownDivs.forEach((markdownDiv) => {
      if (!markdownDiv) return;
      const paragraphs = markdownDiv.querySelectorAll("p");
      paragraphs.forEach((paragraph) => {
        const links = paragraph.querySelectorAll("a");
        if (links.length === 0) return;
        const nonLinkNodes = Array.from(paragraph.childNodes).filter((node) => {
          return node.nodeType === Node.ELEMENT_NODE ? node.tagName !== "A" : node.textContent.trim() !== "";
        });
        if (nonLinkNodes.length > 0) return;
        const div = document.createElement("div");
        div.classList.add("markdown_buttons");
        links.forEach((link) => {
          const clone = link.cloneNode(true);
          clone.classList.add("button");
          div.appendChild(clone);
        });
        paragraph.replaceWith(div);
      });
    });
  }
  document.addEventListener("DOMContentLoaded", transformParagraphsWithLinks);
  function groupMarkdownElements() {
    const markdownDivs = document.querySelectorAll(".markdown");
    markdownDivs.forEach((markdownDiv) => {
      if (!markdownDiv) return;
      const children = Array.from(markdownDiv.children);
      let group = [];
      let i = 0;
      while (i < children.length) {
        const el = children[i];
        if (el.matches("p, ol, ul, h3")) {
          group.push(el);
          i++;
        } else {
          if (group.length > 0) {
            wrapGroup(markdownDiv, group);
            group = [];
          }
          i++;
        }
      }
      if (group.length > 0) {
        wrapGroup(markdownDiv, group);
      }
    });
    function wrapGroup(markdownDiv, group) {
      const wrapper = document.createElement("div");
      wrapper.classList.add("markdown_paragraph");
      markdownDiv.insertBefore(wrapper, group[0]);
      group.forEach((el) => {
        wrapper.appendChild(el);
      });
    }
  }
  document.addEventListener("DOMContentLoaded", groupMarkdownElements);
  var buttons = document.querySelectorAll(".popup_button");
  buttons.forEach((button) => {
    button.addEventListener("click", function() {
      const popupType = this.getAttribute("data-popup");
      const popup = document.querySelector(`.popup[data-popup="${popupType}"]`);
      if (popup) {
        popup.classList.add("show");
      }
    });
  });
  document.querySelectorAll(".popup_close").forEach((button) => {
    button.addEventListener("click", function() {
      const popup = this.closest(".popup");
      popup.classList.add("hiding");
      popup.classList.remove("show");
      popup.addEventListener("transitionend", function() {
        popup.classList.remove("hiding");
      }, { once: true });
    });
  });
  var phrases = [
    "\u041C\u043E\u0434\u044B, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043D\u0435 \u043D\u0430\u0434\u043E \u0441\u043A\u0430\u0447\u0438\u0432\u0430\u0442\u044C.",
    "\u0412\u044B\u0436\u0438\u0432\u0430\u043D\u0438\u0435 \u0441 \u043C\u043E\u0434\u0430\u043C\u0438 \u043F\u0440\u044F\u043C\u043E \u0447\u0435\u0440\u0435\u0437 \u0432\u0430\u0448 \u0432\u0430\u043D\u0438\u043B\u044C\u043D\u044B\u0439 \u043B\u0430\u0443\u043D\u0447\u0435\u0440!",
    "\u0412\u0430\u043D\u0438\u043B\u044C\u043D\u043E\u0435 \u0432\u044B\u0436\u0438\u0432\u0430\u043D\u0438\u0435, \u043D\u043E \u0441 \u043C\u043E\u0434\u0430\u043C\u0438?",
    "\u0423\u043D\u0438\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0431\u043B\u043E\u043A\u0438, \u043C\u043E\u0431\u044B, \u0433\u0435\u043D\u0435\u0440\u0430\u0446\u0438\u044F, \u043C\u0435\u0431\u0435\u043B\u044C, \u043A\u0440\u0430\u0444\u0442\u044B...",
    "\u0421\u043E\u0437\u0434\u0430\u0439\u0442\u0435 \u0441\u0432\u043E\u0439 \u043C\u0438\u0440 \u0438 \u0432\u044B\u0436\u0438\u0432\u0430\u0439\u0442\u0435 \u043F\u0440\u044F\u043C\u043E \u043D\u0430 \u0432\u0430\u043D\u0438\u043B\u043A\u0435 \u0432\u043C\u0435\u0441\u0442\u0435 \u0441 \u0434\u0440\u0443\u0437\u044C\u044F\u043C\u0438!",
    "\u041F\u043E\u0447\u0442\u0438 \u0447\u0442\u043E \u043C\u043E\u0434\u044B, \u0442\u043E\u043B\u044C\u043A\u043E \u0431\u0435\u0437 \u043C\u043E\u0434\u043E\u0432!",
    "\u0412\u0430\u0448\u0430 \u043B\u044E\u0431\u0438\u043C\u0430\u044F \u0434\u043E\u043D\u0430\u0442\u043D\u0430\u044F \u043F\u043E\u043C\u043E\u0439\u043A\u0430!",
    "\u041B\u0443\u0447\u0448\u0438\u0439 \u041C\u0430\u0439\u043D\u043A\u0440\u0430\u0444\u0442 \u0441\u0435\u0440\u0432\u0435\u0440 \u0432\u043E \u0432\u0441\u0451\u043C \u0421\u041D\u0413",
    "\u041E\u0442\u043A\u0440\u043E\u0439\u0442\u0435 \u0434\u043B\u044F \u0441\u0435\u0431\u044F \u043D\u043E\u0432\u044B\u0435 \u0433\u043E\u0440\u0438\u0437\u043E\u043D\u0442\u044B!",
    "\u041A\u0430\u0436\u0434\u044B\u0439 \u0434\u0435\u043D\u044C \u2014 \u044D\u0442\u043E \u043D\u043E\u0432\u0430\u044F \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C!"
  ];
  function randomizeHeader() {
    const randomIndex = Math.floor(Math.random() * phrases.length);
    document.getElementById("randomHeader").textContent = phrases[randomIndex];
  }
  window.onload = randomizeHeader;
  document.getElementById("scrollButton").addEventListener("click", function() {
    document.getElementById("scrollTarget").scrollIntoView({ behavior: "smooth" });
  });
})();
