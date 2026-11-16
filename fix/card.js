"use strict";

(() => {
  const endpoint = "https://ktgiperxcojlbfvwilzb.supabase.co/functions/v1/fix-card-0312";
  const token = new URLSearchParams(window.location.search).get("id");
  const statusPanel = document.getElementById("status-panel");
  const statusTitle = document.getElementById("status-title");
  const statusDetail = document.getElementById("status-detail");
  const retry = document.getElementById("retry");
  const cardPanel = document.getElementById("card");
  let loading = false;

  function showStatus(title, detail, canRetry = false) {
    document.getElementById("title").textContent = "A little help from Frank.";
    document.title = "A shared fix from Frank";
    document.getElementById("category").textContent = "";
    document.getElementById("category").hidden = true;
    document.getElementById("steps").replaceChildren();
    document.getElementById("disclaimer").hidden = true;
    statusTitle.textContent = title;
    statusDetail.textContent = detail;
    statusPanel.hidden = false;
    cardPanel.hidden = true;
    retry.hidden = !canRetry;
  }

  // External response data must stay plain text, including strings containing markup.
  function validCard(card) {
    return card !== null && typeof card === "object" &&
      typeof card.title === "string" && card.title.length <= 2000 &&
      (card.category === null || (typeof card.category === "string" && card.category.length <= 2000)) &&
      typeof card.needs_disclaimer === "boolean" &&
      Array.isArray(card.steps) && card.steps.length <= 200 &&
      card.steps.every((step) => typeof step === "string" && step.length <= 20000);
  }

  async function loadCard() {
    if (loading) return;
    if (!token || !/^[0-9a-z]{16}$/.test(token)) {
      showStatus("This card link is incomplete", "Ask the person who shared it to send the full link again.");
      return;
    }
    loading = true;
    showStatus("Opening your fix card…", "The saved steps will appear here in a moment.");
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 12000);
    try {
      const response = await fetch(`${endpoint}?id=${token}&format=json`, {
        signal: controller.signal,
        cache: "no-store",
        credentials: "omit",
        referrerPolicy: "no-referrer",
        headers: { Accept: "application/json" },
      });
      if (response.status === 404 || response.status === 410) {
        showStatus("This fix card is no longer available", "The original conversation may have been removed. Ask the sender for a new card.");
        return;
      }
      if (!response.ok || !response.headers.get("content-type")?.includes("application/json")) {
        throw new Error("Card service unavailable");
      }
      const text = await response.text();
      if (text.length > 250000) throw new Error("Unexpected card size");
      const card = JSON.parse(text);
      if (!validCard(card)) throw new Error("Unexpected card response");

      document.getElementById("title").textContent = card.title || "A little help from Frank.";
      document.title = `${card.title || "A shared fix"} — Frank`;
      const category = document.getElementById("category");
      category.textContent = card.category || "";
      category.hidden = !card.category;
      const steps = document.getElementById("steps");
      steps.replaceChildren();
      for (const step of card.steps) {
        const item = document.createElement("li");
        item.textContent = step;
        steps.appendChild(item);
      }
      document.getElementById("empty-steps").hidden = card.steps.length > 0;
      document.getElementById("disclaimer").hidden = !card.needs_disclaimer;
      statusPanel.hidden = true;
      cardPanel.hidden = false;
    } catch {
      showStatus("We couldn’t open this card yet", "Check your connection and try again. Your link is still here.", true);
    } finally {
      window.clearTimeout(timeout);
      loading = false;
    }
  }

  retry.addEventListener("click", loadCard);
  // A restored browser tab rechecks deletion instead of leaving an old card visible.
  window.addEventListener("pageshow", (event) => { if (event.persisted) void loadCard(); });
  void loadCard();
})();
