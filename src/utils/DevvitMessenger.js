class DevvitMessenger {
  static sendPurchase(itemId, price) {
    window.parent.postMessage({
      type: 'purchase',
      data: { itemId, price }
    }, '*');
  }
  
  static sendOpenPack() {
    window.parent.postMessage({
      type: 'openPack',
      data: {}
    }, '*');
  }
  
  static sendMessage(type, data) {
    window.parent.postMessage({
      type,
      data
    }, '*');
  }
}

export default DevvitMessenger;