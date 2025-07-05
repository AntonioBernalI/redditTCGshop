// src/utils/DevvitMessenger.js
class DevvitMessenger {
  static sendPurchase(cardSlug, price) {
    window.parent.postMessage({
      type: 'purchase',
      data: { cardSlug, price }
    }, '*');
  }
}

export default DevvitMessenger;